import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environmentVariables } from "../constants/url.constants";
import { WishList } from "../models/wishlist";

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  private baseUrl=environmentVariables.BACKEND_URL;

  constructor(private http: HttpClient) { }

  createWish(wish: WishList):Observable<WishList>{
    let url=this.baseUrl+`wishlist/create`;
    return this.http.post<WishList>(url,wish);
  }

  getWishes(): Observable<WishList[]>{
    let url=this.baseUrl+ `wishlist/getall`;
    return this.http.get<WishList[]>(url);
  }

  getWishesForCustomer( id: number): Observable<WishList[]>{
    let url=this.baseUrl+ `wishlist/getbycustomerid/${id}`;
    return this.http.get<WishList[]>(url);
  }

  getWishesForSeller( id: number): Observable<WishList[]>{
    let url=this.baseUrl+ `wishlist/getbysellerid/${id}`;
    return this.http.get<WishList[]>(url);
  }

  deleteWish(id: number): Observable<WishList>{
    let url=this.baseUrl+`wishlist/delete/${id}`;
    return this.http.delete<WishList>(url);
  }

}