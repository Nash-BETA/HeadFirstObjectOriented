import { GuitarSpec } from './GuitarSpec'
import { Instrument } from './Instrument'
export class Guitar extends Instrument {

    public constructor(serialNumber: string, price: number, guitarSpec:GuitarSpec) {
        super(serialNumber, price, guitarSpec);
    }
}