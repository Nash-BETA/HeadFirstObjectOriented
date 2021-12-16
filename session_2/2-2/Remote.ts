import {DogDoor} from './DogDoor'

export class Remote{

    private openFlag: DogDoor;
    public constructor(door: DogDoor){
        this.openFlag = door;
    }

    public pressButton() {
        console.log('リモコンのボタンを押したよ');
        console.log(this.openFlag.isOpen());

        if(this.openFlag.isOpen()){
            this.openFlag.close();
        }else{
            this.openFlag.open();
        }
    }
}