const transpileForIE = require('./transpile-for-ie');

const Bundler = require("parcel-bundler"),
  Path = require("path"),
  browserSync = require("browser-sync").create(),
  fs = require("fs-extra"),
  entryFiles = Path.join(__dirname, "../src/*.html"),
  options = {
    outDir: "./dist",
    publicUrl: '.',
    watch: true,
    cache: true,
    cacheDir: ".cache",
    minify: false,
    target: "browser",
    https: false,
    logLevel: 3,
    hmr: false, 
    sourceMaps: true,
    detailedReport: false,
    autoinstall: false
  },
  bundler = new Bundler(entryFiles, options);
  
  fs.removeSync('dist');


bundler.on("bundled", async () => {
  browserSync.init({
    serveStatic: ["./dist"],
    port: 8081
  }, () => { });
});

bundler.on("buildEnd", () => {
  // setTimeout is to avoid browserSync throwing an error
  // after the IE11 transpile is done 
  setTimeout(function() {
    transpileForIE("dist");
    browserSync.reload();
  },0)
});

bundler.bundle();