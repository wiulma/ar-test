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
		console.log("vote", id)
		const evt = new Event("StopVote");
		document.dispatchEvent(evt);

		setTimeout(() => {
			this.start();
		}, 4000)
		return Promise.resolve();
	},

	showPreview(id) {
		const detail = fightService.get(id);
		const evt = new CustomEvent("ShowVotePreview",{detail});
		document.dispatchEvent(evt);
	}


}