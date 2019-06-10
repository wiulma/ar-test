export default {

    start() {
		setTimeout(() => {
			const evt = new Event("ChangeEnvironment");
			window.dispatchEvent(evt);
		}, 3000);
	},

	vote(id) {
		console.log("vote", id);
		return Promise.resolve(true)
	}

}