import Phaser from "phaser";
import { GameConsts } from '../scenes/GameConsts';

export class ButtonBase extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key) {
    let frame = Helper.getFrame(0);
    let name = Helper.getBtnBackgroundArtName(key);
    super(scene, x, y, GameConsts.Arts.NormalStateButton, frame + name);
    this.artName = name;
    this.setInteractive();
    this.on('pointerdown', this.clickHandler, this);
    this.on('pointerover', this.onInputOver, this);
    this.on('pointerout', this.onInputOut, this);
  }

  clickHandler() {
    this.frameName = this.artName + Helper.getFrame(1);
    setTimeout(this.onInputOut(), 100);
  }

  onInputOver() {
    this.frameName = this.artName + Helper.getFrame(1);
  }

  onInputOut() {
    this.frameName = this.artName + Helper.getFrame(0);
  }
}