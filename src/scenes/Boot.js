import Phaser from 'phaser';
import { GameConsts } from './GameConsts';
import { SceneBase } from '../base/SceneBase';

export class Boot extends SceneBase {
  constructor() {
    super({ key: 'Boot', active: true });
  }
  init() {

  }

  preload() {

  }

  create() {
    this.changeState(GameConsts.Scenes.Preloader);
    
  }
}