import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, map } from "rxjs";
import { Card } from "./entities/card";


@Injectable()
export class ApiService {
    readonly url = 'http://admin:admin@localhost:5984';

    constructor(private http: HttpClient) { }

    getSets(): Observable<any> {
        let request = { "selector": {}, "limit": 999999 }
        return this.http.post<any>(`${this.url}/set/_find`, request).pipe(map(response => { return response.docs }));
    }

    getCards(): Observable<any> {
        let request = { "selector": {}, "limit": 999999 }
        return this.http.post<any>(`${this.url}/cards/_find`, request).pipe(map(response => { return response.docs }));
    }

    updateCard(request: Card) {
        return this.http.put<any>(`${this.url}/cards/${request._id}`, request)
    }

    createCard(request: Card){
        return this.http.post<any>(`${this.url}/cards`, request)
    }


}