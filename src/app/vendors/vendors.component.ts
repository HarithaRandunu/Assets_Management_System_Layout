
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Vendors } from '../../modules/vendors';
import { PagingConfig } from '../../modules/paging-config-model';
import { isPlatformBrowser } from '@angular/common';
import { VendorsService } from '../../Services/vendors/vendors.service';
import { sortOptions } from './vendor-tHead-data';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrl: './vendors.component.scss'
})

export class VendorsComponent implements PagingConfig, OnInit {

  vendors: Vendors[] = [];
  sortData = sortOptions;

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


  //Used to get inner width of the browser....
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
  

  //For sorting data...
  sortDirection: string = '';     //asc or desc
  sortType: string = 'reportID';  //sort field

  //Change the icon of the sort direction for each table head...
  getNgClass(property: string): string {

    //Get the sort option based on the property...
    const option = this.sortData.find(opt => opt.label === property) || this.sortData[0];
    //Return the icon based on the sort order...
    return option.sortOrder === 'asc' ? 'fa-angle-up' : 'fa-angle-down';
  }

  //Get the sort direction for each table head...
  getClickFunction(property: string): void {

    //Get the sort option based on the property...
    const option = this.sortData.find(opt => opt.label === property) || this.sortData[0];
    //Sort the data based on the sort option...
    this.onSort(option);
  }

  //Sort the data based on the sort field and sort order...
  onSort(option: {label: string, sortField: string, sortOrder: string}): void {

    //Change the sort order based on the current sort order...
    if(option.sortOrder === 'asc') {
      option.sortOrder = 'desc';
      this.sortDirection = 'desc';
    } else {
      option.sortOrder = 'asc';
      this.sortDirection = 'asc';
    }

    //Set the sort type to the sort field...
    this.sortType = option.sortField;

    //Change the sort order of the other options...
    this.sortData.forEach(opt => {
      if(opt !== option) {
        opt.sortOrder = 'asc';
      }
    });
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


  //Change the visibility of the search bar...
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

  //Decide the class should be hidden
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


  //Variables for pagination...
  title = 'ngx-paging-sample';
  id = "second";


  //Pagination variables...
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  tableSize: number[] = [5, 10, 15, 20];
  pagingConfig: PagingConfig = {} as PagingConfig;

  //For pagination...
  onTableDataChange(event: any) {
    this.pagingConfig.currentPage = event;
    this.vendorServ.getVendors();
  }

  //For changing the number of items per page...
  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.vendorServ.getVendors();
  }
}
