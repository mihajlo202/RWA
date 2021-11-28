import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environmentVariables } from "../constants/url.constants";
import { Seller } from "../models/seller";

@Injectable({
    providedIn: 'root'
})
export class SellerService {
  private baseUrl = environmentVariables.BACKEND_URL;

  constructor(private http:HttpClient) {}

  registerSeller(seller:Seller):Observable<Seller>{
    let url=this.baseUrl+`seller/create`;
    return this.http.post<Seller>(url,seller);
  }

  getSellerByEmail(email: string): Observable<Seller>{
    let url=this.baseUrl+`seller/getbyemail/${email}`;
    return this.http.get<Seller>(url);
  }
  
}