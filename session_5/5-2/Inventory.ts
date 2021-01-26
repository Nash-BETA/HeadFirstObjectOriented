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
    public instruments: any;

    public constructor() {
        this.instruments = [];
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
        this.instruments.push(instrument);
    }

    //楽器の取得
    public getInstrument(serialNumber:string): Instrument|null {
        let i :number = 0;
        let count: number = this.instruments.length;
        for (i = count; i++; ) {
            let guitar: any = this.instruments[i];
            if (guitar.getSerialNumber() == serialNumber) {
                return guitar;
            }
        }
        return null;
    }

    public search(searchInstrumentSpec: InstrumentSpec): [] {
        let searchInstrument;
        if (searchInstrumentSpec instanceof GuitarSpec){
            searchInstrument = new Guitar('', 0, searchInstrumentSpec);
        } else if (searchInstrumentSpec instanceof MandolinSpec) {
            searchInstrument = new Mandolin('', 0, searchInstrumentSpec);
        }

        let i: number = 0;
        let returnGuitar :any = [];
        let count: number = this.instruments.length;

        if (searchInstrument != undefined){
            for (i = 0; i < count; i++) {
                let guitar = this.instruments[i].getSpec();

                let builder: Builder = searchInstrumentSpec.getBuilder();
                if (builder != null && builder != guitar.getBuilder()){
                    continue;
                }
                let model: string = searchInstrumentSpec.getModel();

                if (model != null && model != '' && model != guitar.getModel()){
                    continue;
                }
                let type: Type = searchInstrumentSpec.getType();
                if (type != null && searchInstrumentSpec != null && type != guitar.getType()){
                    continue;
                }
                let backWood: Wood = searchInstrumentSpec.getBackWood();
                if (backWood != null && backWood != guitar.getBackWood()){
                    continue;
                }
                let topWood: Wood = searchInstrumentSpec.getTopWood();
                if (topWood != null && topWood != guitar.getTopWood()){
                    continue;
                }
                returnGuitar.push(this.instruments[i])
            }
        }

        return returnGuitar;
    }
}
