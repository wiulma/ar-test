export default {

    index: 0,

    createFighter(data, id, view) {
        const df = document.createDocumentFragment();
        const {x, y, z} = view.position;
        
        const f = document.createElement('a-entity');
        f.setAttribute('id', id);
        f.setAttribute('vote-marker', null);
        f.classList.add('clickable');
        f.setAttribute("gltf-model", "#glbt-"+data.avatar);
        f.setAttribute("position", Object.values(view.position).join(' '));
        f.setAttribute("data-id", data.id);

        const t = document.createElement('a-text');
       
        t.setAttribute("position", [x, y-.3, z].join(' '));
        t.setAttribute('value', data.name);
        t.setAttribute('vote-marker', null);
        t.classList.add('clickable');
        df.append(f);
        df.append(t);
        return df;
    }

}