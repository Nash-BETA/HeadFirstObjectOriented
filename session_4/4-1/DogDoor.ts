export class DogDoor{

    private openFlag:boolean;
    private allowedBark:string;

    constructor(){
        this.openFlag = false;
        this.allowedBark = 'わおーん';
    }

    /**
     * isOpen - 扉の状態を返す
     *
     * @return boolean true →扉が開いてる
     */
    isOpen(): boolean {
        return this.openFlag;
    }

    /**
     * open - 扉を開けて自動で占める
     *
     * @return void
     */
    open() {
        console.log('ドアが開いた');
        this.openFlag = true;
        setTimeout(() => {
            this.close();
        },500)
    }

    /**
     * close - 扉を閉じる
     *
     * @return void
     */
    close() {
        console.log('ドアが閉じた');
        this.openFlag = false;
    }

    /**
     * setAllowedBark - 反応する鳴き声の設定
     *
     * @return void
     */
    setAllowedBark(bark:string){
        this.allowedBark = bark;
    }

    /**
     * getAllowedBark - ドアが開くことが許された鳴き声
     *
     * @return string
     */
    getAllowedBark(): string{
        return this.allowedBark
    }

}