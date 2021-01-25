import { Inventory } from './Inventory';
import { Guitar } from './Guitar';
import { GuitarSpec } from './GuitarSpec';
import { Type } from './type'
import { Wood } from './wood'
import { Builder } from './builder'

export class FindGuitarTester {
    public inventory = new Inventory();
    public constructor() {
        this.inventory.addGuitar('11277', 3999.95, Builder.Collings, 'CJ', Type.acoustic,
            Wood.IndianRosewood, Wood.Sitka);
        this.inventory.addGuitar('V95693', 1499.95, Builder.Fender, 'Stratocastor', Type.electric,
            Wood.Alder, Wood.Alder);
        this.inventory.addGuitar('V9512', 1549.95, Builder.Fender, 'Stratocastor', Type.electric,
            Wood.Alder, Wood.Alder);
        this.inventory.addGuitar('122784', 5495.95, Builder.Martin, 'D-18', Type.acoustic,
            Wood.Mahogany, Wood.Adirondack);
        this.inventory.addGuitar('76531', 6295.95, Builder.Martin, 'OM-28', Type.acoustic,
            Wood.BrazilianRosewood, Wood.Adirondack);
        this.inventory.addGuitar('70108276', 2295.95, Builder.Martin, 'Les Paul', Type.electric,
            Wood.Mahogany, Wood.Maple);
        this.inventory.addGuitar('82765501', 1890.95, Builder.Martin, 'SG `61 Reissue',
            Type.electric, Wood.Mahogany, Wood.Mahogany);
        this.inventory.addGuitar('77023', 6275.95, Builder.Martin, 'D-28', Type.acoustic,
            Wood.BrazilianRosewood, Wood.Adirondack);
        this.inventory.addGuitar('1092', 12995.95, Builder.Olson, 'SJ', Type.acoustic,
            Wood.IndianRosewood, Wood.Cedar);
        this.inventory.addGuitar('566-62', 8999.95, Builder.Ryan, 'Cathedral', Type.acoustic,
            Wood.Cocobolo, Wood.Cedar);
        this.inventory.addGuitar('6 29584', 2100.95, Builder.PRS, 'Dave Navarro Signature',
            Type.electric, Wood.Mahogany, Wood.Maple);

    }

    public main(serialNumber: string, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood ):string {

        const whatErinLikes = new GuitarSpec(builder, model, type, backWood, topWood);

        let guitars = this.inventory.search(whatErinLikes);
        let result: any = [];
        let guitar:Guitar;
        if (Array.isArray(guitars) || guitars != null ) {
            for (guitar of guitars){
                let spec = guitar.getSpec();
                let resultText = ('Erin, you might like this ' +
                    spec.getBuilder() + ' ' + spec.getModel() + ' ' +
                    spec.getType() + ' guitar:\n   ' +
                    spec.getBackWood() + ' back and sides,\n   ' +
                    spec.getTopWood() + ' top.\nYou can have it for only $' +
                    guitar.getPrice() + '!');

                result.push(resultText);
            }
        } else {
            result = ('Sorry, Erin, we have nothing for you.');
        }


        return result;
    }


}
