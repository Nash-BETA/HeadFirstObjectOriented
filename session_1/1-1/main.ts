import { FindGuitarTester } from './FindGuitarTester';

class Main {
    main(): void {
        const fgt = new FindGuitarTester();
        const export_text = fgt.main("V95693", 1499.95, "Fender", "Stratocastor", "electric",
            "Alder", "Alder");
        console.log(export_text);

        const export_text2 = fgt.main("11277", 3999.95, "Collings", "CJ", "acoustic",
            "Indian Rosewood", "Sitka");
        console.log(export_text2);

        //みつからないやつ
        const export_text3 = fgt.main("11277", 3999.95, "Collings", "CJ", "fender",
            "Indian Rosewood", "Sitka");
        console.log(export_text3);
    }
}
const main = new Main();
main.main();