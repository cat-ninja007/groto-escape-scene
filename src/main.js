import Phaser from 'phaser'

// import HelloWorldScene from './HelloWorldScene'
import GrotoEscapeScene from './scenes/GrotoEscapeScene'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [GrotoEscapeScene],
}

export default new Phaser.Game(config)
