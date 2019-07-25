import registerComponentService from './service/RegisterComponentService.js'
import voteService from './service/VoteService.js'
import sceneService from './service/SceneService.js'

import './components/index.js'

console.log("init");
registerComponentService.register();
sceneService.start();

setTimeout(() => {
    console.log("start vote");
    voteService.start();
}, 3000)

window.testButtonAction1 = function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    console.log("click testButtonAction1");
}

window.testButtonAction2 = function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    console.log("click testButtonAction2");
}

// Component to change to random color on click.
