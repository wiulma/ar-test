import domUtils from '../../utils/Dom';
import voteService from '../../service/VoteService';
import notificationService from '../notification/NotificationService';

import template from './Vote.html'

import './_vote.scss'

customElements.define('app-vote', class extends HTMLElement {

	constructor() {
        super();
        this.current;
        this.MESSAGE_SHOW = 5000;
		this.message = '';
        this.onShow = this.show.bind(this);
        this.listeners = {
            'save': this.save.bind(this),
            'close': this.close.bind(this)
        }
	}

	connectedCallback() {
		document.addEventListener("ShowVotePreview", this.onShow)
	}

	disconnectedCallback() {
		document.removeEventListener("ShowVotePreview", this.onShow)
    }

    clearEvents() {
        this.querySelector(".btn-save").removeEventListener("click",this.listeners.save);
        this.querySelector(".btn-close").removeEventListener("click", this.listeners.close);
    }

    show(evt) {
        const tmpl = template(this.current = evt.detail);
        const n = domUtils.htmlToElement(tmpl);
        
        window.requestAnimationFrame(() => {
            this.appendChild(n);

            this.querySelector(".btn-save").addEventListener("click",this.listeners.save);
            this.querySelector(".btn-close").addEventListener("click", this.listeners.close);

            const m = $('#voteModal');
            m.on('hidden.bs.modal', () => {
                this.clearEvents();
                m.remove();
            });
            m.modal('show');
        })
        
    }

    save(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        const {name, id} = this.current;
        voteService.vote(id)
            .then( () => {
                this.current = null;
                $("#voteModal").modal("hide");
                notificationService.show(
                  {
                    text: `Hai votato ${name}!`
                  },
                  "success");
            })
    }

    close(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.current = null;
        $("#voteModal").modal("hide");
    }

});