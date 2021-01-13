import { Inventory } from './Inventory';
import { Guitar } from './Guitar';



export class FindGuitarTester {
    public inventory = new Inventory();

    public main(serialNumber: serialNumber, price: number, builder: string, model: string, type: string, backWood: string, topWood: string ):string {

        const whatErinLikes = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
        let guitar = this.inventory.search(whatErinLikes);
        let result: string;
        if (guitar != null) {
            result = ("Erin, you might like this " +
                guitar.getBuilder() + " " + guitar.getModel() + " " +
                guitar.getType() + " guitar:\n   " +
                guitar.getBackWood() + " back and sides,\n   " +
                guitar.getTopWood() + " top.\nYou can have it for only $" +
                guitar.getPrice() + "!");
        } else {
            result = ("Sorry, Erin, we have nothing for you.");
        }

        return result;
    }

    public constructor() {
        this.inventory.addGuitar("11277", 3999.95, "Collings", "CJ", "acoustic",
            "Indian Rosewood", "Sitka");
        this.inventory.addGuitar("V95693", 1499.95, "Fender", "Stratocastor", "electric",
            "Alder", "Alder");
        this.inventory.addGuitar("V9512", 1549.95, "Fender", "Stratocastor", "electric",
            "Alder", "Alder");
        this.inventory.addGuitar("122784", 5495.95, "Martin", "D-18", "acoustic",
            "Mahogany", "Adirondack");
        this.inventory.addGuitar("76531", 6295.95, "Martin", "OM-28", "acoustic",
            "Brazilian Rosewood", "Adriondack");
        this.inventory.addGuitar("70108276", 2295.95, "Gibson", "Les Paul", "electric",
            "Mahogany", "Maple");
        this.inventory.addGuitar("82765501", 1890.95, "Gibson", "SG '61 Reissue",
            "electric", "Mahogany", "Mahogany");
        this.inventory.addGuitar("77023", 6275.95, "Martin", "D-28", "acoustic",
            "Brazilian Rosewood", "Adirondack");
        this.inventory.addGuitar("1092", 12995.95, "Olson", "SJ", "acoustic",
            "Indian Rosewood", "Cedar");
        this.inventory.addGuitar("566-62", 8999.95, "Ryan", "Cathedral", "acoustic",
            "Cocobolo", "Cedar");
        this.inventory.addGuitar("6 29584", 2100.95, "PRS", "Dave Navarro Signature",
            "electric", "Mahogany", "Maple");

    }
}
