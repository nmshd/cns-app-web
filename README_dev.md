# Enmeshed App

[TOC]

## Configuration of Development Environment

### Editor

It is **mandatory** to use the editor [Visual Studio Code](https://code.visualstudio.com) along with some [plugins](https://js-soft.atlassian.net/wiki/spaces/DEVKB/pages/1118699560/Plugins). These plugins are included as recommended plugins for the vscode workspace and can be installed by pressing ctrl + shift + x and searching for _@recommended_.

### Software Requirements

-   [Nodejs](https://nodejs.org/en/)

-   For locally building the native applications, [Cordova](https://cordova.apache.org) has to be installed and configured. Follow the instructions for the respective platforms on the Cordova [website](https://cordova.apache.org/docs/en/latest/).

## Building the App

The application can be built to run natively on Android, iOS, Windows, macOS and Linux.

### Building Native App Locally

Depending on the development OS the native applications can be built locally.

| Development OS | Android | iOS | Electron |
| -------------- | ------- | --- | -------- |
| Windows        | Yes     | No  | Yes      |
| Linux          | Yes     | No  | Yes      |
| macOS          | Yes     | Yes | Yes      |

To build the native application, several npm scripts can be used. They differentiate in what platform the application should be built for (iOS, Android, Electron), where the application should be built (local / ci) and which release state the application should have (release / develop)

The build scripts have the following scheme:

```
build:{develop|release}:local:{ios|android|electron}
```

They can be f.e. executed as follows:

```
cns-app-blueprint: $ npm run build:develop:local:electron
```

### Building Native App in Ci

Upon pushing changes to this repository via git, the native applications are built remotely and the built apps are sent to the commiting E-Mail address.

-   CI user must have ssh-key based auth against git (bitbucket) repo

The build scripts for the ci should only be executed by the ci and not locally. They have the following scheme:

```
build:{develop|release}:ci:{ios|android|electron}
```

They can be f.e. executed as follows:

```
cns-app-blueprint: $ npm run build:release:ci:android
```

### Configuring the App

Inside the folder _config_ there are three JSON files. Depending on the build script, a different configuration will be made accessible to the application during runtime:

-   Develop builds will make the file developmentConfig.json accessible
-   Release builds will make the file releaseConfig.json accessible
-   Emulations of the UI in the browser will make the file webappConfig.json accessible

The configuration can be accessed by an API during runtime at _window.jss.config_.

The configuration specified in the files cannot be changed during runtime and is therefore called the designtime configuration. During runtime a installation specific configuration called app configuration can also be created by the API at window.jss.config

Additional Cordova specific configuration are located at app/config.xml. Most important configurations are:

-   Scheme and Hostname of the app: The scheme and hostname defined for android create an origin of type "nmshd://[dev/stage/prod]". This origin is f.e used to implement CORS on the Enmeshed backend.
-   Allowing navigation to localhost: allow-navigation href="http://localhost:8080/\*" enables the iOS app to navigate the local webserver of the app

### Configuring the Build Process

Build scripts are located inside the folder `app/scripts/build`. They utilise cordova and nodejs to implement the build steps for the native applications. Additionally the folder `app/scripts/build/config` contains configuration objects which are used by cordova to determine the package format of the built app along with signing configurations. If for example a native build for electron is executing on a linux machine the file `app/scripts/build/config/linuxBuild.json` will be used by cordova.

To configure the electron-builder, the `build` property inside `app/package.json` can be modified.

## Starting the App

### Starting Native App with Remote Sources

Upon pushing changes to this repository via git, the native applications are built remotely and the built apps are sent to the commiting E-Mail address. The app can then be downloaded to the device and installed manually. Depending on the device, the installation from a untrusted source needs to be enabled.

### Starting Native App with Local Sources

To start a native application with local sources, several npm scripts can be used. They differentiate in what platform the application should run on (iOS, Android, Electron).

Before a native application can be started, the build script for the respective platform has to be executed.

For starting the application natively on Android or iOS make sure that the mobile device is connected to the computer and properly configured. Depending on the device, debugging features must be enabled. Visit the Cordova [website](https://cordova.apache.org/docs/en/latest/) for more information.

The start scripts have the following scheme:

```
start:{ios|android|electron}
```

They can be f.e. executed as follows:

```
cns-app-blueprint: $ npm run start:android
```

### Starting App in Browser

For developing the user interface without caring about the native devices, the application can be hosted locally and accessed through a browser. To do so, run the following npm script:

```
cns-app-blueprint: $ npm start
```

The console will log the local address at which the application is hosted. This address can then be accessed by a webbrowser.

## Development Workflow

### Git

It is **mandatory** to follow the commit message guidline when commiting to this repository.

It is **forbidden** (not possible) to merge either into the master or develop branch. Only pull requests with at least on approval will be merged into the develop branch.

When merging feature branches use the squash strategy, when merging bug branches use the fast-forward strategy.

Changes merged into the develop branch **must** be stable.

### Atlassian Integration

It is recommended to use the integration of atlassian into vscode to create / edit and view issues and pull requests.

## Application Development

General information about the inner workings of several features of the Enmeshed app.

### Cordova Plugins

There are several cordova plugins available at window.jss during runtime, which provide features like filesystem access, database persistence and local notifications. For a complete list and description visit wiki.

### Push Notifications

During the bootstrap of the application, the feature of recieving remote push notifications is initialised. There are several events related to push notifications, which are published using the UI5 event bus:

-   Event for registration of the push service: channel = "**push**" event = "**registration**"
    -   The data carried along the event is the push token (fcm or apns).
-   Event for recieving a remote push notification: channel = "**push**" event = "**notification**"
    -   The data carried along the event is the property _content_ defined in the remote notification. Data additionally contains the properties _notificationForeground_, _notificationId_ and _processing_. When subscribing to this event make sure to call _processing.start()_ and _processing.stop()_ at the beginning and end of your function.
-   Event for user selecting a notification: channel = "**push**" event = "**selection**"
    -   The data carried along the event is either the property _content_ defined in the remote notification or the data object which was passed to the local notifications API. Data additionally contains the property _notificationLocal_ if the notification was created locally by plugin-local-notifications.

By default remote notifications are only displayed, if the app (on mobile devices) is killed. Otherwise local notifications should be displayed by subscribers of the push notification event using plugin-local-notifications at window.jss.notifications.

### Deep Links

The Enmeshed app is able to handle selections of a URL in the following format: `nmshd://`. If the application is open, an event will be published by the UI5 event bus: channel = "**url**" event = "**open**" data = "**url**". If the application is closed, it will start and then publish the event.

The implementation for this feature is using the plugin `cordova-plugin-customurlscheme` for mobile devices and in case of electron a modification of the main process implemented at `app/scripts/build/res/electronMainProcessPatch.js` injected by `app/scripts/build/electron.js`.

This feature is used in order to handle QR-Codes attached to a URL in the format: `nmshd://qr#base64qrcode`.

### Custom Filename Extension

The Enmeshed app is able to be chosen as an application to open files with the .nmshd filename extension. (On Android no restriction to only .nmshd filename extensions is possible. Therefore all filetypes can be opened by the app)
The configurations for android and ios are located in the config.xml and for electron in the package.json

In the file bootstrap-launch-options.js, 2 events related to files get published:

-   view file with nmshd filename-extension => publish oEventBus: channel = "file" event = "view"
    -   The data carried along the event is the property _uri_ with the respective uri of the file as value
-   send file with nmshd filename-extension => publish oEventBus: channel = "file" event = "send"
    -   The data carried along the event is the property _uri_ with the respective uri of the file as value

## Common Issues

### Issues when building native applications locally

In many cases deleting the folders _platforms_ and _plugins_ at _cns-app-blueprint/app_ and starting the build process again will resolve the issue.

## Test the app

`wdi5` is used as the test framework.  
For any native test a binary build for the desired platform is needed.

### Test Execution

#### Browser

`npm run test` runs tests with Google Chrome in regular mode.  
If the env var `MOBILE=true` is set, Chrome is run with mobile emulation (for iPhone 6/7/8).  
If the env var `HEADLESS=true` is set, Chrome runs ins headless mode.

#### CI

`npm run test:ci` runs tests with _headless_ Google Chrome

-   in desktop mode
-   in mobile emulation mode

in parallel.

#### Electron

(wip) `npm run test:electron`  
the setup will be done automatically

#### iOS

(wip) `npm run test:ios`

#### Android

(wip) `npm run test:android`

### In App Navigation during Testing

Use the `wdi5().getUtils().goTo(<hash/route>)` function to navigate.

Maybe need to add

```xml
<allow-navigation href="*" />
```

to config.xml

### Environment Setup

https://js-soft.atlassian.net/wiki/spaces/DEVKB/pages/1376092174/Environment+Setup
