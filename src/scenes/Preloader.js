import Phaser from 'phaser';
import { GameConsts } from './GameConsts';
import { SceneBase } from '../base/SceneBase';
import { Helper } from '../helper/Helper';

export class Preloader extends SceneBase {
  constructor() {
    super({ key: 'Preloader', active: false });
  }
  init() {
    super.init();
    this.URL = this.sys.game.URL;
  }

  preload() {
    this.createLoadingBar();
    this.load.setPath(this.URL + '/assets/');
  }

  create() {
    this.changeState(GameConsts.Scenes.MainMenu);
  }

  createLoadingBar(){
    // Progress text  
    let style = {font: 'Bold 84px Arial', fill: GameConsts.Game.GrayColor, align: 'center'}  ;
    this.txt_progress = Helper.getText(this, this.centerX, this.centerY - 5, "Loading...", style, false).setOrigin(0.5,1);
		
		// Progress bar
		let x	= 0;
		let y	= this.centerY ;
		
		this.progress	= this.add.graphics({ x: x, y: y });
		this.border		= this.add.graphics({ x: x, y: y });
		
		// Progress callback
		this.load.on('progress', this.onProgress, this);
  }

  onProgress (val){
		// Width of progress bar
		let w	= this.gameWidth;
		let h	= 5;
		
		this.progress.clear();
		this.progress.fillStyle('0x333333', 1);
		this.progress.fillRect(0, 0, w * val, h);
		
		this.border.clear();
		this.border.lineStyle(0, '0x4D6592', 1);
		this.border.strokeRect(0, 0, w * val, h);
		
		// Percentage in progress text
		this.txt_progress.setText(Math.round(val * 100) + '%');
	}
}