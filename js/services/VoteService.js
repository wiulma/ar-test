const voteService = {

    markerId: "vote-marker",

    vote() {
        return positionService.isInsideArea()
            .then(() => {
                console.log("Vote");
                this.show();
            })
            .catch( (err)=> {
                console.warn(err);
                notificationService.info("You can't vote")
            });
    },

    show() {
        const n = document.getElementById("tmpl-vote").content.cloneNode(true);
        const m = n.firstElementChild;
        m.setAttribute("id", this.markerId);
        m.addEventListener("transitionend", function show () {
            m.removeEventListener("transitionend", show);
            m.classList.remove("anim-show");
        });
        document.getElementById("scene").appendChild(n);
        m.classList.add("show");
        m.classList.add("anim-show");
        setTimeout(() => {
            m.style.opacity = ".99";
            this.hide();
        }, 1000)
    },
    
    hide() {
        const n = document.getElementById(this.markerId);
        n.addEventListener("transitionend", function hide () {
            n.removeEventListener("transitionend", hide);
            n.classList.remove("show");
            n.classList.remove("anim-hide");
            n.parentNode.removeChild(n);

        });
        n.classList.add("anim-hide");

    }
}