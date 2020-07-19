import Phaser from "phaser";
import { GameConsts } from '../scenes/GameConsts';
import { Helper } from '../helper/Helper';

export class SpriteBase extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
  }
}