let _soundController;
class SoundController {
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
    let status;
    status = "true" === localStorage.getItem("soundsMuted");
    localStorage.setItem("soundsMuted", status);
    this.setVolume(status ? 0 : 1);
  }

  isDecodingSupported() {
    return GameEngine.getInstance().sound.usingWebAudio;
  }

  getSoundNames() {
    return this.soundNames;
  }

  startMusic() {
    if ("suspended" === GameEngine.getInstance().sound.context.state) {
      /*GameEngine.getInstance().input.on(()=>{
          if("suspended" === GameEngine.getInstance().sound.context.state) 
              GameEngine.getInstance().sound.context.resume();
      });*/
    }
  }

  pauseAudio() {
    this.hadBeenMutedBeforePauseTriggered = GameEngine.getInstance().sound.mute;
    GameEngine.getInstance().sound.mute = true;
  }

  resumeAudio(scene) {
    GameEngine.getInstance().sound.mute = this.hadBeenMutedBeforePauseTriggered;
    if ("suspended" === GameEngine.getInstance().sound.context.state || GameEngine.getInstance().device.iOS)
      this.restoreSuspendedContext(scene);
  }

  restoreSuspendedContext(scene) {
    scene.input.on('pointerdown', () => {
      if (("suspended" === GameEngine.getInstance().sound.context.state || GameEngine.getInstance().device.iOS))
        GameEngine.getInstance().sound.context.resume();
    })
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
    if ("suspended" != GameEngine.getInstance().sound.context.state)
      GameEngine.getInstance().sound.play(name);
  }
}