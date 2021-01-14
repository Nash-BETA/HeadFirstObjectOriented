import {Guitar} from './Guitar';
import { Type } from './type'
import { Wood } from './wood'
import { Builder } from './builder'
export class Inventory {
    public guitars:any[];

    public constructor() {
        this.guitars = [];
    }

    public addGuitar(serialNumber: string, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood):void {
        const guitar = new Guitar(serialNumber, price, builder,model, type, backWood, topWood);
        this.guitars.push(guitar);
    }

    public getGuitar(serialNumber:string): Guitar|null {
        let i :number = 0;
        let count: number = this.guitars.length;
        for (i = count; i++; ) {
            let guitar: Guitar = this.guitars[i];
            if (guitar.getSerialNumber() == serialNumber) {
                return guitar;
            }
        }
        return null;
    }
    public search(searchGuitar: Guitar): []|null {
        let i: number = 0;
        let returnGuitar :any= [];
        let count: number = this.guitars.length;

        for (i = 0; i < count; i++) {
            let guitar: Guitar = new Guitar(this.guitars[i]['serialNumber'], this.guitars[i]['price'], this.guitars[i]['spec']['builder'], this.guitars[i]['spec']['model'], this.guitars[i]['spec']['type'], this.guitars[i]['spec']['backWood'], this.guitars[i]['spec']['topWood']);
            let spec = guitar.getSpec();
            let serchSpec = searchGuitar.getSpec();
            let builder: Builder = serchSpec.getBuilder();

            if (builder != null && builder != spec.getBuilder()){
                continue;
            }
            let model: string = serchSpec.getModel();

            if (model != null && model != '' && model != spec.getModel()){
                continue;
            }
            let type: Type = serchSpec.getType();
            if (type != null && serchSpec != null && type != spec.getType()){
                continue;
            }
            let backWood: Wood = serchSpec.getBackWood();
            if (backWood != null &&backWood != spec.getBackWood()){
                continue;
            }
            let topWood: Wood = serchSpec.getTopWood();
            if (topWood != null && topWood != spec.getTopWood()){
                continue;
            }
            returnGuitar.push(guitar)
        }
        return returnGuitar;
    }
}
