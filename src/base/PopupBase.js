import Phaser from "phaser";
import { GameConsts } from '../scenes/GameConsts';
import { Helper } from '../helper/Helper';

export class PopupBase extends Phaser.GameObjects.Container {
  constructor(scene, x, y, buttons, background, children) {
    super(scene, x, y, children);
    scene.add.existing(this);
    Helper.setBackgroundToGroup(scene, this, GameConsts.Arts.Mask);

    if (background != undefined) Helper.getImage(scene, scene.centerX, scene.centerY, background, 0.5);
    this.title = Helper.getText(scene, scene.centerX, scene.centerY, "", "#FFF", GameConsts.Game.BoldFont);
    this.content = Helper.getText(scene, scene.centerX, scene.centerY, "", "#FFF", GameConsts.Game.NormalFont);
  }

  setTitle(str) {
    this.title.setText(str);
  }

  setContent(str) {
    this.content.setText(str);
  }

  destroy() {
    if (this.title) this.title.destroy();
    if (this.content) this.content.destroy();
    super.destroy();
  }
}