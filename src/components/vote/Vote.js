import domUtils from '../../utils/Dom';

import template from './Vote.html'

customElements.define('app-vote', class extends HTMLElement {

	constructor() {
        super();
        this.MESSAGE_SHOW = 5000;
		this.message = '';
        this.onShow = this.show.bind(this)
	}

	connectedCallback() {
		document.addEventListener("ShowVotePreview", this.onShow)
	}

	disconnectedCallback() {
		document.removeEventListener("ShowVotePreview", this.onShow)
    }

    show(evt) {
        const tmpl = template(evt.detail);
        const n = domUtils.htmlToElement(tmpl);

		n.addEventListener('closed.bs.alert', () => {
			this.firstElementChild.parentNode.removeChild(this.firstElementChild)
		});

        window.requestAnimationFrame(() => {
            this.appendChild(n);
            $('#voteModal').modal('show');
        })       
        
    }

});