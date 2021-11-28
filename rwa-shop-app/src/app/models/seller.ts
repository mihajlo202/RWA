export class Seller {
    id!:number;
    name: string;
    surname: string;
    email: string;
    company: string;

    constructor(name:string, surname:string, email:string, company:string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.company = company;
    }
}
