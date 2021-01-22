import { DogDoor } from './DogDoor'
import { Bark } from './Bark'

export class BarkRecognizer{

    private dogDoor: DogDoor;
    constructor(dogDoor: DogDoor){
        this.dogDoor = dogDoor;
    }

    recognize(bark:Bark) {
    let allowedBarks: string[] = this.dogDoor.getAllowedBark();
    let i: string;
        for (i in allowedBarks){
            if (allowedBarks[i] == bark.getSound()) {
                this.dogDoor.open();
                return;
            }
        }
        console.log('許可されていない鳴き声です');
    }
}
