import { DogDoor } from './DogDoor'

class mainBark{

    private dogDoor: DogDoor;
    constructor(dogDoor: DogDoor){
        this.dogDoor = dogDoor;
    }

    main() {
        this.dogDoor.open();
    }
}
let m = new mainBark(new DogDoor);
m.main();