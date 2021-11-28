import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environmentVariables } from "../constants/url.constants";
import { Customer } from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl=environmentVariables.BACKEND_URL;

  constructor(private http: HttpClient) { }

  registerCustomer(customer:Customer):Observable<Customer>{
    let url=this.baseUrl+`customer/create`;
    return this.http.post<Customer>(url,customer);
  }

  getCustomerByEmail(email: string): Observable<Customer>{
    let url=this.baseUrl+`customer/getbyemail/${email}`;
    return this.http.get<Customer>(url);
  }
}