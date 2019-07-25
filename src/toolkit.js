import { LitElement, html } from "lit-element";

class BaseElement extends LitElement {
  // returning "this" turns off shadow DOM for our custom elements
  // which makes styling and events more intuitive
  createRenderRoot() {
    return this;
  }
}

import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";

const router = createRouter([
  { name: "loginHelp", path: "/" },
  { name: "dashboard", path: "/dashboard" }
]);

router.usePlugin(
  browserPlugin({
    useHash: true,
    strictQueryParams: true
  })
);
router.start();

const subscribeToRouteChanges = (handler) => {
  handler({
    route: router.getState()
  });
  return router.subscribe(handler);
}

export { BaseElement, html, subscribeToRouteChanges };

