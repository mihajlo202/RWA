import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environmentVariables } from "../constants/url.constants";
import { Product } from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private baseUrl=environmentVariables.BACKEND_URL;

    constructor(private http: HttpClient) { }

    createProduct(product: Product):Observable<Product>{
        let url=this.baseUrl+`product/create`;
        console.log(product)
        return this.http.post<Product>(url,product);
    }

    updateProduct(product: Product):Observable<Product>{
        let url=this.baseUrl+`product/update`;
        return this.http.put<Product>(url,product);
    }

    deleteProduct(productId: number):Observable<Product>{
        let url=this.baseUrl+`product/delete/${productId}`;
        return this.http.delete<Product>(url);
    }

    getAllProducts(): Observable<Product[]>{
        let url=this.baseUrl+"product/getall";
        return this.http.get<Product[]>(url);
    }

    getProductsBySellerId( id: number): Observable<Product[]>{
        let url=this.baseUrl+`product/getbysellerid/${id}`;
        return this.http.get<Product[]>(url);
    }
}