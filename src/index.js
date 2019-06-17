import 'aframe'
import 'aframe-environment-component'

import 'bootstrap/js/dist/alert'
import 'bootstrap/js/dist/modal'

import './index.scss'

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
    setTimeout(() => {
        console.log("stop vote");
        voteService.stop();
    }, 10000)
}, 3000)



// Component to change to random color on click.
