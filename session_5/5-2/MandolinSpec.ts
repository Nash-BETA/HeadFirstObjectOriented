import { Type } from './type'
import { Wood } from './wood'
import { Builder } from './builder'
import { Style } from './style'
import { InstrumentSpec } from './InstrumentSpec'

export class MandolinSpec extends InstrumentSpec{
    private style: Style;

    constructor(builder: Builder, model: string, type: Type, style: Style, backWood: Wood, topWood: Wood) {
        //superで抽象化クラスのコンストラクタに値を渡す
        super( builder, model, type, backWood, topWood );
        this.style = style;
    }

    public getStyle(){
        return this.style;
    }
}
