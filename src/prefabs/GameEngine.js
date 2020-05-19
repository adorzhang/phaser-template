import Phaser from "phaser";
import { Boot } from '../scenes/Boot';
import { Preloader } from '../scenes/Preloader';
import { MainMenu } from '../scenes/MainMenu';
import { Play } from '../scenes/Play';
import { GameConsts } from '../scenes/GameConsts';

let _gameEngine;
export class GameEngine extends Phaser.Game {
  constructor() {
    let scenes = [];

    scenes.push(Boot);
    scenes.push(Preloader);
    scenes.push(MainMenu);
    scenes.push(Play);

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let orientation = 'PORTRAIT';
    let gameWidth = windowWidth * 1334 / windowHeight;
    let gameHeight = 1334;
    if (windowWidth > windowHeight) {
      windowWidth = windowHeight / 1.8;
      orientation = 'LANDSCAPE';
      gameHeight = windowWidth * 1334 / windowHeight;
      gameWidth = 1334;
    }

    let gameConfig = {
      type: Phaser.AUTO,
      url: GameConsts.Game.URL,
      orientation: orientation ,
      transparent: true,

      scale: {
        //parent: 'phaser-app',
        mode: Phaser.Scale.SHOW_ALL,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: gameWidth,
        height: gameHeight,
      },
      scene: scenes,
      //resolution			: window.devicePixelRatio,
      enableDebug: true
    }

    super(gameConfig);
    this.URL = 'src';
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