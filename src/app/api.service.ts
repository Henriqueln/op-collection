import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Card } from './entities/card';

@Injectable()
export class ApiService {
//   readonly url = 'http://localhost:5984';
  readonly url = 'https://brachial-unmartial-sherryl.ngrok-free.dev'

  headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa('admin:1234'), // Encode username:password
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getSets(): Observable<any> {
    let request = { selector: {}, limit: 999999 };
    return this.http.post<any>(`${this.url}/set/_find`, request, { headers: this.headers }).pipe(
      map((response) => {
        return response.docs;
      }),
    );
  }

  getCards(): Observable<any> {
    let request = { selector: {}, limit: 999999 };
    return this.http.post<any>(`${this.url}/cards/_find`, request, { headers: this.headers }).pipe(
      map((response) => {
        return response.docs;
      }),
    );
  }

  getGames(): Observable<any> {
    let request = { selector: {}, limit: 999999 };
    return this.http.post<any>(`${this.url}/ranked-games/_find`, request, { headers: this.headers }).pipe(
      map((response) => {
        return response.docs;
      }),
    );
  }

  updateCard(request: Card) {
    return this.http.put<any>(`${this.url}/cards/${request._id}`, request, { headers: this.headers });
  }

  addGame(request: any) {
    return this.http.put<any>(`${this.url}/ranked-games/${request._id}`, request, { headers: this.headers });
  }

  addNewGame(request: any) {
    return this.http.post<any>(`${this.url}/ranked-games`, request, { headers: this.headers });
  }

  createCard(request: Card) {
    return this.http.post<any>(`${this.url}/cards`, request, { headers: this.headers });
  }
}
