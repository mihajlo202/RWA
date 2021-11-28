import { Column, PrimaryColumn } from 'typeorm';

export abstract class WishList {
    @PrimaryColumn('int')
    id: string;

    @Column({ type: 'int' })
    productId: number;

    @Column({ type: 'int' })
    customerId: number;

    @Column({ type: 'int' })
    sellerId: number;
}