import { style } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { notifications, userDetails } from './header-dummy-data';
import { MatMenuTrigger } from '@angular/material/menu';
import { CdkMenuTrigger } from '@angular/cdk/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  class_visibility = false;
  overlayClose: boolean = true;

  notifications = notifications;
  // userItems = userItems;
  userDetails = userDetails;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }
  }

  checkCanShowSearchAsOverlay(innerWidth: number): string {
    let styleClass = '';
    if(innerWidth < 845) {
      this.class_visibility = false;
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
      this.class_visibility = true;
    }

    return styleClass;
  }

  getHeadClass(): string {
    let styleClass= '';
    if(this.collapsed && this.screenWidth > 700) {
      styleClass = 'header-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'header-md-screen';
    }

    return styleClass;
  }

  getLogoClass(): string {
    let styleClass= '';
    if(this.collapsed) {
      styleClass = 'logo-image-hidden';
    }
    else {
      styleClass = 'logo-image-visible';
    }

    return styleClass;
  }

 logo_visible_content(): string {
    let styleClass = '';
    if(this.class_visibility) {
      styleClass = 'class-visible';
    }
    else {
      styleClass = 'class-hidden';
    }

    return styleClass
  }

  search_visible(): string {
    let styleClass = '';
    if(this.class_visibility) {
      styleClass = 'class-visible';
    }
    else {
      styleClass = 'class-hidden';
    }

    return styleClass;
  }

  search_hidden(): string {
    let styleClass = '';
    if(this.class_visibility) {
      styleClass = 'class-hidden';
    }
    else {
      styleClass = 'class-visible';
    }

    return styleClass;
  }

  overlayOpenResult(): void {
    this.overlayClose = false;
  }

  overlayCloseResult(): void {
    this.overlayClose = true;
  }

  overlayCloseFunction(): string {
    let styleClass = '';
    if(!this.overlayClose) {
      styleClass = 'overlay-logOut-fall';
    }
    else {
      styleClass = 'overlay-logOut-fallOpposite';
    }

    return styleClass

  }
  

}
