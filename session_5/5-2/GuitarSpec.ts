import { Type } from './type'
import { Wood } from './wood'
import { Builder } from './builder'
import { InstrumentSpec } from './InstrumentSpec'

export class GuitarSpec extends InstrumentSpec {
    private numStrings: number;

    constructor(builder: Builder, model: string, type: Type, numStrings: number, backWood: Wood, topWood: Wood) {
        //superで抽象化クラスのコンストラクタに値を渡す
        super(builder, model, type, backWood, topWood);
        this.numStrings = numStrings;
    }

    public getNumString() {
        return this.numStrings;
    }
}
