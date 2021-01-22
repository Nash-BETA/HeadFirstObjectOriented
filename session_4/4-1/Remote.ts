import {DogDoor} from './DogDoor'

export class Remote{

    private openFlag: DogDoor;
    constructor(door: DogDoor){
        this.openFlag = door;
    }

    /**
     * pressButton - リモコンのボタンを押す
     *
     * @return void
     */
    pressButton():void{
        console.log('リモコンのボタンを押したよ');
        if(this.openFlag.isOpen()){
            this.openFlag.close();
        }else{
            this.openFlag.open();
        }
    }
}