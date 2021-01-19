import { DogDoor } from './DogDoor';
import { Remote } from './Remote';
class DogDoorSimulator {

    public static main(args: String[]) :void{
        const door   = new DogDoor();
        const remote = new Remote(door);

        console.log("Fido barks to go outside...");
        remote.pressButton();

        console.log("\nFido has gone outside...");
        console.log("\nFido's all done...");

        try {
            setTimeout(function (){
            },10000);
        } catch (e) {
        }

        console.log("...but he's stuck outside!");
        console.log("\nFido starts barking...");
        console.log("...so Gina grabs the remote control.");
        remote.pressButton();

        console.log("\nFido's back inside...");
    }
}
