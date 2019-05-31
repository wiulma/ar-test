const positionService = {

    geoOptions: {
        enableHighAccuracy: true
    },

    init() {
        this.insideArea = false;
        this.watchid = navigator.geolocation.getCurrentPosition(
            () => {
                console.log("get position done")
            }, 
            (error) => {
                console.warn("get position error", error)
            },
            this.geoOptions);
    },

    isInsideArea() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                    const coords = position.coords;
                    const area = CONST.AREA;
                     (coords.latitude >= area.LAT[0] && coords.latitude <= area.LAT[1] && 
                        coords.longitude >= area.LONG[0] && coords.longitude <= area.LONG[1]) ?
                            resolve() : reject()
                },
                this.onError.bind(this),
                this.geoOptions
            );
        })

    },

    onError(error) {
        console.error("Posiiton Service error", error);
    }

}