import { DogDoor } from './DogDoor'
import { Remote } from './Remote'

class Main{

    public main() {
        let dogDoor = new DogDoor();
        let remote:Remote = new Remote(dogDoor);
        remote.pressButton();
        remote.pressButton();
        remote.pressButton();
    }
}

let m = new Main();
m.main();