import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notifications } from '../../modules/notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "http://localhost:3000/Notifications";

  getNotifications() {
    return this.http.get<Notifications[]>(this.apiUrl);
  }
}
