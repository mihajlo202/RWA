export class Product {
    id!:number;
    name: string;
    description: string;
    sellerId: number;

    constructor(name:string, description:string, sellerId:number) {
        this.name = name;
        this.description = description;
        this.sellerId = sellerId;
    }
}