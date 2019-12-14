class BackgroundHelper {
    static setBackground(scene,key){
        let bg = scene.add.image(scene.centerX, scene.centerY, key).setOrigin(.5).setInteractive();
        ScaleHelper.scaleContainerFit(bg, bg.width, bg.height);
    }

    static setBackgroundToGroup(scene, group, key){
        let bg = scene.add.image(scene.centerX, scene.centerY, key).setOrigin(.5).setInteractive();
        ScaleHelper.scaleContainerFit(bg, bg.width, bg.height); 
        bg.name = KFC.Consts.BackgroundImageName;
        group.add(bg);
    }

    static destroyPreviousBackground(group){
        for (let i = 0; i < group.children.length; i++){
            if (group.children[i] instanceof Phaser.Image) {
                let child = group.children[i];
                if (child.name == KFC.Consts.BackgroundImageName) {
                    child.destroy();
                    break
                }
            }
        }
    }
}