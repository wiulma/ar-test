navigator.xr.requestDevice = () => {

    const device = {
        supportsSession: function(p) {
            return;
        }
    };
    return Promise.resolve(device);
  }