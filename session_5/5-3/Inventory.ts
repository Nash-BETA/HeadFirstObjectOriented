import { Type } from './type';
import { Wood } from './wood';
import { Builder } from './builder';
import { Instrument } from './Instrument';
import { InstrumentSpec } from './InstrumentSpec';
export class Inventory {
    public instruments: any;

    public constructor() {
        this.instruments = [];
    }

    //楽器の追加
    public addInstrument(serialNumber: string, price: number, spec: InstrumentSpec):void {
        const instrument = new Instrument(serialNumber, price, spec);
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

    public search(searchInstrumentSpec: InstrumentSpec) {
        const searchInstrument = new Instrument('', 0, searchInstrumentSpec);

        let i: number = 0;
        let returnGuitar = [];
        let count: number = this.instruments.length;
        if (searchInstrument != undefined){
            for (i = 0; i < count; i++) {
                let guitar = this.instruments[i].getSpec();

                let builder: Builder = searchInstrumentSpec.getproperty('builder');
                if (builder != null && builder != guitar.getproperty('builder')){
                    continue;
                }
                let model: string = searchInstrumentSpec.getproperty('model');

                if (model != null && model != '' && model != guitar.getproperty('model')){
                    continue;
                }
                let type: Type = searchInstrumentSpec.getproperty('type');
                if (type != null && searchInstrumentSpec != null && type != guitar.getproperty('type')){
                    continue;
                }
                let backWood: Wood = searchInstrumentSpec.getproperty('backWood');
                if (backWood != null && backWood != guitar.getproperty('backWood')){
                    continue;
                }
                let topWood: Wood = searchInstrumentSpec.getproperty('topWood');
                if (topWood != null && topWood != guitar.getproperty('topWood')){
                    continue;
                }
                returnGuitar.push(this.instruments[i])
            }
        }

        return returnGuitar;
    }
}
