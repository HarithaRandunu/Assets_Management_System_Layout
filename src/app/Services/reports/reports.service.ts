import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reports } from '../../modules/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "http://localhost:3000/Reports";

  getReports() {
    return this.http.get<Reports[]>(this.apiUrl);
  }
}
