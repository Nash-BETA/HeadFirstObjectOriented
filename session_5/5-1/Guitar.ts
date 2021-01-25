import { GuitarSpec } from './GuitarSpec'
export class Guitar {

    public serialNumber: string;
    public price: number;
    public spec: GuitarSpec;

    public constructor(serialNumber: string, price: number, guitarSpec:GuitarSpec) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.spec = guitarSpec;
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