class TextHelper {
    static getText(scene, x, y, string, color, font, align){
        if(align === undefined) align = 'center';
        let text;
        text = scene.add.text(x, y, string,{
            font: font, //+ "px Avo-Bold",
            wordWrap: true,
            wordWrapWidth: 350,
            align: align
        }).setOrigin(0.5);
        //text.setStroke('#3F1F1F', 5);
        text.setColor(color);
        return text;
    }
}