import {DogDoor} from './DogDoor'

export class Remote{
    private openFlag: DogDoor;

    public constructor(door: DogDoor){
        this.openFlag = door;
    }

    public pressButton():void{
        console.log('リモコンのボタンを押したよ');

        if(this.openFlag.isOpen()){
            this.openFlag.close();
        }else{
            this.openFlag.open();
            //自動でドアがします
            new Promise((resolve) => {
                setTimeout(() => {
                    this.openFlag.close();
                    //完了宣言 - resolve
                    resolve('');
                }, 5000)
            })
        }
    }
}