import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorsComponent } from './vendors/vendors.component';
import { DisposalsComponent } from './disposals/disposals.component';
import { RequestsComponent } from './requests/requests.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReportsComponent } from './reports/reports.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LogoComponent } from './logo/logo.component';
import { OptionsComponent } from './options/options.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { AssetsComponent } from './assets/assets.component';
import { EmployeesComponent } from './employees/employees.component';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AssetListComponent } from './Employee/Asset-List/asset-list/asset-list.component';
import { MyAssetsTableComponent } from './Tables/my-assets-table/my-assets-table.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    VendorsComponent,
    DisposalsComponent,
    RequestsComponent,
    NotificationsComponent,
    ReportsComponent,
    LogOutComponent,
    LogoComponent,
    OptionsComponent,
    ContractsComponent,
    DashboardComponent,
    ProfileSidebarComponent,
    HeaderComponent,
    AssetsComponent,
    EmployeesComponent,
    AssetCardComponent,
    AssetListComponent,
    MyAssetsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    OverlayModule,
    CdkMenuModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
