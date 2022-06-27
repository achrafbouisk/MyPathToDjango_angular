import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { CardsComponent } from './components/cards/cards.component';
import { Chart1Component } from './components/chart1/chart1.component';
import { LastProjectsComponent } from './components/last-projects/last-projects.component';
import $ from "jquery";

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, SidebarComponent, MainComponent, CardsComponent, Chart1Component, LastProjectsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
