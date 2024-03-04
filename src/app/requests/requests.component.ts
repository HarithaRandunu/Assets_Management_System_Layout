import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PagingConfig } from '../modules/paging-config-model';
import { Requests } from '../modules/requests';
import { RequestsService } from '../Services/requests/requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss'
})
export class RequestsComponent implements PagingConfig, OnInit {

  //Requests data...
  requests: Requests[] = [];


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
  sortDirection: string = 'asc';
  sortType: string = 'requestID';


  //Sorting variables...
  sortRequestID: boolean = true;
  sortEmployeeID: boolean = false;
  sortEmployeeName: boolean = false;
  sortRequestDate: boolean = false;
  sortRequestTitle: boolean = false;
  sortRequestDescription: boolean = false;
  sortRequestChecked: boolean = false;


  //Selecting the sort direction...
  selectSortDirection(): void {
    if(this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asc';
    }
  }


  //Selecting the sort type...
  selectSortType(): string {
    if(this.sortRequestID) {
      this.sortType = 'requestID';
    } else if(this.sortRequestDate) {
      this.sortType = 'requestDate';
    } else if(this.sortRequestTitle) {
      this.sortType = 'requestTitle';
    } else if(this.sortRequestDescription) {
      this.sortType = 'requestDescription';
    } else if(this.sortRequestChecked) {
      this.sortType = 'requestChecked';
    }
    
    return this.sortType;
  }


  //Sorting icons...
  angleDirection_col01(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortRequestID) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col02(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortEmployeeID) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col03(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortEmployeeName) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col04(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortRequestDate) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col05(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortRequestTitle) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col06(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortRequestDescription) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col07(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortRequestChecked) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }


  //Sorting functions...
  onRequestID(): void {
    this.sortRequestID = true;
    this.sortEmployeeID = false;
    this.sortEmployeeName = false;
    this.sortRequestDate = false;
    this.sortRequestTitle = false;
    this.sortRequestDescription = false;
    this.sortRequestChecked = false;

    this.selectSortDirection();
  }

  onEmployeeID(): void {
    this.sortRequestID = false;
    this.sortEmployeeID = true;
    this.sortEmployeeName = false;
    this.sortRequestDate = false;
    this.sortRequestTitle = false;
    this.sortRequestDescription = false;
    this.sortRequestChecked = false;

    this.selectSortDirection();
  }

  onEmployeeName(): void {
    this.sortRequestID = false;
    this.sortEmployeeID = false;
    this.sortEmployeeName = true;
    this.sortRequestDate = false;
    this.sortRequestTitle = false;
    this.sortRequestDescription = false;
    this.sortRequestChecked = false;

    this.selectSortDirection();
  }

  onRequestDate(): void {
    this.sortRequestID = false;
    this.sortEmployeeID = false;
    this.sortEmployeeName = false;
    this.sortRequestDate = true;
    this.sortRequestTitle = false;
    this.sortRequestDescription = false;
    this.sortRequestChecked = false;

    this.selectSortDirection();
  }

  onRequestTitle(): void {
    this.sortRequestID = false;
    this.sortEmployeeID = false;
    this.sortEmployeeName = false;
    this.sortRequestDate = false;
    this.sortRequestTitle = true;
    this.sortRequestDescription = false;
    this.sortRequestChecked = false;

    this.selectSortDirection();
  }

  onRequestDescription(): void {
    this.sortRequestID = false;
    this.sortEmployeeID = false;
    this.sortEmployeeName = false;
    this.sortRequestDate = false;
    this.sortRequestTitle = false;
    this.sortRequestDescription = true;
    this.sortRequestChecked = false;

    this.selectSortDirection();
  }

  onRequestChecked(): void {
    this.sortRequestID = false;
    this.sortEmployeeID = false;
    this.sortEmployeeName = false;
    this.sortRequestDate = false;
    this.sortRequestTitle = false;
    this.sortRequestDescription = false;
    this.sortRequestChecked = true;

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
