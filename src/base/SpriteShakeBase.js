import Phaser from "phaser";
import { GameConsts } from "../scenes/GameConsts";
import { SpriteAnimationBase } from "./SpriteAnimationBase";

class SpriteShakeBase extends SpriteAnimationBase {
  constructor(scene, x, y, key, frame, isUp, delay) {
    if (isUp == undefined) isUp = false;
    if (delay == undefined) delay = Helper.getRandomIntInclusive(0, 200);
    super(scene, x, y, key, frame);
    this.canPlayAnimation = false;
    this.waveHeight = GameConsts.Game.WaveSize / 2;
    this.isUp = isUp;
    setTimeout(this.startAnimation, delay);
    this.isStarted = false;
  }

  playAnimation() {
    this.isStarted = true;
  }

  update() {
    if (this.isStarted && this.canPlayAnimation) {
      this.waveHeight += 0.3;
      if (this.isUp)
        this.y += 0.3;
      else
        this.y -= 0.3;
      if (this.waveHeight >= ameConsts.Game.WaveSize) {
        this.isUp = !this.isUp;
        this.waveHeight = 0;
      }
    }
  }
}