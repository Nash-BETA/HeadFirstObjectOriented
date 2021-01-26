import { Type } from './type';
import { Wood } from './wood';
import { Builder } from './builder';
import { Guitar } from './Guitar';
import { Mandolin } from './Mandolin';
import { Instrument } from './Instrument';
import { GuitarSpec } from './GuitarSpec';
import { MandolinSpec } from './MandolinSpec';
import { InstrumentSpec } from './InstrumentSpec';
export class Inventory {
    public guitars:any[];

    public constructor() {
        this.guitars = [];
    }

    //楽器の追加
    public addInstrument(serialNumber: string, price: number, spec: InstrumentSpec):void {
        let instrument;
        //specのインスタンスがGuitarSpecならば
        if(spec instanceof GuitarSpec){
            instrument = new Guitar(serialNumber, price, spec);
        //specのインスタンスがMandolinSpecならば
        } else if( spec instanceof MandolinSpec) {
            instrument = new Mandolin(serialNumber, price, spec);
        }
        this.guitars.push(instrument);
    }

    //楽器の取得
    public getGuitar(serialNumber:string): Instrument|null {
        let i :number = 0;
        let count: number = this.guitars.length;
        for (i = count; i++; ) {
            let guitar: Instrument = this.guitars[i];
            if (guitar.getSerialNumber() == serialNumber) {
                return guitar;
            }
        }
        return null;
    }

    public search(searchGuitarSpec: GuitarSpec): []|null {
        const searchGuitar = new Guitar('', 0, searchGuitarSpec);
        let i: number = 0;
        let returnGuitar :any= [];
        let count: number = this.guitars.length;

        for (i = 0; i < count; i++) {
            let guitar: Guitar = new Guitar(this.guitars[i]['serialNumber'], this.guitars[i]['price'], new GuitarSpec(this.guitars[i]['spec']['builder'], this.guitars[i]['spec']['model'], this.guitars[i]['spec']['type'], this.guitars[i]['spec']['numStrings'], this.guitars[i]['spec']['backWood'], this.guitars[i]['spec']['topWood']));
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
