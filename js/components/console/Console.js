customElements.define('app-console', class extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const template = document.getElementById("tmpl-console");
        this.appendChild(template.content.cloneNode(true));
    }

    append(str) {
        const n = this.querySelector('.console');
        const c = document.createTextNode();
        c.textContent = str;
        n.appendChild(c);
    }

    clear() {
        const n = this.querySelector('.console');
        n.textContent = "";
    }
})