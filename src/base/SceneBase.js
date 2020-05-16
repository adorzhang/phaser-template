import Phaser from "phaser";
import { GameConsts } from '../scenes/GameConsts';
import { Helper } from '../helper/Helper';

export class SceneBase extends Phaser.Scene {
  constructor(config) {
    super(config);

    this.centerX = GameConsts.Game.Width / 2;
    this.centerY = GameConsts.Game.Height / 2;
    this.gameWidth = GameConsts.Game.Width;
    this.gameHeight = GameConsts.Game.Height;
  }

  init() {

  }

  preload() {

  }

  create() {

    this.scale.on('resize', this.scaleGameContainer);
    this.background = new Phaser.GameObjects.Group(this);
    Helper.setBackgroundToGroup(this, this.background, GameConsts.Arts.BackgroundMenu);
    this.gameContainer = new Phaser.GameObjects.Container(this, 0, 0);
    Helper.scaleContainer(this.gameContainer, this.gameWidth, this.gameHeight);
  }

  scaleGameContainer() {
    Helper.scaleContainer(this.gameContainer, this.gameWidth, this.gameHeight),
      Helper.setBackgroundToGroup(this, this.background, GameConsts.Arts.BackgroundMenu)
  }

  updateAllChildren() {
    for (let i = 0; i < GameConsts.children.length; i++) {
      let child = PirateCards.children[i];
      if (child) child.update();
    }
  }

  fadeIn(target) {
    target.alpha = 0;
    this.tweens.add({
      targets: target,
      alpha: 1,
      duration: 300
    });
  }

  fadeOut(target, onCompleteHandler) {
    target.alpha = 1;
    this.tweens.add({
      targets: target,
      alpha: 0,
      duration: 200,
      onComplete: onCompleteHandler
    });
  }

  fadeInState() {
    this.fadeIn(this.gameContainer);
  }

  fadeOutState(name) {
    this.fadeOut(this.gameContainer, this.changeState(name));
  }

  changeState(name) {
    this.time.addEvent({
      delay: 500,
      callback: () => { this.scene.start(name); },
      callbackScope: this
    });
  }

  moveFromTop(target, delay) {
    let _this = this;
    if (delay == undefined) delay = 0;
    let posY = target.y;
    target.y = -1000;
    target.alpha = 0;

    this.tweens.add({
      targets: target,
      y: posY,
      alpha: 1,
      duration: GameConsts.Game.ShowTime,
      ease: GameConsts.Game.EasingFrom,
      delay: delay
    });
  }

  moveFromBottom(target, delay) {
    let _this = this;
    if (delay == undefined) delay = 0;
    let posY = target.y;
    target.y = 1000;
    target.alpha = 0;

    this.tweens.add({
      targets: target,
      y: posY,
      alpha: 1,
      duration: GameConsts.Game.ShowTime,
      ease: GameConsts.Game.EasingFrom,
      delay: delay
    });
  }

  moveToBottom(target, delay) {
    let _this = this;
    if (delay == undefined) delay = 0;
    this.tweens.add({
      targets: target,
      y: 1000,
      alpha: 0,
      duration: GameConsts.Game.ShowTime,
      ease: GameConsts.Game.EasingTo,
      delay: delay
    });
  }

  moveFromLeft(target, delay, autoStart) {
    let _this = this;
    if (delay == undefined) delay = 0;
    if (autoStart == undefined) autoStart = true;
    let posX = target.x;
    target.x = -1000;
    target.alpha = 0;
    let tween = this.tweens.add({
      targets: target,
      x: posX,
      alpha: 1,
      paused: autoStart,
      duration: GameConsts.Game.ShowTime,
      ease: GameConsts.Game.EasingFrom,
      delay: delay
    });
    return tween;
  }

  moveToLeft(target, delay, autoStart) {
    let _this = this;
    if (delay == undefined) delay = 0;
    if (autoStart == undefined) autoStart = true;
    let posX = target.x;
    let tween = this.tweens.add({
      targets: target,
      x: -1000,
      alpha: 0,
      duration: GameConsts.Game.ShowTime,
      ease: GameConsts.Game.EasingFrom,
      delay: delay,
      paused: autoStart,
      onComplete: function () {
        target.x = posX;
        target.alpha = 1;
        target.visible = false;
      }
    });

    return tween;
  }

  moveFromRight(target, delay) {
    let _this = this;
    if (delay == undefined) delay = 0;
    let posX = target.x;
    target.x = 1000;
    target.alpha = 0;
    this.tweens.add({
      targets: target,
      x: posX,
      alpha: 1,
      duration: GameConsts.Game.ShowTime,
      ease: GameConsts.Game.EasingFrom,
      delay: delay
    });
  }

  moveToRight(target, delay) {
    let _this = this;
    if (delay == undefined) delay = 0;

    this.tweens.add({
      targets: target,
      x: 1000,
      alpha: 0,
      duration: GameConsts.Game.ShowTime,
      ease: GameConsts.Game.EasingTo,
      delay: delay
    });
  }
}