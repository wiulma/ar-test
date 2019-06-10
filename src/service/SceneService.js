import SceneComponent from "../components/scene/Scene";

export default {

    step : 0,

    fighters: [
        {
            id: 'f1',
            avatar: 'duck',
            name: 'fighter 1'
        },
        {
            id: 'f2',
            avatar: 'duck',
            name: 'fighter 2'
        },
        {
            id: 'f3',
            avatar: 'duck',
            name: 'fighter 3'
        }
    ],
    
    start() {
        window.addEventListener('ToggleVote', this.onToggleVote.bind(this));

        setTimeout(() => {
			const evt = new CustomEvent("ToggleVote", {detail: {fighters: this.fighters}});
			window.dispatchEvent(evt);
		}, 2000);
    },

    onToggleVote(evt) {
        console.log('onToggleVote');
        if (this.step == 0) {
            this.createScene(evt.detail);
            this.step = 1;
        } else {
            this.emptyScene();
            this.step = 0;
        }
        
        setTimeout(() => {
			const evt = new CustomEvent("ToggleVote", {detail: {fighters: this.fighters}});
			window.dispatchEvent(evt);
		}, 2000);

    },

    createScene(data) {

        
        /*
        var box = document.createElement('a-box');
        box.setAttribute("color", "red");
        box.setAttribute("position", "0 2 -5");
        box.setAttribute("rotation", "0 45 45");
        box.setAttribute("scale", "2 2 2");
        box.setAttribute("vote-marker", "");
        box.setAttribute("data-id", "1");
        document.querySelector('a-scene').appendChild(box);
        */
       const frag = document.createDocumentFragment();
       let posy = -4;
       data.fighters.forEach( (el, idx) => {
            const view = {
               position: (posy+" 2 -5")
            };
            frag.appendChild(SceneComponent.createFighter(el, idx, view));
            posy += 2;
       })
       document.querySelector('a-scene').appendChild(frag);
       // debug
       document.querySelector('a-scene').flushToDOM(true); 
    },

    emptyScene() {
        const s = document.querySelector('a-scene');

        s.querySelectorAll("a-entity[gltf-model]")
            .forEach( el => el.parentElement.removeChild(el));
        
    }

}