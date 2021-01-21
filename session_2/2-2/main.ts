import { DogDoor } from './DogDoor'
import { Remote } from './Remote'

class Main{

    private dogDoor = new DogDoor();
    private remote: Remote = new Remote(this.dogDoor);

    public main() {
        //自動でドアがします
        this.start('Fidoが外に出たいと吠えた！').then(() =>{
            this.start('Fidoが外に出たがってる！').then(() => {
                this.start('Fidoが外から戻ってきた！')
            })
        })
    }

    //ボタンを押す実行を順番に
    public start(text:string){
        return new Promise((resolve) => {
            console.log(text)
            this.remote.pressButton()
            setTimeout(() => {
                resolve('');
            }, 501);
        })
    }
}

let m = new Main();
m.main();