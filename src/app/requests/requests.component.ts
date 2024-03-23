import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PagingConfig } from '../../modules/paging-config-model';
import { Requests } from '../../modules/requests';
import { RequestsService } from '../../Services/requests/requests.service';
import { sortOptions } from './request-tHead-data';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss'
})
export class RequestsComponent implements PagingConfig, OnInit {

  //Requests data...
  requests: Requests[] = [];
  sortData = sortOptions;


  //For search data
  searchText = '';


  //Paging Configurations...
  constructor(private requestServ: RequestsService, @Inject(PLATFORM_ID) private platformId: object) {
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
    this.requestServ.getRequests().subscribe((response) => {
      this.requests = response;
    })

    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }
  }


  //Sorting Configurations...
  sortDirection: string = 'asc';    //asc or desc
  sortType: string = 'requestID';   //sort field

  //Change the icon of the sort direction for each table head...
  getNgClass(property: string): string {

    //Find the sort option for the property...
    const sortOption = this.sortData.find(opt => opt.label === property) || this.sortData[0];
    //Return the icon based on the sort order...
    return sortOption.sortOrder === 'asc' ? 'fa-angle-up' : 'fa-angle-down';
  }

  //Get the sort direction for each table head...
  getClickFunction(property: string): void {

    //Find the sort option for the property...
    const sortOption = this.sortData.find(opt => opt.label === property) || this.sortData[0];
    //Sort the data based on the sort option...
    this.onSort(sortOption);
  }

  //Sort the data based on the sort field and sort order...
  onSort(sortOption: { label: string, sortField: string, sortOrder: string }): void {

    //Change the sort order based on the current sort order...
    if (sortOption.sortOrder === 'asc') {
      sortOption.sortOrder = 'desc';
      this.sortDirection = 'desc';
    } else {
      sortOption.sortOrder = 'asc';
      this.sortDirection = 'asc';
    }

    //Change the sort field based on the current sort field...
    this.sortType = sortOption.sortField;

    //Change the sort order for the other sort options...
    this.sortData.forEach(opt => {
      if (opt !== sortOption) {
        opt.sortOrder = 'asc';
      }
    })
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


  //Decide weather search bar is shown or not...
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


  //Paging Configurations...
  title = 'ngx-paging-sample';
  id = "second";
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  tableSize: number[] = [5, 10, 15, 20];
  pagingConfig: PagingConfig = {} as PagingConfig;


  //Paging functions...
  onTableDataChange(event: any) {
    this.pagingConfig.currentPage = event;
    this.requestServ.getRequests();
  }

  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.requestServ.getRequests();
  }

}
