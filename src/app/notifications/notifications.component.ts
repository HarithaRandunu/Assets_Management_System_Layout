import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PagingConfig } from '../modules/paging-config-model';
import { Notifications } from '../modules/notifications';
import { NotificationsService } from '../Services/notifications/notifications.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements PagingConfig, OnInit {

  //Requests data...
  notifications: Notifications[] = [];


  //For search data
  searchText = '';


  //Paging Configurations...
  constructor(private notificationServ: NotificationsService, @Inject(PLATFORM_ID) private platformId: object) {
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
    this.notificationServ.getNotifications().subscribe((response) => {
      this.notifications = response;
    })

    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }
  }


  //Sorting Configurations...
  sortDirection: string = 'asc';
  sortType: string = 'notificationID';


  //Sorting variables...
  sortNotificationID: boolean = true;
  sortNotificationDate: boolean = false;
  sortNotificationTitle: boolean = false;
  sortNotificationDescription: boolean = false;
  sortNotificationChecked: boolean = false;


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
    if(this.sortNotificationID) {
      this.sortType = 'notificationID';
    } else if(this.sortNotificationDate) {
      this.sortType = 'notificationDate';
    } else if(this.sortNotificationTitle) {
      this.sortType = 'notificationTitle';
    } else if(this.sortNotificationDescription) {
      this.sortType = 'notificationDescription';
    } else {
      this.sortType = 'notificationChecked';
    }
    
    return this.sortType;
  }


  //Sorting icons...
  angleDirection_col01(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortNotificationID) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col02(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortNotificationDescription) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col03(): string {
    let styleClass = '';
    if (this.sortDirection === 'asc' && this.sortNotificationChecked) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  //Sorting functions...
  onNotificationID(): void {
    this.sortNotificationID = true;
    this.sortNotificationDate = false;
    this.sortNotificationTitle = false;
    this.sortNotificationDescription = false;
    this.sortNotificationChecked = false;

    this.selectSortDirection();
  }

  onNotificationDate(): void {
    this.sortNotificationID = false;
    this.sortNotificationDate = true;
    this.sortNotificationTitle = false;
    this.sortNotificationDescription = false;
    this.sortNotificationChecked = false;

    this.selectSortDirection();
  }

  onNotificationTitle(): void {
    this.sortNotificationID = false;
    this.sortNotificationDate = false;
    this.sortNotificationTitle = true;
    this.sortNotificationDescription = false;
    this.sortNotificationChecked = false;

    this.selectSortDirection();
  }

  onNotificationDescription(): void {
    this.sortNotificationID = false;
    this.sortNotificationDate = false;
    this.sortNotificationTitle = false;
    this.sortNotificationDescription = true;
    this.sortNotificationChecked = false;

    this.selectSortDirection();
  }

  onNotificationChecked(): void {
    this.sortNotificationID = false;
    this.sortNotificationDate = false;
    this.sortNotificationTitle = false;
    this.sortNotificationDescription = false;
    this.sortNotificationChecked = true;

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
    this.notificationServ.getNotifications();
  }

  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.notificationServ.getNotifications();
  }

}
