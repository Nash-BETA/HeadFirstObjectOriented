import { MandolinSpec } from './MandolinSpec'
import { Instrument } from './Instrument'
export class Mandolin extends Instrument {

    public constructor(serialNumber: string, price: number, MandolinSpec: MandolinSpec) {
        super(serialNumber, price, MandolinSpec);
    }
}