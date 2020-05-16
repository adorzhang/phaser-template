import Phaser from "phaser";
import { GameConsts } from '../scenes/GameConsts';
import { Helper } from '../helper/Helper';

export class SpriteScaleBase extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, frame, scaleSize, speed, isUp) {
    if (scaleSize == undefined) scaleSize = GameConsts.Game.ScaleSize;
    if (speed == undefined) speed = .3;
    if (isUp == undefined) isUp = false;
    super(scene, x, y, key, frame);
    this.waveHeight = 0;
    this.isUp = isUp;
    this.scaleSize = scaleSize;
    this.speed = speed;
  }

  update() {
    this.waveHeight += .3;
    if (this.isUp) {
      this.width += this.speed;
      this.height += this.speed;
    } else {
      this.width -= this.speed;
      this.height -= this.speed;
    }

    if (this.waveHeight >= this.scaleSize) {
      this.isUp = !this.isUp;
      this.waveHeight = 0;
    }
  }
}