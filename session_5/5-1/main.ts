import { FindGuitarTester } from './FindGuitarTester';
import { Type } from './type'
import { Wood } from './wood'
import { Builder } from './builder'

class Main {
    main(): void {
        const fgt = new FindGuitarTester();
        const export_text = fgt.main("V95693", 1499.95, Builder.Fender, "Stratocastor", Type.electric,
            Wood.Alder, Wood.Alder);
        console.log(export_text);

        const export_text2 = fgt.main("11277", 3999.95, Builder.Collings, "CJ", Type.acoustic,
            Wood.IndianRosewood, Wood.Sitka);
        console.log(export_text2);

        //みつからないやつ
        const export_text3 = fgt.main("11277", 3999.95, Builder.Collings, "CJ", Type.electric,
            Wood.IndianRosewood, Wood.Sitka);
        console.log(export_text3);
    }
}
const main = new Main();
main.main();