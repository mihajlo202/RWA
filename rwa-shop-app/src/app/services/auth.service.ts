import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environmentVariables } from "../constants/url.constants";
import { LoggedUser } from "../models/loggeduser";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = environmentVariables.BACKEND_URL;

    constructor(private http: HttpClient) {}

    checkIfUserValid(loggedUser:LoggedUser) : Observable<LoggedUser> {
        const url = this.baseUrl + `loggeduser/checkisvalid`;
        return this.http.post<LoggedUser>(url,loggedUser);
    }

    getUserByEmail(email:string) : Observable<LoggedUser> {
        const url = this.baseUrl + `loggeduser/getbyemail/${email}`;
        return this.http.get<LoggedUser>(url);
    }

    registerUser(user: LoggedUser) : Observable<LoggedUser> {
        let url=this.baseUrl + `loggeduser/create`;
        return this.http.post<LoggedUser>(url,user);
    }
}