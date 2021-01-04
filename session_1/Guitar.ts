class Guitar {

    serialNumber: string;
    price: number
    builder:string;
    model:string;
    type:string;
    backWood:string;
    topWood:string;

    public constructor(serialNumber: string, price: number,
        builder: string, model: string, type: string,
        backWood: string, topWood: string) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
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
    public getBuilder():string {
        return this.builder;
    }
    public getModel():string {
        return this.model;
    }
    public getType():string {
        return this.type;
    }
    public getBackWood():string {
        return this.backWood;
    }
    public getTopWood():string {
        return this.topWood;
    }

}