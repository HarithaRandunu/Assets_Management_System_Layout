import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Reports } from '../modules/reports';
import { ReportsService } from '../Services/reports/reports.service';
import { isPlatformBrowser } from '@angular/common';
import { PagingConfig } from '../modules/paging-config-model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {

  //Requests data...
  reports: Reports[] = [];


  //For search data
  searchText = '';


  //Paging Configurations...
  constructor(private reportServ: ReportsService, @Inject(PLATFORM_ID) private platformId: object) {
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
    this.reportServ.getReports().subscribe((response) => {
      this.reports = response;
    })

    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }
  }


  //Sorting Configurations...
  sortDirection: string = 'asc';
  sortType: string = 'requestID';


  //Sorting variables...
  sortReportID: boolean = true;
  sortReportDate: boolean = false;
  sortReportTitle: boolean = false;
  sortReportDescription: boolean = false;
  sortReportChecked: boolean = false;


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
    if(this.sortReportID) {
      this.sortType = 'reportID';
    } else if(this.sortReportDate) {
      this.sortType = 'reportDate';
    } else if(this.sortReportTitle) {
      this.sortType = 'reportTitle';
    } else if(this.sortReportDescription) {
      this.sortType = 'reportDescription';
    } else {
      this.sortType = 'reportChecked';
    }
    
    return this.sortType;
  }


  //Sorting icons...
  angleDirection_col01(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortReportID) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col02(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortReportDate) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col03(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortReportTitle) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col04(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortReportDescription) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col05(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortReportChecked) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }


  //Sorting functions...
  onReportID(): void {
    this.sortReportID = true;
    this.sortReportDate = false;
    this.sortReportTitle = false;
    this.sortReportDescription = false;
    this.sortReportChecked = false;

    this.selectSortDirection();
  }

  onReportDate(): void {
    this.sortReportID = false;
    this.sortReportDate = true;
    this.sortReportTitle = false;
    this.sortReportDescription = false;
    this.sortReportChecked = false;

    this.selectSortDirection();
  }

  onReportTitle(): void {
    this.sortReportID = false;
    this.sortReportDate = false;
    this.sortReportTitle = true;
    this.sortReportDescription = false;
    this.sortReportChecked = false;

    this.selectSortDirection();
  }

  onReportDescription(): void {
    this.sortReportID = false;
    this.sortReportDate = false;
    this.sortReportTitle = false;
    this.sortReportDescription = true;
    this.sortReportChecked = false;

    this.selectSortDirection();
  }

  onReportChecked(): void {
    this.sortReportID = false;
    this.sortReportDate = false;
    this.sortReportTitle = false;
    this.sortReportDescription = false;
    this.sortReportChecked = true;

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
    this.reportServ.getReports();
  }

  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.reportServ.getReports();
  }

}
