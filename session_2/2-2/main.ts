import { DogDoor } from './DogDoor'
import { Remote } from './Remote'

class Main{

    private dogDoor = new DogDoor();
    private remote: Remote = new Remote(this.dogDoor);

    public main() {
        //自動でドアがします
        this.start('Fidoが外に出たいと吠えた！').then(() =>{
            this.start('Fidoが外に出たがってる！')
        })
    }


    public async start(text:string){
        return new Promise((resolve) => {
            console.log(text)
            this.remote.pressButton()

            setTimeout(() => {
                resolve('');
            }, 5001);
        })
    }

}

let m = new Main();
m.main();