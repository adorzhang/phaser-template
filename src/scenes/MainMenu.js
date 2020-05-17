import Phaser from 'phaser';
import { GameConsts } from './GameConsts';
import { SceneBase } from '../base/SceneBase';
import { Helper } from '../helper/Helper';

export class MainMenu extends SceneBase {
  constructor() {
    super({ key: 'MainMenu', active: false });
  }
  init() {
    super.init();
  }

  preload() {

  }

  create() {
    this.changeState(GameConsts.Scenes.Play);
  }
}