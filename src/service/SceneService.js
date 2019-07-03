import fightService from './FightService'
import sceneComponent from "../components/scene/Scene"

export default {

    start() {
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
        let posy = -4;
        fightService.fighters.forEach((el, idx) => {
            const view = {
                position: {
                    x: posy,
                    y: 2,
                    z: -5
                }
            };
            frag.appendChild(sceneComponent.createFighter(el, idx, view));
            posy += 2;
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