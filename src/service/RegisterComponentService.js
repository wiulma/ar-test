import voteService from './VoteService.js';

export default {

    register() {
        AFRAME.registerComponent('vote-marker', {
            init: function () {
              const el = this.el;
              this.el.addEventListener('click', function (evt) {
                voteService.showPreview(evt.target.dataset.id)
              });
              
            }
        });
	  }
	
}