import { Component, inject } from '@angular/core';
import { Asset } from '../../Models/asset';
import { AssetsService } from '../../Services/assets.service';
import { PagingConfig } from '../../Models/paging-config-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-assets-table',
  templateUrl: './my-assets-table.component.html',
  styleUrl: './my-assets-table.component.scss'
})
export class MyAssetsTableComponent implements PagingConfig {
  // assetServices: AssetsService = inject(AssetsService);
  title = 'ngx-paging-sample';
  id = "second";
  currentPage:number  = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  tableSize: number[] = [5, 10, 15, 20];
  assetList = new Array<Asset>();
  pagingConfig: PagingConfig = {} as PagingConfig;

  constructor(private assetServ:AssetsService){
    this.getAssets();
    this.pagingConfig = {
      id: this.id,
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }

  getAssets(){
      this.assetList = this.assetServ.assetList;
      this.pagingConfig.totalItems = this.assetList.length;
  }

  onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
    this.getAssets();
  }

  onTableSizeChange(event:any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.getAssets();
  }

}

