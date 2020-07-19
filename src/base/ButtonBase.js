import Phaser from "phaser";
import { GameConsts } from '../scenes/GameConsts';
import { Helper } from '../helper/Helper';

export class ButtonBase extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    //let frame = Helper.getFrame(0);
    //let name = Helper.getBtnBackgroundArtName(key);
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    //this.artName = name;
    this.setInteractive();
    this.on('pointerdown', this.clickHandler, this);
    this.on('pointerover', this.onInputOver, this);
    this.on('pointerout', this.onInputOut, this);
  }

  clickHandler() {
    //this.frameName = this.artName + Helper.getFrame(1);
    this.emit('click', this);
    setTimeout(this.onInputOut(), 100);
  }

  onInputOver() {
    //this.frameName = this.artName + Helper.getFrame(1);
  }

  onInputOut() {
    //this.frameName = this.artName + Helper.getFrame(0);
  }
}