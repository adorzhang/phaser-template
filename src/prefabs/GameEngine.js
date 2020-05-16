import Phaser from "phaser";
import { Boot } from '../scenes/Boot';
import { Preloader } from '../scenes/Preloader';
import { MainMenu } from '../scenes/MainMenu';
import { Play } from '../scenes/Play';

let _gameEngine;
export class GameEngine extends Phaser.Game {
  constructor() {
    let scenes = [];

    scenes.push(Boot);
    scenes.push(Preloader);
    scenes.push(MainMenu);
    scenes.push(Play);

    let gameConfig = {
      width: window.innerWidth,
      height: window.innerHeight,
      renderer: Phaser.AUTO,
      transparent: true,
      scene: scenes,
      enableDebug: true
    }

    super(gameConfig);
    this.URL = '';
    //AdManager.getInstance().prepareAdv(false);
    //AdManager.getInstance().prepareRewardedAdv(false);
  }

  static getInstance() {
    if (_gameEngine == null) {
      _gameEngine = new GameEngine();
    }
    return _gameEngine;
  }

  pauseGame() {
    SoundController.getInstance().pauseAudio();
    this.paused = true;
  }

  unpauseGame(value) {
    if (value == undefined) value = false;
    if (!isPageVisible || adIsShowing && !value)
      console.log("resuming game is not allowed now because ads are displaying or page isn't  visible...");
    else {
      this.paused = false;
      SoundController.getInstance().resumeAudio();
      console.log("resuming game...");
    }
  }

}