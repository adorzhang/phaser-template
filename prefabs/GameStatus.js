let _gameStatus;
class GameStatus{
    constructor(){
        this.data = this.load();
        this.prevScene = "";
        this.currScene = "";
        Object.defineProperty(this, "user_id", {
            get: function() {
                return this.data.user_id;
            },
            set: function(value) {
                this.data.user_id = value;
            },
            enumerable: true,
            configurable: true
        }),Object.defineProperty(this, "score", {
            get: function() {
                return this.data.score;
            },
            set: function(value) {
                this.data.score = value;
            },
            enumerable: true,
            configurable: true
        }),Object.defineProperty(this, "session_id", {
            get: function() {
                return this.data.session_id;
            },
            set: function(value) {
                this.data.session_id = value;
            },
            enumerable: true,
            configurable: true
        }), Object.defineProperty(this, "is_first_login", {
            get: function() {
                return this.data.is_first_login;
            },
            set: function(value) {
                this.data.is_first_login = value;
            },
            enumerable: true,
            configurable: true
        }), Object.defineProperty(this, "full_name", {
            get: function() {
                return this.data.full_name;
            },
            set: function(value) {
                this.data.full_name = value;
            },
            enumerable: true,
            configurable: true
        }), Object.defineProperty(this, "email", {
            get: function() {
                return this.data.email;
            },
            set: function(value) {
                this.data.email = value;
            },
            enumerable: true,
            configurable: true
        }), Object.defineProperty(this, "tel", {
            get: function() {
                return this.data.tel;
            },
            set: function(value) {
                this.data.tel = value;
            },
            enumerable: true,
            configurable: true
        }), Object.defineProperty(this, "total_shake", {
            get: function() {
                return this.data.total_shake;
            },
            set: function(value) {
                this.data.total_shake = value;
            },
            enumerable: true,
            configurable: true
        }), Object.defineProperty(this, "image_link", {
            get: function() {
                return this.data.image_link;
            },
            set: function(value) {
                this.data.image_link = value;
            },
            enumerable: true,
            configurable: true
        }), Object.defineProperty(this, "shake_remain", {
            get: function() {
                return this.data.shake_remain;
            },
            set: function(value) {
                this.data.shake_remain = value;
            },
            enumerable: true,
            configurable: true
        }), Object.defineProperty(this, "previousScene", {
            get: function() {
                return this.prevScene;
            },
            set: function(value) {
                this.prevScene = value;
            },
            enumerable: true,
            configurable: true
        }),Object.defineProperty(this, "currentScene", {
            get: function() {
                return this.currScene;
            },
            set: function(value) {
                this.currScene = value;
            },
            enumerable: true,
            configurable: true
        }),Object.defineProperty(this, "transaction_code", {
            get: function() {
                return this.data.transaction_code;
            },
            set: function(value) {
                this.data.transaction_code = value;
            },
            enumerable: true,
            configurable: true
        })

    }
    createData(){
        let data = {
            user_id : "",
            score : 0,
            is_first_login : 0,
            session_id : ""
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
        localStorage.setItem(KFC.Consts.StorageName, JSON.stringify(this.data));
    }
    load(){
         let data = JSON.parse(localStorage.getItem(KFC.Consts.StorageName));
         if(!data) data = this.createData();
         return data;
    }
}