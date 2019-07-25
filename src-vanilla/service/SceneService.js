import fightService from './FightService.js'
import sceneComponent from "../components/scene/Scene.js"
import CONST from '../const.js';

export default {

    start() {
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            // When ready, auto-scroll 1px to hide URL bar
            window.addEventListener("load", function () {
                // Set a timeout...
                setTimeout(function () {
                    // Hide the address bar!
                    window.scrollTo(0, 1);
                }, 0);
            });
        }

        document.addEventListener("StartVote", this.startVote);
        document.addEventListener("StopVote", this.stopVote)
    },


    /*
    start() {
        document.addEventListener('ToggleVote', this.onToggleVote.bind(this));

        setTimeout(() => {
			const evt = new CustomEvent("ToggleVote", {detail: {fighters: fightService.getFighters()}});
			document.dispatchEvent(evt);
		}, 2000);
    },

    onToggleVote(evt) {
        console.log('onToggleVote');
        if (this.step == 0) {
            this.createScene(evt.detail);
            this.step = 1;
        } else {
            // this.emptyScene();
            this.step = 0;
        }
        /*
        setTimeout(() => {
			const evt = new CustomEvent("ToggleVote", {detail: {fighters: this.fighters}});
			document.dispatchEvent(evt);
        }, 2000);
        */

    // },

    startVote() {
        console.log("showFigthers");
        const frag = document.createDocumentFragment();
        const figthers = fightService.getFigthers()
        const positions = CONST.SCENE_POSITIONS.FIGHTERS[''+figthers.length];
        figthers.forEach((el, idx) => {
            el.index = idx;
            frag.appendChild(sceneComponent.createFighter(el, idx, positions[idx]));
        })
        const s = document.querySelector('a-scene');
        s.querySelectorAll("[waiting]")
            .forEach(el => el.parentElement.removeChild(el));
        s.appendChild(frag);
        s.flushToDOM(true);
    },

    stopVote() {
        console.log("stopVote");
        const s = document.querySelector('a-scene');

        s.querySelectorAll("[vote-marker]")
            .forEach(el => el.parentElement.removeChild(el));
        
        const frag = document.createDocumentFragment();
        frag.appendChild(sceneComponent.createWaiting());
        s.appendChild(frag);
        s.flushToDOM(true);

    }

}