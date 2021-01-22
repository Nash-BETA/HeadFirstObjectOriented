import { DogDoor } from './DogDoor'

export class BarkRecognizer{

    private dogDoor: DogDoor;
    constructor(dogDoor: DogDoor){
        this.dogDoor = dogDoor;
    }

    recognize(bark:string) {
        let allowedBark: string = this.dogDoor.getAllowedBark();
        if (allowedBark == bark){
            this.dogDoor.open();
        }else{
            console.log('許可されていない鳴き声です');
        }
    }
}
