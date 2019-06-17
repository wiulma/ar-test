import notificationService from '../components/notification/NotificationService'
import fightService from './FightService'

export default {

	data:[],

    start() {
		const evt = new Event("StartVote");
		document.dispatchEvent(evt);
	},

	stop(withVote) {
		//const evt = new Event("StopVote");
		//document.dispatchEvent(evt);
	},

	vote(id) {
		const evt = new CustomEvent("ShowVotePreview",{detail: {id}});
		document.dispatchEvent(evt);
	},

	/*

	.then( () => {
		voteService.showPreview();
		notificationService.show(
		  {
			text: 'Hai votato giorgio!'
		  },
		  "success");
	  })
*/
	showPreview(id) {
		const detail = fightService.get(id);
		const evt = new CustomEvent("ShowVotePreview",{detail});
		document.dispatchEvent(evt);

		/*
		notificationService.show(
			{
			  text: `Hai votato ${f.name}!`
			},
			"success");
		this.stopVote(true);
		*/
	}
	

}