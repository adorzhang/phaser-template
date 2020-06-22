import Phaser from "phaser";
import { GameConsts } from '../scenes/GameConsts';
import { Helper } from '../helper/Helper';

export class SpriteAnimationBase extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y, key, frame);
    this.canPlayAnimation = false;
    scene.add.existing(this);
  }

  playAnimation() {
    this.canPlayAnimation = true;
  }

  stopAnimation() {
    this.canPlayAnimation = false;
  }
}