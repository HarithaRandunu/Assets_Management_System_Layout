import { Component, HostListener, Inject, Input, PLATFORM_ID } from '@angular/core';
import { AppComponent } from '../app.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent{

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
      this.checkInnerWidthForPosition(window.innerWidth);
    }

  }
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
      this.checkInnerWidthForPosition(window.innerWidth);
    }
  }
  
  canShowSearchAsOverlay: boolean = false;
  class_visibility: boolean = false;

  
  isH1_fixed_position: boolean = true;

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if(innerWidth < 845) {
      this.class_visibility = false;
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
      this.class_visibility = true;
    }

  }

  checkInnerWidthForPosition(innerWidth: number): void {
    if(innerWidth > 1700) {
      this.isH1_fixed_position = true;
    } else {
      this.isH1_fixed_position = false;
    }
  }

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

  

  getBodyClass(): string {

    let styleClass = '';
    if(this.collapsed && this.screenWidth > 700) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }

    return styleClass;
    
  }
}
