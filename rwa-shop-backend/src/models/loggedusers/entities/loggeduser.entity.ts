import { Column, PrimaryColumn } from 'typeorm';

export abstract class LoggedUser {
    @PrimaryColumn('int')
    id: string;

    @Column({ type: 'text' })
    email: string;

    @Column({ type: 'text' })
    password: string;

    @Column({ type: 'text' })
    role: string;
}