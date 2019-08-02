process.env.NODE_ENV = 'production';
const transpileForIE = require('./transpile-for-ie');


const Bundler = require("parcel-bundler"),
  Path = require("path"),
  fs = require("fs-extra"),
  entryFiles = Path.join(__dirname, "../src/*.html"),
  options = {
    outDir: "./dist",
    publicUrl: '.',
    watch: false,
    cache: false,
    cacheDir: ".cache",
    minify: true,
    target: "browser",
    https: false,
    logLevel: 3,
    hmr: false,
    sourceMaps: true,
    detailedReport: false,
    autoinstall: false
  };
  
fs.removeSync('dist');


const bundler = new Bundler(entryFiles, options);

bundler.bundle().then(() => {
  transpileForIE("dist");
  console.log("done building");
}, e => console.log(e));