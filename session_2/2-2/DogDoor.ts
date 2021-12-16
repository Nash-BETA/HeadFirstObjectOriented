export class DogDoor{

    private openFlag:boolean;
    public constructor(){
        this.openFlag = false;
    }

    public open() {
        console.log('ドアが開いた');
        this.openFlag = true;
    }
    public close() {
        console.log('ドアが閉じた');
        this.openFlag = false;
    }
    public isOpen():boolean{
        return this.openFlag;
    }

}