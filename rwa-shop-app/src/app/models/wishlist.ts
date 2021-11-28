export class WishList {
    id!:number;
    productId:number;
    customerId:number;
    sellerId:number;

    constructor(productId:number, customerId:number, sellerId:number) {
        this.productId = productId;
        this.sellerId = sellerId;
        this.customerId = customerId;
    }
}