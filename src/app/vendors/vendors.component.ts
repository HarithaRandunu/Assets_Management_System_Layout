import { Contracts } from './../modules/contracts';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Vendors } from '../modules/vendors';
import { PagingConfig } from '../modules/paging-config-model';
import { isPlatformBrowser } from '@angular/common';
import { BodyComponent } from '../body/body.component';
import { VendorsService } from '../Services/vendors/vendors.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrl: './vendors.component.scss'
})
export class VendorsComponent implements PagingConfig, OnInit {

  vendors: Vendors[] = [];

  //For search data
  searchText = '';

  constructor(private vendorServ: VendorsService, @Inject(PLATFORM_ID) private platformId: object) {
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
    this.vendorServ.getVendors().subscribe((response) => {
      this.vendors = response;
    })

    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }
  }

  sortDirection: string = 'asc';
  sortType: string = 'vendorID';

  sortVendorID: boolean = true;
  sortVendorName: boolean = false;
  sortVendorAddress: boolean = false;
  sortContactNo: boolean = false;
  sortVendorEmail: boolean = false;
  sortSupplyAssets: boolean = false;

  angleDirection_col01(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortVendorID) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col02(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortVendorName) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col03(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortVendorAddress) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col04(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortContactNo) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col05(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortVendorEmail) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col06(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortSupplyAssets) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  selectSortDirection(): void {
    if(this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asc';
    }
  }

  selectSortType(): string {
    if(this.sortVendorID) {
      this.sortType = 'vendorID';
    } else if(this.sortVendorName) {
      this.sortType = 'vendorName';
    } else if (this.sortContactNo) {
      this.sortType  = 'contactNo';
    } else if(this.sortVendorEmail) {
      this.sortType = 'vendorEmail';
    } else {
      this.sortType = 'supplyAssets';
    }
    return this.sortType;
  }

  onVendorID(): void {
    this.sortVendorID = true;
    this.sortVendorName = false;
    this.sortVendorAddress = false;
    this.sortContactNo = false;
    this.sortVendorEmail = false;
    this.sortSupplyAssets = false;

    this.selectSortDirection();
  }

  onVendorName(): void {
    this.sortVendorID = false;
    this.sortVendorName = true;
    this.sortVendorAddress = false;
    this.sortContactNo = false;
    this.sortVendorEmail = false;
    this.sortSupplyAssets = false;

    this.selectSortDirection();
  }

  onVendorAddress(): void {
    this.sortVendorID = false;
    this.sortVendorName = false;
    this.sortVendorAddress = true;
    this.sortContactNo = false;
    this.sortVendorEmail = false;
    this.sortSupplyAssets = false;

    this.selectSortDirection();
  }

  onContactNo(): void {
    this.sortVendorID = false;
    this.sortVendorName = false;
    this.sortVendorAddress = false;
    this.sortContactNo = true;
    this.sortVendorEmail = false;
    this.sortSupplyAssets = false;

    this.selectSortDirection();
  }

  onVendorEmail(): void {
    this.sortVendorID = false;
    this.sortVendorName = false;
    this.sortVendorAddress = false;
    this.sortContactNo = false;
    this.sortVendorEmail = true;
    this.sortSupplyAssets = false;

    this.selectSortDirection();
  }

  onSupplyAssets(): void {
    this.sortVendorID = false;
    this.sortVendorName = false;
    this.sortVendorAddress = false;
    this.sortContactNo = false;
    this.sortVendorEmail = false;
    this.sortSupplyAssets = true;

    this.selectSortDirection();
  }



  //Boolean result of weather search bar is shown or not...
  canShowSearchAsOverlay: boolean = false;

  //Boolean result to visible a class or not...
  class_visibility: boolean = false;

  //decide weather search bar is shown or not using inner width...
  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.class_visibility = false;
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
      this.class_visibility = true;
    }

  }


  //Decide the class should be visi
  search_hidden(): string {
    let styleClass = '';
    if (!this.class_visibility) {
      styleClass = 'class-visible';
    }
    else {
      styleClass = 'class-hidden';
    }

    return styleClass;
  }

  search_visible(): string {
    let styleClass = '';
    if (this.class_visibility) {
      styleClass = 'class-visible';
    }
    else {
      styleClass = 'class-hidden';
    }

    return styleClass;
  }



  title = 'ngx-paging-sample';
  id = "second";



  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  tableSize: number[] = [5, 10, 15, 20];
  pagingConfig: PagingConfig = {} as PagingConfig;



  

  onTableDataChange(event: any) {
    this.pagingConfig.currentPage = event;
    this.vendorServ.getVendors();
  }

  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.vendorServ.getVendors();
  }




}
