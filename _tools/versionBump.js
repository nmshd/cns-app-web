const fs = require("fs")
const prompt = require("prompt")

function updatePackageJsons(newVersion) {
    const files = ["package.json"]
    files.forEach((file) => {
        const json = JSON.parse(fs.readFileSync(file))
        json.version = newVersion
        fs.writeFileSync(file, JSON.stringify(json, null, 4))
        console.info(`bumped ${file} to ${newVersion}`)
    })
}

function updateManifestJson(newVersion) {
    const file = "webapp/manifest.json"
    const json = JSON.parse(fs.readFileSync(file))
    json["sap.app"].applicationVersion.version = newVersion
    fs.writeFileSync(file, JSON.stringify(json, null, 4))
    console.info(`bumped ${file} to ${newVersion}`)
}

prompt.start()
prompt.get(
    {
        properties: {
            version: {
                description: `enter new version - current: (${require("./package.json")["version"]})`,
                type: "string",
                pattern: /^([0-9]|[1-9][0-9]).([0-9]|[1-9][0-9]).([0-9]|[1-9][0-9])?$/,
                message: 'not in semantic version format: "xx.xx.xx"',
                required: true
            }
        }
    },
    (err, result) => {
        if (err) {
            return
        }

        const newVersion = result.version
        updatePackageJsons(newVersion)
        updateManifestJson(newVersion)
    }
)
