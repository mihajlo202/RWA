import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isSeller: boolean;
  errorMsg: string;
  constructor(//private authService: AuthService, private sellerService: SellerService, private customerService: CustomerService
    ) { 
    this.isSeller = true;
    this.errorMsg = "";
  }
  ngOnInit(): void {
  }

  radioChange(event:Event) {
    const elem: HTMLInputElement = event.target as HTMLInputElement;
    if(elem.value == "seller")
        this.isSeller = true;
    else
      this.isSeller = false;
  }

  checkInput(ime:string, prezime:string, email:string, password:string, company: string) : boolean{
    if((ime === '' || ime == null || ime === undefined)  ||
      (prezime === '' || prezime == null || prezime === undefined) || 
      (password === '' || password == null || password === undefined ) || 
      (email === '' || email == null || email === undefined) ||
      (company === '' || company ==  null || company=== undefined || company=== " "))
      return false;
    else 
    return true;
  }

  registerUser(email:string, password:string, role:string) {
    // let user = new LoggedUser(email, password, role)
    // this.authService.registerUser(user)
    // .subscribe(value => {
    //     console.log(`Uspešno registrovan korisnik ${user.email}!`)
    //   },
    //   err => {
    //     alert(`Dogodila se greška pri registrovanju korisnika, pokušajte ponovo.`)
    // })
  }

  btnRegistrujClicked(){
    const ime: HTMLInputElement = (document.getElementById('input-ime') as HTMLInputElement);
    const prezime: HTMLInputElement = (document.getElementById('input-prezime') as HTMLInputElement);
    const email: HTMLInputElement = (document.getElementById('input-email') as HTMLInputElement);
    const password: HTMLInputElement = (document.getElementById('input-password') as HTMLInputElement);
  
    if(this.isSeller){
      const company: HTMLInputElement = (document.getElementById('input-company') as HTMLInputElement);
      const provera=this.checkInput(ime.value, prezime.value, email.value,password.value, company.value);
      if(!provera)
        this.errorMsg="Unesite sva input polja za registraciju!"
      else{
        this.registerUser(email.value, password.value, "seller");
      
        // let seller = new Seller(ime.value,prezime.value, email.value,company.value);
        // this.sellerService.registerSeller(seller).subscribe(
        //   (value) => {
        //     alert(`Uspešno registrovan prodavac ${seller.email}!`)
        //   },
        //   err => {
        //     alert(`Dogodila se greška pri registrovanju poslodavca, pokušajte ponovo.`)
        // })
        ime.value='';
        prezime.value='';
        email.value='';
        password.value='';
        company.value='';
      }
    }
    else {
      const address: HTMLInputElement = (document.getElementById('input-address') as HTMLInputElement);
      const provera=this.checkInput(ime.value, prezime.value, email.value,password.value, address.value);
      if(!provera){
        this.errorMsg="Unesite sva input polja za registraciju!"
      }
      else{
        this.registerUser(email.value, password.value, "customer");
        // let customer = new Customer(ime.value, prezime.value, email.value, address);
        // this.customerService.registerCustomer(customer).subscribe(
        //   (value) => {
        //     alert(`Uspešno registrovan kupac ${customer.email}!`)
        //   },
        //   err => {
        //     alert(`Dogodila se greška pri registrovanju ${customer.email}, pokušajte ponovo.`)
        // })
        ime.value='';
        prezime.value='';
        email.value='';
        password.value='';
      }
    }
    }

}
