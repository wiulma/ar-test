import fightService from './FightService'

export default {

	data:[],

    start() {
		const evt = new Event("StartVote");
		document.dispatchEvent(evt);
		// this.simulateStopVote();
	},

	stop() {
		const evt = new Event("StopVote");
		document.dispatchEvent(evt);
		this.simulateStartVote();
	},

	vote(id) {
		console.log("vote", id)
		const evt = new Event("StopVote");
		document.dispatchEvent(evt);
		this.simulateStartVote();

		return Promise.resolve();
	},

	showPreview(id) {
		const detail = fightService.get(id);
		const evt = new CustomEvent("ShowVotePreview",{detail});
		document.dispatchEvent(evt);
	},

	simulateStartVote() {
		setTimeout(() => {
			this.start();
		}, 4000)
	},

	simulateStopVote() {
		setTimeout(() => {
			console.log("stop vote");
			this.stop();
		}, 10000)
	}


}