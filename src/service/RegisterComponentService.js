import CONST from '../const.js';
import notificationService from '../components/notification/NotificationService';
import voteService from './VoteService.js';

export default {

    register() {
        AFRAME.registerComponent('vote-marker', {
            init: function () {
              const el = this.el;
              this.el.addEventListener('click', function (evt) {
                voteService.vote(evt.target.dataset.id)
                  .then( () => {
                    notificationService.show(
                      {
                        text: 'Hai votato giorgio!'
                      },
                      "success");
                  })
              });
              
            }
        });
	  }
	
}