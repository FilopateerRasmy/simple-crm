import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialComponentsModule } from './shared/angular-material-components/angular-material-components.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SideComponent } from './core/sidenav/sidenav.component';
import {  HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialComponentsModule,
    NavbarComponent,
    SideComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
