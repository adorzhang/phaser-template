class SceneBase extends Phaser.Scene{
    constructor (config){
		super(config);
        this.centerX = GameEngine.getInstance().config.width / 2;
        this.centerY = GameEngine.getInstance().config.height / 2;
        this.gameWidth = GameEngine.getInstance().config.width;
        this.gameHeight = GameEngine.getInstance().config.height;
		this.config = config;
	}

	init(){

	}
	
	preload(){

	}

	create(){
		this.scale.on('resize',this.scaleGameContainer);
		this.background = new Phaser.GameObjects.Group(this);
		//BackgroundHelper.setBackgroundToGroup(this, this.background, KFC.ArtConsts.BackgroundLanding);
        this.gameContainer = new Phaser.GameObjects.Container(this);
		//ScaleHelper.scaleContainer(this.gameContainer, this.gameWidth, this.gameHeight);
		
		if (this.sys.sound.context.state === 'suspended') {
			this.sys.sound.context.resume();
		}

		this.input.on('pointerdown', function (pointer) {
			if (this.systems.sound.context.state === 'suspended') {
				this.systems.sound.context.resume();
			}
			
		});
		
	}

	render(){

	}

	update(){

	}

	scaleGameContainer(){
        //ScaleHelper.scaleContainer(this.gameContainer, this.gameWidth, this.gameHeight); 
        //BackgroundHelper.setBackgroundToGroup(this, this.background, KFC.ArtConsts.BackgroundMenu);
	}
	
	addHeader(){

	}

	addFooter(){

	}

	addLeftMenu(){

	}

	addPopup(){

	}

	fadeIn(target){
		target.alpha = 0; 
		this.tweens.add({
			targets : target,
			alpha : 1,
			duration: 300
		});
	}
	fadeOut(target,onCompleteHandler){
		target.alpha = 1;
		this.tweens.add({
			targets : target,
			alpha : 0,
			duration: 200,
			onComplete: onCompleteHandler
		});
	}
	fadeInState(){
		this.fadeIn(this.gameContainer);
	}
	fadeOutState(name){
		this.fadeOut(this.gameContainer, this.changeState(name));
	}
	changeState(name){
		GameStatus.getInstance().previousScene = this.config.key;
		GameStatus.getInstance().currentScene = name;
		
		this.time.addEvent({
			delay	: 500,
			callback: () => { this.scene.start(name); },
			callbackScope: this
		});
		
	}
	moveFromTop(target, delay){
		//SoundController.getInstance().playSound(KFC.SoundConsts.Move);
		let _this = this;
		if(delay == undefined) delay = 0;
		let posY = target.y;
		target.y = -1000;
		target.alpha = 0;

		this.tweens.add({
			targets : target,
			y : posY,
			alpha : 1,
			duration : KFC.Consts.ShowTime,
			ease : KFC.Consts.EasingFrom,
			delay : delay
		});
	}

	moveToTop(target, delay){
		//SoundController.getInstance().playSound(KFC.SoundConsts.Move);
		let _this = this;
		if(delay == undefined) delay = 0;
		this.tweens.add({
			targets: target,
			y : -1000,
			alpha : 0,
			duration : KFC.Consts.ShowTime,
			ease : KFC.Consts.EasingTo,
			delay : delay
		});
	}
	moveFromBottom(target, delay){
		//SoundController.getInstance().playSound(KFC.SoundConsts.Move);
		let _this = this;
		if(delay == undefined) delay = 0;
		let posY = target.y;
		target.y = 1000;
		target.alpha = 0;

		this.tweens.add({
			targets : target,
			y : posY,
			alpha : 1,
			duration : KFC.Consts.ShowTime,
			ease : KFC.Consts.EasingFrom,
			delay : delay
		});
	}
	moveToBottom(target, delay){
		//SoundController.getInstance().playSound(KFC.SoundConsts.Move);
		let _this = this;
		if(delay == undefined) delay = 0;
		this.tweens.add({
			targets: target,
			y : 1000,
			alpha : 0,
			duration : KFC.Consts.ShowTime,
			ease : KFC.Consts.EasingTo,
			delay : delay
		});
	}
	moveFromLeft(target,delay,autoStart){
		//SoundController.getInstance().playSound(KFC.SoundConsts.Move);
		let _this = this;
		if(delay == undefined) delay = 0;
		if(autoStart == undefined) autoStart = true;
		let posX = target.x;
		target.x = -1000;
		target.alpha = 0;
		let tween = this.tweens.add({
			targets: target,
			x : posX,
			alpha : 1,
			paused: autoStart,
			duration : KFC.Consts.ShowTime,
			ease : KFC.Consts.EasingFrom,
			delay : delay
		});
		return tween;
	}
	moveToLeft(target,delay,autoStart){
		//SoundController.getInstance().playSound(KFC.SoundConsts.Move);
		let _this = this;
		if(delay == undefined) delay = 0;
		if(autoStart == undefined) autoStart = true;
		let posX = target.x;
		let tween = this.tweens.add({
			targets: target,
			x : -1000,
			alpha : 0,
			duration : KFC.Consts.ShowTime,
			ease : KFC.Consts.EasingFrom,
			delay : delay,
			paused: autoStart,
			onComplete : function(){
				target.x = posX;
				target.alpha = 1;
				target.visible = false;
			}
		});

		return tween;
	}
	moveFromRight(target, delay){
		//SoundController.getInstance().playSound(KFC.SoundConsts.Move);
		let _this = this;
		if(delay == undefined) delay = 0;
		let posX = target.x;
		target.x = 1000;
		target.alpha = 0;
		this.tweens.add({
			targets: target,
			x : posX,
			alpha : 1,
			duration : KFC.Consts.ShowTime,
			ease : KFC.Consts.EasingFrom,
			delay : delay
		});
	}
	moveToRight(target, delay){
		//SoundController.getInstance().playSound(KFC.SoundConsts.Move);
		let _this = this;
		if(delay == undefined) delay = 0;

		this.tweens.add({
			targets: target,
			x : 1000,
			alpha : 0,
			duration : KFC.Consts.ShowTime,
			ease : KFC.Consts.EasingTo,
			delay : delay
		});
	}

}