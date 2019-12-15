class TweenHelper{
    static turnAnimationStart(scene,target){
        scene.tweens.add({
            targets : target,
            scaleX : PirateCards.Consts.ScaleZoom,
            scaleY : PirateCards.Consts.ScaleZoom,
            duration : PirateCards.Consts.ScaleSpeed
        });
    }
    static turnAnimationEnd(scene,target){
        scene.tweens.add({
            targets : target,
            scaleX : PirateCards.Consts.ScaleZoom,
            scaleY : PirateCards.Consts.ScaleZoom,
            duration : PirateCards.Consts.FlipSpeed/2
        });
    }
    static scaleIn(scene, target, autoStart){
        if(autoStart == undefined) autoStart = true;
        let tween = scene.tweens.add({
            targets : target,
            scaleX : 0,
            scaleY : 0,
            paused : autoStart,
            duration : .25 * PirateCards.Consts.ShowTime
        });
        return tween;
    }
    static scaleOut(scene,target, value){
        if(value == undefined) value = 1;
        target.setScale(0,0);
        target.visible = true;
        target.inputEnabled = true;
        let tween = scene.tweens.add({
            targets : target,
            scaleX : value,
            scaleY : value,
            duration : .25 * PirateCards.Consts.ShowTime
        });
        return tween;
    }
}