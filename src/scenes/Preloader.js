import Phaser from 'phaser';
import { GameConsts } from './GameConsts';
import { SceneBase } from '../base/SceneBase';
export class Preloader extends SceneBase {
  constructor() {
    super({ key: 'Preloader', active: false });
  }
  init() {

  }

  preload() {

  }

  create() {
    this.changeState(GameConsts.Scenes.MainMenu);
  }
}