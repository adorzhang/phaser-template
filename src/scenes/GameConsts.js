import Phaser from 'phaser';

export class GameConsts{

  static Arts = {
    NormalStateButton : "",
    OverStateButton: ""
  };
  static Sounds = {

  };

  static Game = {
    Width: 640,
    Height: 960,
    ShowTime: 300,
    StorageName: "udinsoft-game-demo",
    ScaleZoom: 1.2,
    ScaleSpeed: 50,
    swipeMaxTime: 1000,
    swipeMinDistance: 20,
    swipeMinNormal: 0.85,
    EasingTo: Phaser.Math.Easing.Quadratic.In,
    EasingFrom: Phaser.Math.Easing.Quadratic.Out,
    isDev: true,
    isAndroid: false,
    isWeb: true,
  };

  static Scenes = {
    Boot: "Boot",
    Preloader: "Preloader",
    MainMenu: "MainMenu",
    Play: "Play",
  }
}
