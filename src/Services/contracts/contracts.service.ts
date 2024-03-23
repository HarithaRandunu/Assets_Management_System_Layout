import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contracts } from '../../modules/contracts';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  constructor(private http: HttpClient) { }
    apiUrl: string = "http://localhost:3000/Contracts";

    getContracts() {
        return this.http.get<Contracts[]>(this.apiUrl);
    }


    // public contractList: Contracts[] = [
    //     {
    //         contractID: 8484652315,
    //         assignedDate: new Date(),
    //         title: "Buying 100 Mouses",
    //         description: "orem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit."
    //     },
    //     {
    //         contractID: 21354515,
    //         assignedDate: new Date(),
    //         title: "Buying 100 Mouses",
    //         description: "orem ipsum dolor sit, amet consectetur adipisicing elit."
    //     },
    //     {
    //         contractID: 98784684,
    //         assignedDate: new Date(),
    //         title: "Buying 100 Mouses",
    //         description: "orem ipsum dolor sit, amet consectetur adipisicing elit."
    //     },
    //     {
    //         contractID: 65999635448,
    //         assignedDate: new Date(),
    //         title: "Buying 100 Mouses",
    //         description: "orem ipsum dolor sit, amet consectetur adipisicing elit."
    //     },
    //     {
    //         contractID: 8484652315,
    //         assignedDate: new Date(),
    //         title: "Buying 100 Mouses",
    //         description: "orem ipsum dolor sit, amet consectetur adipisicing elit."
    //     },
    //     {
    //         contractID: 8484652315,
    //         assignedDate: new Date(),
    //         title: "Buying 100 Mouses",
    //         description: "orem ipsum dolor sit, amet consectetur adipisicing elit."
    //     }

    // ]
}
