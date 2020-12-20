class Guitar{

    serialNumber: string;
    price: string
    builder:string;
    model:string;
    type:string;
    backWood:string;
    topWood:string;

    public constructor(serialNumber:string, price:string,
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

}