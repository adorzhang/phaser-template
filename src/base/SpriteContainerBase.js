import Phaser from 'phaser';

export class SpriteContainerBase extends Phaser.GameObjects.Container{
    constructor(scene, x, y, children){
        super(scene, x, y, children);
        scene.add.existing(this);
    }
}