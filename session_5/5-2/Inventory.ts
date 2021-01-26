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
    public guitars: any;

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
            let guitar :any = this.guitars[i];
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
            let guitar = this.guitars[i].getSpec();

            let builder: Builder = searchGuitarSpec.getBuilder();
            if (builder != null && builder != guitar.getBuilder()){
                continue;
            }
            let model: string = searchGuitarSpec.getModel();

            if (model != null && model != '' && model != guitar.getModel()){
                continue;
            }
            let type: Type = searchGuitarSpec.getType();
            if (type != null && searchGuitarSpec != null && type != guitar.getType()){
                continue;
            }
            let backWood: Wood = searchGuitarSpec.getBackWood();
            if (backWood != null && backWood != guitar.getBackWood()){
                continue;
            }
            let topWood: Wood = searchGuitarSpec.getTopWood();
            if (topWood != null && topWood != guitar.getTopWood()){
                continue;
            }
            returnGuitar.push(this.guitars[i])
        }
        return returnGuitar;
    }
}
