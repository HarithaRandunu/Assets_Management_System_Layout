import { Assets } from './../../../modules/assets';
import { Component, OnInit, inject } from '@angular/core';
import { AssetsService } from '../../../Services/assets.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrl: './asset-list.component.scss'
})
export class AssetListComponent implements OnInit {

  assets: Assets[] = [];
  totalLength:any;
  page:number=1;
  assetServices: AssetsService = inject(AssetsService);

  constructor(public assetsService:AssetsService) {
  }

  ngOnInit(): void {
    this.assetsService.getAssets().subscribe((response) => {
      this.assets = response;
    })
  }

  // getAssets(){
  //   this.assetServices.getAssets().then((assets:Asset[]) => {
  //     this.assetList = assets;
  //     // this.pagingConfig.totalItems = assets.length;
  //   })
  // }

  // ngOnInit() {
  //   this.assetList = this.getAssets(this.service);
  //   console.log(this.assetList);
  // }

  // getAssets(service:AssetsService): Asset[] {
  //   return service.assetList
  // }

}
