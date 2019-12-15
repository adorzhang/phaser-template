class ScaleHelper {
    static scaleContainer(obj, width, height){
        let w = GameEngine.getInstance().config.width;
        let h = GameEngine.getInstance().config.height;
        let scale = Math.min(w / width, h / height);
        obj.setScale(scale);
        obj.x = .5 * (w - width * scale);
        obj.y = .5 * (h - height * scale);
    }

    static scaleContainerFit(obj, width, height){
        let w = GameEngine.getInstance().config.width + 200;
        let h = GameEngine.getInstance().config.height + 200;
        let scale = Math.max(w / width, h / height);
        obj.setScale(scale);
    }
}