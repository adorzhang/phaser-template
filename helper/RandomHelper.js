class RandomHelper {
    static getRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getRandomBool(){
        return Math.random() >= .5;
    }

    static shuffle(arr){
        let last, ran;
        let length = arr.length;
        while(length != 0){
            ran = Math.floor(Math.random() * length);
            last = arr[length -= 1];
            arr[length] = arr[ran];
            arr[ran] = last;
        }
        return arr;
    }
}