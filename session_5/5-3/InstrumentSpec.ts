
export class InstrumentSpec {
    private properties:Map<any,any>;

    public constructor(properties: Map<any, any>) {
        if(properties == null ){
            this.properties = new Map();
        } else {
            this.properties = new Map(properties);
        }
    }

    public getproperty(propertyName:string) {
        return this.properties.get(propertyName);
    }

    public getproperties() {
        return this.properties;
    }
}