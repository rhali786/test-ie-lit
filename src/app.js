
import "core-js/stable";
import "regenerator-runtime/runtime";

import "@webcomponents/webcomponentsjs"

import {
  BaseElement,
  html,
  subscribeToRouteChanges
} from "./toolkit";

import "./imports";

class PWXEnrollment extends BaseElement {
  static get properties() {
    return {
      _page: {
        type: String
      }
    }
  }

  constructor() {
    super();
    this._page = 'loginHelp';
  }

  connectedCallback() {
    super.connectedCallback();
    this._routerUnsubscribe = subscribeToRouteChanges((routerState) => {
        this._page = routerState.route.name
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._routerUnsubscribe();
  }


  _routes() {
    switch (this._page) {
      case 'dashboard':
        return html`<test-dashboard></test-dashboard>`
      case 'loginHelp':
      default:
        return html`<login-help></login-help>`
    }
  }


  render() {
    return html`
      ${this._routes()}
    `
  }
}

customElements.define("pwx-enrollment-app", PWXEnrollment);
