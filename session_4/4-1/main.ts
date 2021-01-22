import { DogDoor } from './DogDoor'
import { Remote } from './Remote'
import { BarkRecognizer } from './BarkRecognizer'
class Main{

    private dogDoor: DogDoor = new DogDoor();
    private barkRecognizer: BarkRecognizer = new BarkRecognizer(this.dogDoor);
    private remote: Remote = new Remote(this.dogDoor);

    main() {
        //許可されている鳴き声
        this.dogDoor.setAllowedBark('バゥ！');

        //自動でドアがします
        this.RemoteStart('Fidoが外に出たいと吠えた！').then(() =>{
            console.log('--2回目--');
            this.RemoteStart('Fidoが外に出たがってる！').then(() => {
                console.log('--3回目--');
                this.BarkStart('バゥ！').then(() => {
                    console.log('--4回目--');
                    this.BarkStart('ワォーン');
                });
            });
        });
    }

    //ボタンを押す実行
    RemoteStart(text:string){
        return new Promise((resolve) => {
            console.log(text)
            this.remote.pressButton()
            setTimeout(() => {
                resolve('');
            }, 501);
        })
    }

    //吠えたときの実行
    BarkStart(text: string) {
        return new Promise((resolve) => {
            console.log(text)
            this.barkRecognizer.recognize(text)
            setTimeout(() => {
                resolve('');
            }, 501);
        })
    }
}

let m = new Main();
m.main();