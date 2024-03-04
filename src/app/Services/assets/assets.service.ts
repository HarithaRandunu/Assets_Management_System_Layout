import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assets } from '../../modules/assets';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http: HttpClient) { }
  apiUrl: string = "http://localhost:3000/Assets";

  getAssets() {
    return this.http.get<Assets[]>(this.apiUrl);
  }

  // public assetList:Asset[] = [
  //   {
  //     assetName: "13-inch MacBook Air with M1 chip",
  //     id: 4718050302178,
  //     model: "Apple MacBook Air",
  //     pictureUrl: "assets/Laptop.png",
  //     status: "Operational",
  //     createdOn: "Sun May 24 2020 19:16:23"
  //   },
  //   {
  //     assetName: "Keyboard English Standard QWERTY",
  //     id: 2018050302178,
  //     model: "Apple MacBook Air",
  //     pictureUrl: "assets/keyboard.png",
  //     status: "Not operational",
  //     createdOn: "Sun May 24 2020 19:16:23"
  //   },
  //   {
  //     assetName: "13-inch MacBook Air with M1 chip",
  //     id: 5008050302178,
  //     model: "Apple MacBook Air",
  //     pictureUrl: "assets/Laptop.png",
  //     status: "Operational",
  //     createdOn: "Sun May 24 2020 19:16:23"
  //   },
  //   {
  //     assetName: "Keyboard English Standard QWERTY",
  //     id: 6008050302178,
  //     model: "Apple MacBook Air",
  //     pictureUrl: "assets/keyboard.png",
  //     status: "Operational",
  //     createdOn: "Sun May 24 2020 19:16:23"
  //   },
  //   {
  //     assetName: "Keyboard English Standard QWERTY",
  //     id: 6008050302178,
  //     model: "Apple MacBook Air",
  //     pictureUrl: "assets/keyboard.png",
  //     status: "Not operational",
  //     createdOn: "Sun May 24 2020 19:16:23"
  //   }
  //   ,
  //   {
  //     assetName: "13-inch MacBook Air with M1 chip",
  //     id: 6008050302178,
  //     model: "Apple MacBook Air",
  //     pictureUrl: "assets/Laptop.png",
  //     status: "Operational",
  //     createdOn: "Sun May 24 2020 19:16:23"
  //   }
  //   ,
  //   {
  //     assetName: "Keyboard English Standard QWERTY",
  //     id: 6008050302178,
  //     model: "Apple MacBook Air",
  //     pictureUrl: "assets/keyboard.png",
  //     status: "Operational",
  //     createdOn: "Sun May 24 2020 19:16:23"
  //   }
  // ];
}
