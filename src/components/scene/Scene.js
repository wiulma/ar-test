export default {

    index: 0,

    createFighter(data, id, view) {
        const df = document.createDocumentFragment();
        const {x, y, z} = view.position;
        
        const f = document.createElement('a-entity');
        f.setAttribute('id', id);
        f.setAttribute('vote-marker', null);
        f.classList.add('clickable');
        f.setAttribute("gltf-model", "#model-fighter-"+data.index);
        f.setAttribute("position", Object.values(view.position).join(' '));
        f.setAttribute("data-id", data.id);
        df.append(f);

        const b = document.createElement('a-box');
        b.setAttribute('color', 'tomato');
        //b.setAttribute('src', '/assets/remote/1.jpg');
        b.setAttribute('material', 'src: /assets/remote/1.jpg; side: front');
        b.setAttribute('depth', 0);
        b.setAttribute('height', 2);
        b.setAttribute('width', 3);
        b.setAttribute("position", [x, y+1.4, z].join(' '));
        df.append(b);

        // <a-box color="tomato" material="depthTest: false; repeat: 0 0; vertexColors: face; fog: false" src="/assets/remote/1.jpg" depth="0" geometry="" height="2" width="3" position="-4 3.4 -5"></a-box>

        const t = document.createElement('a-text');
        t.setAttribute("position", [x, y-.2, z].join(' '));
        t.setAttribute('value', data.name);
        t.setAttribute('vote-marker', null);
        t.classList.add('clickable');
        df.append(t);

        return df;
    },

    createWaiting() {
        const t = document.createElement('a-text');
        t.setAttribute("waiting", null);
        t.setAttribute("color", 'rgb(198, 200, 121)');
        t.setAttribute("opacity", '.8');
        t.setAttribute("position", '-1.2 1.7 -1');
        t.setAttribute('value', "Waiting for next fight...");
        return t;
    }

}