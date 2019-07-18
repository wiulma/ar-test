export default {

    index: 0,

    createFighter(data, id, view) {
        const df = document.createDocumentFragment();
        const {x, y, z} = view.position;

        const c = document.createElement('a-entity');
        c.setAttribute('id', id);
        c.setAttribute("data-id", data.id);
        c.setAttribute('vote-marker', null);
        c.classList.add('clickable');
        c.setAttribute("position", Object.values(view.position).join(' '));
        
        const f = document.createElement('a-entity');
        //f.setAttribute('id', id);
        //f.setAttribute('vote-marker', null);
        //f.classList.add('clickable');
        f.setAttribute("gltf-model", "#model-fighter-"+data.index);
        // f.setAttribute("position", Object.values(view.position).join(' '));
        //f.setAttribute("data-id", data.id);
        f.setAttribute("scale", "0.5 0.5 0.5");
        //df.append(f);
        c.append(f);

        const b = document.createElement('a-image');
        b.setAttribute('color', '#fff');
        b.setAttribute('src', '/assets/remote/1.jpg');
        b.setAttribute('material', 'color: #fff; transparent: false; vertexColors: face; wireframeLinewidth: -7.23');
        b.setAttribute('height', 1);
        b.setAttribute('width', 1.5);
        b.setAttribute("position", [0, .6, .5].join(' '));
        // <a-image color="tomato" material="color: #ffffff; transparent: false; vertexColors: face; wireframeLinewidth: -7.23" src="/assets/remote/1.jpg" height="1" geometry="" width="1.5" position="-3.71051 2.64767 -4.33986"></a-image>
        // df.append(b);
        c.append(b);

        const t = document.createElement('a-text');
        t.setAttribute("position", [0, 0, -.3].join(' '));
        t.setAttribute('value', data.name);
        //t.setAttribute('vote-marker', null);
        //t.classList.add('clickable');
        // df.append(t);
        c.append(t);

        df.append(c);
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