import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class ColorsService extends ConnectionService {

  constructor(
    public http: HttpClient
  ) {
    super(http);
  }

  listColors(page: string): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('per_page', '9');
    return this.get('colors', params);
  }
}
