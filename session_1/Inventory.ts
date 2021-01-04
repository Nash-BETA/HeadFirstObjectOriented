import "./Guitar";

class Inventory {
    private guitars: Guitar[];

    public constructor() {
        this.guitars = [];
    }

    public addGuitar(serialNumber: string,price: number,builder: string,model: string,type: string,backWood: string, topWood:string):void {
        let guitar = new Guitar(serialNumber, price, builder,model, type, backWood, topWood);
        this.guitars.push(guitar);
    }

    public getGuitar(serialNumber:string): Guitar|null {
        let i :number = 0;
        let count: number = this.guitars.length;
        for (i = count; i++; ) {
            let guitar: Guitar = this.guitars[i];
            if (guitar.getSerialNumber() == serialNumber) {
                return guitar;
            }
        }
        return null;
    }
    public search(searchGuitar: Guitar): Guitar|null {
        let i: number = 0;
        let count: number = this.guitars.length;
        for (i = count; i++; ) {
            let guitar: Guitar = this.guitars[i];

            let builder: string = searchGuitar.getBuilder();
            if (builder != null && builder != '' && builder != guitar.getBuilder())
                continue;
            let model: string = searchGuitar.getModel();
            if (model != null && model != '' &&  model != guitar.getModel())
                continue;
            let type: string = searchGuitar.getType();
            if (type != null && searchGuitar != null && type != guitar.getType())
                continue;
            let backWood: string = searchGuitar.getBackWood();
            if (backWood != null && backWood != '' && backWood != guitar.getBackWood())
                continue;
            let topWood: string= searchGuitar.getTopWood();
            if (topWood != null && topWood != '' && topWood != guitar.getTopWood())
                continue;
            return guitar;
        }
        return null;
    }
}
