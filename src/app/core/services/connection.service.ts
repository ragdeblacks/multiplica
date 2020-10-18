import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(
    public http: HttpClient
  ) { }

  // tslint:disable-next-line: typedef
  get(url: string, params: HttpParams){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.urlBase + url, {headers, params});
  }
}
