import Phaser from 'phaser';
import { GameConsts } from '../scenes/GameConsts';
let _gameStatus;
export class GameStatus {
  constructor() {
    this.data = this.load();

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

  static getInstance(){
    if(_gameStatus == null){
        _gameStatus = new GameStatus();
    }
    return _gameStatus;
  }

  save(){
    localStorage.setItem(GameConsts.Game.StorageName, JSON.stringify(this.data));
  }

  load(){
      let data = JSON.parse(localStorage.getItem(GameConsts.Game.StorageName));
      if(!data) data = this.createData();
      return data;
  }
}