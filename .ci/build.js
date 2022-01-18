#!/usr/bin/env node

const exec = require("child_process").execSync
const fs = require("fs-extra")
const path = require("path")

const pathToUi5 = path.resolve("node_modules/.bin/ui5")
const cmd = `${pathToUi5} build preload --exclude-task createDebugFiles generateVersionInfo replaceCopyright replaceVersion -a`

console.log("Building UI5 project ...")
fs.emptyDirSync("dist")
exec(cmd, { stdio: "inherit", cwd: path.resolve("./") })
