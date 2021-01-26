
import { Instrument } from './Instrument';
import { InstrumentSpec } from './InstrumentSpec';
import { Inventory } from './Inventory';
import { InstrumentType } from './instrumentType';
import { Type } from './type'
import { Wood } from './wood'
import { Builder } from './builder'
import { Style } from './style'

class Main {
    public inventory = new Inventory();

    //サンプル用のデータ入力
    public constructor() {
        const properties = new Map();

        properties.set('instrumentType', InstrumentType.GUITAR);
        properties.set('builder', Builder.COLLINGS);
        properties.set('model', 'CJ');
        properties.set('type', Type.ACOUSTIC);
        properties.set('numString', 6);
        properties.set('topWood', Wood.INDIAN_ROSEWOOD);
        properties.set('backWood', Wood.SITKA);

        this.inventory.addInstrument('11277', 3999.95, new InstrumentSpec(properties));


//        this.inventory.addInstrument('V95693', 1499.95, new GuitarSpec(Builder.FENDER, 'Stratocastor', Type.ELECTRIC,6 , Wood.ALDER, Wood.ALDER));
//        this.inventory.addInstrument('A12', 1234, new MandolinSpec(Builder.RYAN, 'Cathedral', Type.ACOUSTIC, Style.A, Wood.COCOBOLO, Wood.CEDAR));

    }

    returnMessage(instans: InstrumentSpec): string {
        const whatErinLikes = instans;

        let guitars = this.inventory.search(whatErinLikes);
        let result: any = [];
        let guitar: Instrument;

        if (guitars.length > 0) {
            for (guitar of guitars) {
                let spec = guitar.getSpec();
                let resultText = ('君！！！ たぶん ' +
                    Builder.toBuilder(spec.getproperty('builder')) + ' の ' + spec.getproperty('model') + ' ' +
                    Type.toType(spec.getproperty('type')) + ' のギターが好きだと思うよ！！ \n' +
                    Wood.toWood(spec.getproperty('backWood')) + ' が背面で, ' +
                    Wood.toWood(spec.getproperty('topWood'))+ ' がトップの素材だし！！\n 今なら $' +
                    guitar.getPrice() + '!');

                result = resultText;
            }
        } else {
            result = 'ごめんよ見当たらなかったよ';
        }

        return result;
    }


    main(): void {

        const properties = new Map();

        properties.set('instrumentType', InstrumentType.GUITAR);
        properties.set('builder', Builder.COLLINGS);
        properties.set('model', 'CJ');
        properties.set('type', Type.ACOUSTIC);
        properties.set('numString', 6);
        properties.set('topWood', Wood.INDIAN_ROSEWOOD);
        properties.set('backWood', Wood.SITKA);
        const export_text = this.returnMessage(new InstrumentSpec(properties));
        console.log(export_text);

//        const export_text2 = this.returnMessage(new GuitarSpec(Builder.COLLINGS, "CJ", Type.ACOUSTIC, 6, Wood.INDIAN_ROSEWOOD, Wood.SITKA));
//        console.log(export_text2);
//
//        //みつからないやつ
//        const export_text3 = this.returnMessage(new GuitarSpec(Builder.COLLINGS, "CJ", Type.ELECTRIC, 6, Wood.INDIAN_ROSEWOOD, Wood.SITKA));
//        console.log(export_text3);
//
//
//        const export_text4 = this.returnMessage(new MandolinSpec (Builder.RYAN, 'Cathedral', Type.ACOUSTIC, Style.A, Wood.COCOBOLO, Wood.CEDAR));
//        console.log(export_text4);
    }
}

const main = new Main();
main.main();