console.log("init");

// Component to change to random color on click.
AFRAME.registerComponent('vote-marker', {
    init: function () {
      this.el.addEventListener('click', function (evt) {
        console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
  });