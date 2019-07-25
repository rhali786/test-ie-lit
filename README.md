# Steps needed to run in ie 11

add polyfills for ie 
```javascript
import "core-js/stable";
import "regenerator-runtime/runtime";

```
add polyfills for webcomponents

```javascript
import "@webcomponents/webcomponentsjs"
```

and set the browserlist in a browserlist file or package.json
```json
[
    ">0.2%",
    "not dead",
    "not op_mini all",
    "IE 11"
  ]
```
and set up babelrc to transpile 
```json
{
    "plugins": [
        "@babel/plugin-transform-classes"
    ],
    "presets": ["@babel/preset-env"]
}
```
# Why This isn't working.

right now this will not work, because lit-element uses the `extends` keyword and `const` which is not valid in IE, and with <a href="https://github.com/parcel-bundler/website/issues/312">parcel bundler node_modules are not transpiled.</a> It does mention being able to transpile aliased modules but I have gotten around to testing it, and it is not well documented. 