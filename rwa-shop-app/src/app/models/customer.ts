export class Customer {
    id!:number;
    name: string;
    surname: string;
    email: string;
    address: string;

    constructor(name:string, surname:string, email:string, address:string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = address;
    }
}