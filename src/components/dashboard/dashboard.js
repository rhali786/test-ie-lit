import { BaseElement, html } from '../../toolkit';

class Dashboard extends BaseElement {

  updateEmail(e){
    this._email = e.target.value
  }

  postEmail(message) {
    return () => {
      $.ajax({
        type: "POST",
        url: "/itsasectet",
        data: { "to": this._email, "message": message, "variables": ["dan", "asd", "security risk"] },
        dataType: "text/json"
      });
    }
  }

  render() {
    return html`<style></style>
    
    
    <div>
        <input @change=${this.updateEmail} />
        <button class="btn_Send_Denial_Email" @click=${this.postEmail('registration_denial_email')}>Send Denial Email</button>
        <button class="btn_Send_Denial_Email" @click=${this.postEmail('registration_approval_email')}>Send Approval Email</button>
        <button class="btn_Send_Denial_Email" @click=${this.postEmail('password_reset_email')}>Send Reset Email</button>
        <button class="btn_Send_Denial_Email" @click=${this.postEmail('approved_login_reminder')}>Send Reminder Email</button>
        <button class="btn_Send_Denial_Email" @click=${this.postEmail('confirmation_email')}>Send Confirmation Email</button>
    </div>`
  }
}

customElements.define('test-dashboard', Dashboard)