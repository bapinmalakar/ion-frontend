import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"; 
import { HttpClientModule } from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-page/home-page.component';
import { CommonStorageService } from './services/commond_storage.service';
import { FileSelectDirective } from 'ng2-file-upload';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { HighchartComponent } from './highchart/highchart.component';
import { HttpService } from './services/http.service';
import { AllThermoViewComponent } from './all-thermo-view/all-thermo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileSelectDirective,
    ViewDetailsComponent,
    HighchartComponent,
    AllThermoViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [CommonStorageService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
