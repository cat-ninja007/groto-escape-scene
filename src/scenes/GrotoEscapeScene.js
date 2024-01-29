import Phaser from "phaser";
export default class GrotoEscapeScene extends Phaser.Scene {
    constructor(){
        super('groto-escape-scene')
    }

    preload(){
        this.load.image('background', 'images/background.jpeg')
    }

    create(){
        this.add.image(100, 100, 'background')
    }

    update(){}
}