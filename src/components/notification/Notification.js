import domUtils from '../../utils/Dom';
import template from './notification.html.js';

import './_notification.scss'

customElements.define('app-notification', class extends HTMLElement {

	constructor() {
        super();
        this.MESSAGE_SHOW = 5000;
		this.message = '';
		this.onShow = this.show.bind(this)
	}

	connectedCallback() {
		document.addEventListener("showNotification", this.onShow)
	}

	disconnectedCallback() {
		document.removeEventListener("showNotification", this.onShow)
	}

	show(evt) {
		this.message = evt.detail;
        (this.message != '') && this.notifyMessage()
        /*setTimeout(() => {
            $('.notification').alert('close')
		}, this.MESSAGE_SHOW);
		*/
	}

	notifyMessage() {
		const tmpl = template(this.message);
        const n = domUtils.htmlToElement(tmpl);

		n.addEventListener('closed.bs.alert', () => {
			this.firstElementChild.unbind("closed.bs.modal");
			this.firstElementChild.parentNode.removeChild(this.firstElementChild);
		});

		window.requestAnimationFrame(() => {
			this.appendChild(n);
		})		
	}

})