import 'aframe'
import 'aframe-environment-component'

import 'bootstrap/js/dist/alert'

import './index.scss'

import RegisterComponentService from './service/RegisterComponentService.js'
import VoteService from './service/VoteService.js'
import SceneService from './service/SceneService.js'

import './components/index.js'

console.log("init");
RegisterComponentService.register();
VoteService.start();
SceneService.start();

// Component to change to random color on click.
