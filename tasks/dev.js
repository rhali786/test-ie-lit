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
  browserSync.reload();
});

bundler.bundle();