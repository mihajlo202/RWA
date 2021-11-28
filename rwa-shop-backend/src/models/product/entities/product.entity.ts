import { Column, PrimaryColumn } from 'typeorm';

export abstract class Product {
    @PrimaryColumn('int')
    id: string;

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'int' })
    sellerId: number;
}