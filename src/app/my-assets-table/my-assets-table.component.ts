import { Component, HostListener, Inject, PLATFORM_ID, inject } from '@angular/core';
import { Assets } from '../../modules/assets';
import { PagingConfig } from '../../modules/paging-config-model';
import { isPlatformBrowser } from '@angular/common';
import { AssetsService } from '../../Services/assets/assets.service';
import { sortOptions } from './my-assets-tHead-data';

@Component({
  selector: 'app-my-assets-table',
  templateUrl: './my-assets-table.component.html',
  styleUrl: './my-assets-table.component.scss'
})
export class MyAssetsTableComponent implements PagingConfig {

  assets: Assets[] = [];
  sortData = sortOptions;

  constructor(private assetServ:AssetsService, @Inject(PLATFORM_ID) private platformId: object){
    this.pagingConfig = {
      id: this.id,
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }

  //USed to get inner width of the browser....
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }

  }
  

  //Apply the inner width to the component...
  ngOnInit(): void {
    this.assetServ.getAssets().subscribe((response) => {
      this.assets = response;
    });

    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }
  }

  sortDirection: string = 'asc';
  sortType: string = 'assetID';

  getNgClass(property: string): string {

    const sortOption = this.sortData.find(opt => opt.label === property) || this.sortData[0];
    return sortOption.sortOrder === 'asc' ? 'fa-angle-up' : 'fa-angle-down';
  }

  getClickFunction(property: string): void {

    const sortOption = this.sortData.find(opt => opt.label === property) || this.sortData[0];
    this.onSort(sortOption);
  }

  onSort(sortOption: {label: string, sortField: string, sortOrder: string}): void {

    if(sortOption.sortOrder === 'asc') {
      sortOption.sortOrder = 'desc';
      this.sortDirection = 'desc';
    } else {
      sortOption.sortOrder = 'asc';
      this.sortDirection = 'asc';
    }

    this.sortType = sortOption.sortField;

    this.sortData.forEach(opt => {
      if(opt !== sortOption) {
        opt.sortOrder = 'asc';
      }
    })
  }

  // sortID: boolean = true;
  // sortAssetName: boolean = false;
  // sortModel: boolean = false;
  // sortStatus: boolean = false;
  // sortCreatedDate: boolean = false;

  // selectSortDirection(): void {
  //   if(this.sortDirection === 'asc') {
  //     this.sortDirection = 'desc';
  //   } else {
  //     this.sortDirection = 'asc';
  //   }
  // }

  // selectSortType(): string {
  //   if(this.sortID) {
  //     this.sortType = 'id';
  //   } else if(this.sortAssetName) {
  //     this.sortType = 'assetName';
  //   } else if(this.sortModel) {
  //     this.sortType = 'model';
  //   } else if(this.sortStatus) {
  //     this.sortType = 'status';
  //   } else {
  //     this.sortType = 'createdOn';
  //   }
  //   return this.sortType;
  // }


  // angleDirection_col01(): string {
  //   let styleClass = '';
  //   if(this.sortDirection === 'asc' && this.sortID) {
  //     styleClass = 'fa-angle-up';
  //   } else {
  //     styleClass = 'fa-angle-down';
  //   }
  //   return styleClass;
  // }

  // angleDirection_col02(): string {
  //   let styleClass = '';
  //   if(this.sortDirection === 'asc' && this.sortAssetName) {
  //     styleClass = 'fa-angle-up';
  //   } else {
  //     styleClass = 'fa-angle-down';
  //   }
  //   return styleClass;
  // }

  // angleDirection_col03(): string {
  //   let styleClass = '';
  //   if(this.sortDirection === 'asc' && this.sortModel) {
  //     styleClass = 'fa-angle-up';
  //   } else {
  //     styleClass = 'fa-angle-down';
  //   }
  //   return styleClass;
  // }

  // angleDirection_col04(): string {
  //   let styleClass = '';
  //   if(this.sortDirection === 'asc' && this.sortStatus) {
  //     styleClass = 'fa-angle-up';
  //   } else {
  //     styleClass = 'fa-angle-down';
  //   }
  //   return styleClass;
  // }

  // angleDirection_col05(): string {
  //   let styleClass = '';
  //   if(this.sortDirection === 'asc' && this.sortCreatedDate) {
  //     styleClass = 'fa-angle-up';
  //   } else {
  //     styleClass = 'fa-angle-down';
  //   }
  //   return styleClass;
  // }



  // onID(): void {
  //   this.sortID = true;
  //   this.sortAssetName = false;
  //   this.sortModel = false;
  //   this.sortStatus = false;
  //   this.sortCreatedDate = false;

  //   this.selectSortDirection();
  // }

  // onAssetName(): void {
  //   this.sortID = false;
  //   this.sortAssetName = true;
  //   this.sortModel = false;
  //   this.sortStatus = false;
  //   this.sortCreatedDate = false;

  //   this.selectSortDirection();
  // }

  // onModel(): void {
  //   this.sortID = false;
  //   this.sortAssetName = false;
  //   this.sortModel = true;
  //   this.sortStatus = false;
  //   this.sortCreatedDate = false;

  //   this.selectSortDirection();
  // }

  // onStatus(): void {
  //   this.sortID = false;
  //   this.sortAssetName = false;
  //   this.sortModel = false;
  //   this.sortStatus = true;
  //   this.sortCreatedDate = false;

  //   this.selectSortDirection();
  // }

  // onCreatedDate(): void {
  //   this.sortID = false;
  //   this.sortAssetName = false;
  //   this.sortModel = false;
  //   this.sortStatus = false;
  //   this.sortCreatedDate = true;

  //   this.selectSortDirection();
  // }

  
  //Boolean result of weather search bar is shown or not...
  canShowSearchAsOverlay: boolean = false;

  //Boolean result to visible a class or not...
  class_visibility: boolean = false;

  //Boolean result to be fixed position or not....
  isH1_fixed_position: boolean = true;

  //decide weather search bar is shown or not using inner width...
  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if(innerWidth < 845) {
      this.class_visibility = false;
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
      this.class_visibility = true;
    }

  }


  //Decide the class should be visi
  search_hidden(): string  {
    let styleClass='';
    if(!this.class_visibility) {
      styleClass = 'class-visible';
    }
    else {
      styleClass = 'class-hidden';
    }

    return styleClass;
  }

  search_visible(): string{
    let styleClass='';
    if(this.class_visibility) {
      styleClass = 'class-visible';
    }
    else {
      styleClass = 'class-hidden';
    }

    return styleClass;
  }
  
  // assetServices: AssetsService = inject(AssetsService);
  title = 'ngx-paging-sample';
  id = "second";
  searchText: string = '';
  currentPage:number  = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  tableSize: number[] = [5, 10, 15, 20];
  pagingConfig: PagingConfig = {} as PagingConfig;

  onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
    this.assetServ.getAssets();
  }

  onTableSizeChange(event:any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.assetServ.getAssets();
  }

}

