import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Requests } from '../../modules/requests';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "http://localhost:3000/Requests";

  getRequests() {
    return this.http.get<Requests[]>(this.apiUrl);
  }
}



