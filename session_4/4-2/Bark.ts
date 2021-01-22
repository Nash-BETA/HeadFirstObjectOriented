export class Bark{

    private sound:string;

    constructor(sound:string){
        this.sound = sound;
    }

    /**
     * getSound - 声を取得する
     *
     * @return string
     */
    getSound(): string {
        return this.sound;
    }


    /**
     * equals -
     *
     * @return boolean
     */
    equals(bark:Bark): boolean {
        if(bark instanceof Bark){
            let otherBark: Bark = bark;
            if (this.sound == otherBark.sound) {
                return true;
            }
        }
        return false;
    }

}