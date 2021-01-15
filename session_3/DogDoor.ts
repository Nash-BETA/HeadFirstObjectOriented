export class DogDoor {

    private openDoor: boolean;

    public constructor(){
        this.openDoor = false;
    }

    public open(): void{
        console.log("The dog door opens.");
        this.openDoor = true;
    }

    public close() :void{
        console.log("The dog door closes.");
        this.openDoor = false;
    }

    public isOpen(): boolean {
        return this.openDoor;
    }
}
