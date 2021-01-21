export class DogDoor{

    private openFlag:boolean;
    constructor(){
        this.openFlag = false;
    }

    open() {
        console.log('ドアが開いた');
        this.openFlag = true;
        setTimeout(() => {
            this.close();
        },500)
    }

    close() {
        console.log('ドアが閉じた');
        this.openFlag = false;
    }

    isOpen():boolean{
        return this.openFlag;
    }
}