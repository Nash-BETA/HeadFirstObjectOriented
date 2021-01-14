
import { Type } from './type'
import { Wood } from './wood'
import { Builder } from './builder'

export class GuitarSpec {
    private builder: Builder;
    private model: string;
    private type: Type;
    private backWood: Wood;
    private topWood: Wood;

    public constructor(builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) {
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
    }

    public getBuilder(): Builder {
        return this.builder;
    }

    public getModel(): string {
        return this.model;
    }

    public getType(): Type {
        return this.type;
    }

    public getBackWood():Wood {
        return this.backWood;
    }

    public getTopWood():Wood {
        return this.topWood;
    }


}
