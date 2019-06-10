export default {

    index: 0,

    createFighter(data, id, view) {
        const f = document.createElement('a-entity');
        f.setAttribute('id', id);
        f.setAttribute('vote-marker', null);
        f.classList.add('clickable');
        f.setAttribute("gltf-model", "#glbt-"+data.avatar);
        f.setAttribute("position", view.position);
        f.setAttribute("data-id", data.id);
        return f;
    }

}