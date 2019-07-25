import { BaseElement, html } from '../../toolkit';

class LoginHelp extends BaseElement{
  render(){
    return html`<h1>Login Help</h1>`
  }
}

customElements.define('login-help', LoginHelp)