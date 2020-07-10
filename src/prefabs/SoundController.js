
import Phaser from 'phaser';
import { GameEngine } from './GameEngine';
import { GameConsts } from '../scenes/GameConsts';
import { GameStatus } from './GameStatus';

let _soundController;
export class SoundController {
  constructor() {

    this.currentSoundVolume = 1000;
    this.hadBeenMutedBeforePauseTriggered = false;
    
    this.init();
  }

  static getInstance() {
    if (_soundController == null) {
      _soundController = new SoundController();
    }
    return _soundController;
  }

  init() {
    this.setVolume(GameStatus.getInstance().isSoundEnabled ? 1 : 0);
  }

  isDecodingSupported() {
    return GameEngine.getInstance().sound.usingWebAudio;
  }

  getSoundNames() {
    return this.soundNames;
  }

  startMusic() {
    if ("suspended" != GameEngine.getInstance().sound.context.state){
      let bgm = GameEngine.getInstance().sound.get(GameConsts.Sounds.Bgm)
      bgm ? bgm.play() : GameEngine.getInstance().sound.add(GameConsts.Sounds.Bgm).play();
    }
  }

  pauseAudio() {
    this.hadBeenMutedBeforePauseTriggered = GameEngine.getInstance().sound.mute;
    GameEngine.getInstance().sound.mute = true;
  }

  resumeAudio() {
    GameEngine.getInstance().sound.mute = this.hadBeenMutedBeforePauseTriggered;
    this.restoreSuspendedContext();
      
  }

  restoreSuspendedContext() {
    GameEngine.getInstance().sound.context.resume();
  }

  getVolume() {
    return this.currentSoundVolume;
  }

  setVolume(value) {
    this.currentSoundVolume = Phaser.Math.Clamp(value, 0, 1);
  }

  isMuted() {
    return 0 == this.currentSoundVolume;
  }

  playSound(name, volume, loop) {
    if (volume == undefined) volume = 1;
    if (loop == undefined) loop = false;
    if ("suspended" != GameEngine.getInstance().sound.context.state && GameStatus.getInstance().isSoundEnabled){
      GameEngine.getInstance().sound.play(name);
      GameEngine.getInstance().sound.volume = volume * this.currentSoundVolume;
      GameEngine.getInstance().sound.loop = loop;
    }
      
  }
  stopMusic(){
    let bgm = GameEngine.getInstance().sound.get(GameConsts.Sounds.Bgm)
    if(bgm ) bgm.stop();
  }
}