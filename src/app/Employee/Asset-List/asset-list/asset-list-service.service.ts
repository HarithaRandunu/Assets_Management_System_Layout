import { Injectable } from '@angular/core';
import { Asset } from '../../../modules/assets';

@Injectable({
  providedIn: 'root'
})
export class AssetListServiceService {

  constructor() { }


  public assetList:Asset[] = [
    {
      assetName: "13-inch MacBook Air with M1 chip",
      id: 4718050302178,
      model: "Apple MacBook Air",
      pictureUrl: "assets/Laptop.png"
    },
    {
      assetName: "Keyboard English Standard QWERTY",
      id: 2018050302178,
      model: "Apple MacBook Air",
      pictureUrl: "assets/keyboard.png"
    },
    {
      assetName: "13-inch MacBook Air with M1 chip",
      id: 5008050302178,
      model: "Apple MacBook Air",
      pictureUrl: "assets/Laptop.png"
    },
    {
      assetName: "Keyboard English Standard QWERTY",
      id: 6008050302178,
      model: "Apple MacBook Air",
      pictureUrl: "assets/keyboard.png"
    },
    {
      assetName: "Keyboard English Standard QWERTY",
      id: 6008050302178,
      model: "Apple MacBook Air",
      pictureUrl: "assets/keyboard.png"
    }
    ,
    {
      assetName: "13-inch MacBook Air with M1 chip",
      id: 6008050302178,
      model: "Apple MacBook Air",
      pictureUrl: "assets/Laptop.png"
    }
    ,
    {
      assetName: "Keyboard English Standard QWERTY",
      id: 6008050302178,
      model: "Apple MacBook Air",
      pictureUrl: "assets/keyboard.png"
    }
  ];
}
