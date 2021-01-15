import { DogDoor } from './DogDoor';

export class Remote {
    private door: DogDoor;
    public constructor(door: DogDoor) {
        this.door = door;
    }

    public pressButton(): void {
        console.log;("Pressing the remote control button...");
        if (this.door.isOpen()) {
            this.door.close();
        } else {
            this.door.open();

            //一定時間後に特定の処理をおこなう（繰り返さずに一度だけ）
            setTimeout(
                function run(){
                    this.door.close();
            }, 5000);
        }
    }
}
