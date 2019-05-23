const positionService = {

    geoOptions: {
        enableHighAccuracy: true
    },

    init() {

        var geoSuccess = function(position) {
            console.log(position);
        }
        this.watchid = navigator.geolocation.watchPosition(geoSuccess, null, this.geoOptions);

    },

    stop() {
        navigator.geolocation.clearWatch(this.watchid);
    }
}