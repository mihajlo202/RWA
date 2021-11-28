import { Column, PrimaryColumn } from 'typeorm';

export abstract class Seller {
    @PrimaryColumn('int')
    id: string;

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'text' })
    surname: string;

    @Column({ type: 'text' })
    email: string;

    @Column({ type: 'text' })
    company: string;
}