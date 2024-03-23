import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Contracts } from '../../modules/contracts';
import { PagingConfig } from '../../modules/paging-config-model';
import { isPlatformBrowser } from '@angular/common';
import { response } from 'express';
import { ContractsService } from '../../Services/contracts/contracts.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrl: './contracts.component.scss'
})
export class ContractsComponent implements PagingConfig, OnInit {

  contracts: Contracts[] = [];

  constructor(public contractServ:ContractsService, @Inject(PLATFORM_ID) private platformId: object){
    this.pagingConfig = {
      id: this.id,
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems,
      
    };
  }
  searchText: any;

  //USed to get inner width of the browser....
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }
  }
  

  //Apply the inner width to the component...
  ngOnInit(): void {
    this.contractServ.getContracts().subscribe((response) => {
      this.contracts = response;
    });
    
    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }
  }

  sortDirection: string = 'asc';
  sortType: string = 'contractID';

  sortContactID: boolean = true;
  sortAssignedDate: boolean = false;
  sortTitle: boolean = false;
  sortDescription: boolean = false;

  angleDirection_col01(): string {
    let styleClass = '';
    if(this.sortDirection === 'asc' && this.sortContactID) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col02(): string {
    let styleClass = '';
    if(this.sortDirection === 'asc' && this.sortAssignedDate) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col03(): string {
    let styleClass = '';
    if(this.sortDirection === 'asc' && this.sortTitle) {
      styleClass = 'fa-angle-up';
    } else {
      styleClass = 'fa-angle-down';
    }
    return styleClass;
  }

  angleDirection_col04(): string {
    let styleClass = '';
    if(this.sortDirection === 'asc' && this.sortDescription) {
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
    if(this.sortContactID) {
      this.sortType = 'contractID';
    } else if (this.sortAssignedDate) {
      this.sortType = 'assignedDate';
    } else if (this.sortTitle) {
      this.sortType = 'title';
    } else {
      this.sortType = 'description';
    }
    return this.sortType;
  }

  onContactID(): void {
    this.sortContactID = true;
    this.sortAssignedDate = false;
    this.sortTitle = false;
    this.sortDescription = false;

    this.selectSortDirection();
  }

  onAssignedDate(): void {
    this.sortContactID = false;
    this.sortAssignedDate = true;
    this.sortTitle = false;
    this.sortDescription = false;

    this.selectSortDirection();
  }

  onTitle(): void {
    this.sortContactID = false;
    this.sortAssignedDate = false;
    this.sortTitle = true;
    this.sortDescription = false;

    this.selectSortDirection();
    this.selectSortType();
  }

  onDescription(): void {
    this.sortContactID = false;
    this.sortAssignedDate = false;
    this.sortTitle = false;
    this.sortDescription = true;

    this.selectSortDirection();
    this.selectSortType();
  }
  
  //Boolean result of weather search bar is shown or not...
  canShowSearchAsOverlay: boolean = false;

  //Boolean result to visible a class or not...
  class_visibility: boolean = false;

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


  //Decide the class should be visible or changed...
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

  title = 'ngx-paging-sample';
  id = "second";
  currentPage:number  = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  tableSize: number[] = [5, 10, 15, 20];
  pagingConfig: PagingConfig = {} as PagingConfig;

  

  // getContracts(){
  //   this.contractList = this.contractServ.contractList;
  //   this.pagingConfig.totalItems = this.contractList.length;
  // }

  onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
    this.contractServ.getContracts();
  }

  onTableSizeChange(event:any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.contractServ.getContracts();
  }

}
