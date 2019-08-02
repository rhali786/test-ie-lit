const fs = require('fs-extra');
const babel = require('@babel/core')

function transpileFileForIE(path) {
    const code = babel.transformFileSync(path, {
        "presets": [
            [
              "@babel/preset-env",
              {
                "modules": false,
                "targets": {
                    "ie": "11"
                  }
              }
            ]
          ]
    }).code;
    fs.writeFileSync(path, code);
}

function transpileForIE(folderPath) {
    const files = fs.readdirSync(`${folderPath}`);

    const filesToBuildForIE = [];
    files.forEach(file => {
        if (file.indexOf('.js') === file.length-3) {
            filesToBuildForIE.push(file);
        }
    });

    for (let i=0;i<filesToBuildForIE.length;i++) {
        transpileFileForIE(`${folderPath}/${filesToBuildForIE[i]}`);
    }

    console.log("JS bundles transpiled to ES5 for IE11 support.");
}
module.exports = transpileForIE;