import { GuitarSpec } from './GuitarSpec'
import { Type } from './type'
import { Wood } from './wood'
import { Builder } from './builder'
export class Guitar {

    public serialNumber: string;
    public price: number;
    public spec: GuitarSpec;

    public constructor(serialNumber: string, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.spec = new GuitarSpec(builder, model, type, backWood, topWood);
    }

    public getSerialNumber():string{
        return this.serialNumber;
    }

    public getPrice():number {
        return this.price;
    }
    public setPrice(newPrice: number): void {
        this.price = newPrice;
    }

    public getSpec(): GuitarSpec {
        return this.spec;
    }

}