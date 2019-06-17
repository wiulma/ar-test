import fightService from './FightService'
import sceneComponent from "../components/scene/Scene"

export default {

    start() {
        document.addEventListener("StartVote", this.showFigthers);
        document.addEventListener("StopVote", this.emptyScene)
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

    showFigthers() {
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
        document.querySelector('a-scene').appendChild(frag);
        document.querySelector('a-scene').flushToDOM(true);
    },

    emptyScene() {
        console.log("emptyScene");
        const s = document.querySelector('a-scene');

        s.querySelectorAll("a-entity[gltf-model]")
            .forEach(el => el.parentElement.removeChild(el));

    }

}