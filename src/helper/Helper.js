import Phaser from 'phaser';
import { GameEngine } from '../prefabs/GameEngine';
import { GameConsts } from '../scenes/GameConsts';

export class Helper {
  //Image
  static getImage(scene, x, y, texture, frame) {
    let img;
    img = scene.add.image(x, y, texture, frame);
    return img;
  }
  //Text
  static getText(scene, x, y, string, style, isWordWrap) {
    if(isWordWrap === undefined) isWordWrap = false;
    let text;
    if(!isWordWrap){
      text = scene.add.text(x, y, string,style);
    }else {
        text = scene.make.text(x, y, string, style);
    }
    return text;
  }
  static getBitmapText(scene, x, y, string, style, size) {
    let text = scene.add.bitmapText(x, y, style, string, size);
    return text;
  }
  //scale
  static scaleContainer(obj, width, height) {
    let w = GameEngine.getInstance().config.width;
    let h = GameEngine.getInstance().config.height;
    let scale = Math.min(w / width, h / height);
    obj.setScale(scale);
    obj.x = .5 * (w - width * scale);
    obj.y = .5 * (h - height * scale);
  }

  static scaleContainerFit(obj, width, height) {
    let w = GameEngine.getInstance().config.width;
    let h = GameEngine.getInstance().config.height;
    let scale = Math.max(w / width, h / height);
    obj.setScale(scale);
  }
  //tween
  static turnAnimationStart(scene, target) {
    scene.tweens.add({
      targets: target,
      scaleX: GameConsts.Game.ScaleZoom,
      scaleY: GameConsts.Game.ScaleZoom,
      duration: GameConsts.Game.ScaleSpeed
    });
  }
  static turnAnimationEnd(scene, target) {
    scene.tweens.add({
      targets: target,
      scaleX: GameConsts.Game.ScaleZoom,
      scaleY: GameConsts.Game.ScaleZoom,
      duration: GameConsts.Game.FlipSpeed / 2
    });
  }
  static scaleIn(scene, target, autoStart) {
    if (autoStart == undefined) autoStart = true;
    let tween = scene.tweens.add({
      targets: target,
      scaleX: 0,
      scaleY: 0,
      paused: autoStart,
      duration: .25 * GameConsts.Game.ShowTime
    });
    return tween;
  }
  static scaleOut(scene, target, value) {
    if (value == undefined) value = 1;
    target.setScale(0, 0);
    target.visible = true;
    target.inputEnabled = true;
    let tween = scene.tweens.add({
      targets: target,
      scaleX: value,
      scaleY: value,
      duration: .25 * GameConsts.Game.ShowTime
    });
    return tween;
  }

  //Background
  static setBackground(scene, texture, frame) {
    let bg = scene.add.image(scene.centerX, scene.centerY, texture, frame).setOrigin(.5).setInteractive();
    Helper.scaleContainerFit(bg, bg.width, bg.height);
  }

  static setBackgroundToGroup(scene, group, texture, frame) {
    let bg = scene.add.image(scene.centerX, scene.centerY, texture, frame).setOrigin(.5).setInteractive();
    Helper.scaleContainerFit(bg, bg.width, bg.height);
    bg.name = GameConsts.Arts.BackgroundImageName;
    group.add(bg);
  }

  static destroyPreviousBackground(group) {
    for (let i = 0; i < group.children.length; i++) {
      if (group.children[i] instanceof Phaser.Image) {
        let child = group.children[i];
        if (child.name == GameConsts.Arts.BackgroundImageName) {
          child.destroy();
          break
        }
      }
    }
  }
  //Array
  static findNearestValue(value, items) {
    let first = Math.abs(items[0] - value);
    let index = 0;
    for (let i = 1; i < items.length; i++) {
      let second = Math.abs(items[i] - value);
      if (second < first) {
        index = i;
        first = second;
      }
    }
    return items[index];
  }
  //Frame
  static getFrame(value) {
    return value < 10 ? "000" + value : value >= 10 && value < 100 ? "00" + value : value >= 100 && value < 1000 ? "0" + value : value.toString()
  }
  //Number
  static getRandomIntInclusive(start, end) {
    let _start = Math.ceil(start);
    let _end = Math.floor(end);

    return Math.floor(Math.random() * (_end - _start + 1)) + _start;
  }

  static getRandomBool() {
    return Math.random() > .5;
  }
  //String
  static thousandsSeparator(string) {
    return string.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //Shape
  static getShape(scene, x, y, key, prefix, frame) {
    if (frame == undefined) frame = 0;
    let shape = new Phaser.Sprite(scene, x, y, key, prefix + Helper.getFrame(frame)).setOrigin(0.5);
    return shape;
  }

  static getShakeShape(scene, x, y, key, prefix, frame, isUp, delay) {
    if (frame == undefined) frame = 0;
    if (isUp == undefined) isUp = false;
    if (delay == undefined) delay = Helper.getRandomIntInclusive(0, 200);
    let shape = new SpriteShakeBase(scene, x, y, key, prefix + Helper.getFrame(frame), isUp, delay);
    return shape;
  }
}