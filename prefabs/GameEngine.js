let _gameEngine;
class GameEngine extends Phaser.Game{
    constructor(){
        let scenes	= [];
		
        scenes.push(Boot);
        scenes.push(Preloader);
        scenes.push(Landing);
        scenes.push(Login);
        scenes.push(Registration);
        scenes.push(AuthOTP);
        scenes.push(CaptureGuide);
        scenes.push(StoreList);
        scenes.push(PlayNow);
        scenes.push(CaptureInvoice);
        scenes.push(ScoreManagement);
        scenes.push(Game);

        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        if (windowWidth > windowHeight) {
            windowWidth = windowHeight / 1.8;
        }
        let gameWidth = windowWidth * 1334 / windowHeight;
        
        let gameConfig = {
            type                : Phaser.AUTO,
            url					: KFC.LinksConsts.KFCGame,
            orientation			: 'PORTRAIT',
            transparent         : true,
            
            scale: {
                parent: 'phaser-app',  
                mode: Phaser.Scale.ENVELOP ,
                autoCenter: Phaser.Scale.CENTER_BOTH ,
                width: gameWidth,
                height: 1334
            },
            /*dom: {
                createContainer : true
            },*/
            scene               : scenes,
            enableDebug         : false
            /*type				: Phaser.AUTO,
		width				: gameWidth,
		height				: 1334,
		//url					: 'https://labs.udinsoft.com/pepsi/',
		transparent    		: true,
		resolution			: window.devicePixelRatio,
		scale				: 'SHOW_ALL',
		orientation			: 'PORTRAIT',
		scene: scenes*/
        }
        
        super(gameConfig);

        this.URL		= '';
        
    }

    static getInstance(){
        if(_gameEngine == null){
            _gameEngine = new GameEngine();
        }
        return _gameEngine;
    }

    pauseGame(){
        SoundController.getInstance().pauseAudio();
        this.paused = true;
    }

    unpauseGame(value){
        if(value == undefined) value = false;
        if(!isPageVisible || adIsShowing && !value) 
            console.log("resuming game is not allowed now because ads are displaying or page isn't  visible...");
        else {
            this.paused = false;
            SoundController.getInstance().resumeAudio();
            console.log("resuming game...");
        }
    }
}