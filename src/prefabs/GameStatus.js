export class GameStatus {
  constructor(scene) {
    this.scene = scene;
    this.data = this.load();
    scene.LocalStorageData = this.createData();

    Object.defineProperty(this, "score", {
      get: function () {
        return this.data.score;
      },
      set: function (value) {
        this.data.score = value;
        this.save();
      },
      enumerable: true,
      configurable: true
    })
  }
  createData(){
    let data = {
      score: 0
    }
    return data;
  }

  save(){
    localStorage.setItem(this.scene.CONFIG.StorageName, JSON.stringify(this.data));
  }

  load(){
      let data = JSON.parse(localStorage.getItem(this.scene.CONFIG.StorageName));
      if(!data) data = this.createData();
      return data;
  }
}