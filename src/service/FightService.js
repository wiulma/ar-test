export default {

    step : 0,

    fighters: [
        {
            id: 'f1',
            avatar: 'duck',
            name: 'fighter 1',
            preview: '/assets/remote/1.jpg'
        }/*,
        {
            id: 'f2',
            avatar: 'duck',
            name: 'fighter 2',
            preview: '/assets/remote/2.jpg'
        },
        {
            id: 'f3',
            avatar: 'duck',
            name: 'fighter 3',
            preview: '/assets/remote/3.jpg'
        }*/
    ],

    get(id) {
        return this.fighters.find( elm => elm.id == id)
    }
}