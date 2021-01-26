
import { Instrument } from './Instrument';
import { GuitarSpec } from './GuitarSpec';
import { MandolinSpec } from './MandolinSpec';
import { InstrumentSpec } from './InstrumentSpec';
import { Inventory } from './Inventory';
import { Type } from './type'
import { Wood } from './wood'
import { Builder } from './builder'
import { Style } from './style'

class Main {
    public inventory = new Inventory();

    //サンプル用のデータ入力
    public constructor() {
        //ギーターデータ
        this.inventory.addInstrument('11277', 3999.95, new GuitarSpec(Builder.COLLINGS, 'CJ', Type.ACOUSTIC, 6, Wood.INDIAN_ROSEWOOD, Wood.SITKA));
        this.inventory.addInstrument('V95693', 1499.95, new GuitarSpec(Builder.FENDER, 'Stratocastor', Type.ELECTRIC,6 , Wood.ALDER, Wood.ALDER));
        this.inventory.addInstrument('V9512', 1549.95, new GuitarSpec(Builder.FENDER, 'Stratocastor', Type.ELECTRIC, 6, Wood.ALDER, Wood.ALDER));
        this.inventory.addInstrument('122784', 5495.95, new GuitarSpec(Builder.MARTIN, 'D-18', Type.ACOUSTIC, 6, Wood.MAHOGANY, Wood.ADIRONDACK));
        this.inventory.addInstrument('76531', 6295.95, new GuitarSpec(Builder.MARTIN, 'OM-28', Type.ACOUSTIC, 6, Wood.BRAZILIAN_ROSEWOOD, Wood.ADIRONDACK));
        this.inventory.addInstrument('70108276', 2295.95, new GuitarSpec(Builder.MARTIN, 'Les Paul', Type.ELECTRIC, 6, Wood.MAHOGANY, Wood.MAPLE));
        this.inventory.addInstrument('82765501', 1890.95, new GuitarSpec(Builder.MARTIN, 'SG `61 Reissue', Type.ELECTRIC, 6, Wood.MAHOGANY, Wood.MAHOGANY));
        this.inventory.addInstrument('77023', 6275.95, new GuitarSpec(Builder.MARTIN, 'D-28', Type.ACOUSTIC, 6, Wood.BRAZILIAN_ROSEWOOD, Wood.ADIRONDACK));
        this.inventory.addInstrument('1092', 12995.95, new GuitarSpec(Builder.OLSON, 'SJ', Type.ACOUSTIC, 6, Wood.INDIAN_ROSEWOOD, Wood.CEDAR));
        this.inventory.addInstrument('566-62', 8999.95, new GuitarSpec(Builder.RYAN, 'Cathedral', Type.ACOUSTIC, 6, Wood.COCOBOLO, Wood.CEDAR));
        this.inventory.addInstrument('6 29584', 2100.95, new GuitarSpec(Builder.PRS, 'Dave Navarro Signature', Type.ELECTRIC, 6, Wood.MAHOGANY, Wood.MAPLE));
        this.inventory.addInstrument('A12', 1234, new MandolinSpec(Builder.RYAN, 'Cathedral', Type.ACOUSTIC, Style.A, Wood.COCOBOLO, Wood.CEDAR));

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
                    Builder.toBuilder(spec.getBuilder()) + ' の ' + spec.getModel() + ' ' +
                    Type.toType(spec.getType()) + ' のギターが好きだと思うよ！！ \n' +
                    Wood.toWood(spec.getBackWood()) + ' が背面で, ' +
                    Wood.toWood(spec.getTopWood())+ ' がトップの素材だし！！\n 今なら $' +
                    guitar.getPrice() + '!');

                result = resultText;
            }
        } else {
            result = 'ごめんよ見当たらなかったよ';
        }

        return result;
    }


    main(): void {
        const export_text = this.returnMessage(new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, 6, Wood.ALDER, Wood.ALDER));
        console.log(export_text);

        const export_text2 = this.returnMessage(new GuitarSpec(Builder.COLLINGS, "CJ", Type.ACOUSTIC, 6, Wood.INDIAN_ROSEWOOD, Wood.SITKA));
        console.log(export_text2);

        //みつからないやつ
        const export_text3 = this.returnMessage(new GuitarSpec(Builder.COLLINGS, "CJ", Type.ELECTRIC, 6, Wood.INDIAN_ROSEWOOD, Wood.SITKA));
        console.log(export_text3);


        const export_text4 = this.returnMessage(new MandolinSpec (Builder.RYAN, 'Cathedral', Type.ACOUSTIC, Style.A, Wood.COCOBOLO, Wood.CEDAR));
        console.log(export_text4);
    }
}

const main = new Main();
main.main();