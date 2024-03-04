import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: object){ }

  //USed to get inner width of the browser....
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkInnerWidthForPosition(window.innerWidth);
    }

  }
  

  //Apply the inner width to the component...
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkInnerWidthForPosition(window.innerWidth);
    }
  }

  //Boolean result to be fixed position or not....
  isH1_fixed_position: boolean = true;

  //check weather class should be in fixed position or not...
  checkInnerWidthForPosition(innerWidth: number): void {
    if(innerWidth > 1750) {
      this.isH1_fixed_position = true;
    } else {
      this.isH1_fixed_position = false;
    }
  }

  //change the position of a class fixed or not..
  changePosition(): string {
    let styleClass = '';
    if(this.isH1_fixed_position) {
      styleClass = 'fixed-position';
    }
    else {
      styleClass = '';
    }

    return styleClass;
  }

  componentAlignment(): string {
    let styleClass = '';
    if(this.isH1_fixed_position) {
      styleClass = 'assets-list';
    }
    else {
      styleClass = '';
    }
    return styleClass;
  }
}
