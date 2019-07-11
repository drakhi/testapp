import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { DatalistComponent } from './datalist/datalist.component';
import { ReactiveformsampleComponent } from './reactiveformsample/reactiveformsample.component';
import { HeaderComponent } from './header/header.component';
import{ReactiveFormsModule} from '@angular/forms';
import { ReactiveformvalidComponent } from './reactiveformvalid/reactiveformvalid.component';
import { ReactiveformgetsetComponent } from './reactiveformgetset/reactiveformgetset.component';
import { ReactiveforminnerComponent } from './reactiveforminner/reactiveforminner.component';
import{ShareddataserviceService} from './shareddataservice.service'

@NgModule({
  declarations: [
    AppComponent,
    DatalistComponent,
    ReactiveformsampleComponent,
    HeaderComponent,
    ReactiveformvalidComponent,
    ReactiveformgetsetComponent,
    ReactiveforminnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
   // BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  providers: [ShareddataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
