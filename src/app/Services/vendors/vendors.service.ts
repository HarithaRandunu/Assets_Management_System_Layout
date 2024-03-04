import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendors } from '../../modules/vendors';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  constructor(private http: HttpClient) { }
        apiUrl: string = "http://localhost:3000/Vendors";

    getVendors() {
        return this.http.get<Vendors[]>(this.apiUrl);
    }

    // public vendorList: Vendor[] = [
    //     {
    //         vendorID: 484515184561,
    //         pictureUrl: "../../assets/keyboard.png",
    //         vendorName: "John Ronald",
    //         vendorAddress: "Beaker Street, London",
    //         contactNo: "0779841519",
    //         vendorEmail: "johnRonald@gmail.com",
    //         supplyAssetsType: "Mouse"
    //     },
    //     {
    //         vendorID: 2698456,
    //         pictureUrl: "../../assets/keyboard.png",
    //         vendorName: "John Ronald",
    //         vendorAddress: "Beaker Street, London",
    //         contactNo: "0779841519",
    //         vendorEmail: "johnRonald@gmail.com",
    //         supplyAssetsType: "Mouse"
    //     },
    //     {
    //         vendorID: 484515184561,
    //         pictureUrl: "../../assets/keyboard.png",
    //         vendorName: "John Ronald",
    //         vendorAddress: "Beaker Street, London",
    //         contactNo: "0779841519",
    //         vendorEmail: "johnRonald@gmail.com",
    //         supplyAssetsType: "Mouse"
    //     },
    //     {
    //         vendorID: 484515184561,
    //         pictureUrl: "../../assets/keyboard.png",
    //         vendorName: "John Ronald",
    //         vendorAddress: "Beaker Street, London",
    //         contactNo: "0779841519",
    //         vendorEmail: "johnRonald@gmail.com",
    //         supplyAssetsType: "Mouse"
    //     },
    //     {
    //         vendorID: 484515184561,
    //         pictureUrl: "../../assets/keyboard.png",
    //         vendorName: "John Ronald",
    //         vendorAddress: "Beaker Street, London",
    //         contactNo: "0779841519",
    //         vendorEmail: "johnRonald@gmail.com",
    //         supplyAssetsType: "Mouse"
    //     },
    //     {
    //         vendorID: 484515184561,
    //         pictureUrl: "../../assets/keyboard.png",
    //         vendorName: "John Ronald",
    //         vendorAddress: "Beaker Street, London",
    //         contactNo: "0779841519",
    //         vendorEmail: "johnRonald@gmail.com",
    //         supplyAssetsType: "Mouse"
    //     },
    //     {
    //         vendorID: 484515184561,
    //         pictureUrl: "../../assets/keyboard.png",
    //         vendorName: "John Ronald",
    //         vendorAddress: "Beaker Street, London",
    //         contactNo: "0779841519",
    //         vendorEmail: "johnRonald@gmail.com",
    //         supplyAssetsType: "Mouse"
    //     },
    //     {
    //         vendorID: 484515184561,
    //         pictureUrl: "../../assets/keyboard.png",
    //         vendorName: "John Ronald",
    //         vendorAddress: "Beaker Street, London",
    //         contactNo: "0779841519",
    //         vendorEmail: "johnRonald@gmail.com",
    //         supplyAssetsType: "Mouse"
    //     }
    // ]
}
