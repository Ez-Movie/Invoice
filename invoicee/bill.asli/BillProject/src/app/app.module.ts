import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecificationComponent } from './specification/specification.component';
import { ProductsComponent } from './products/products.component';
import { SignitureComponent } from './signiture/signiture.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    SpecificationComponent,
    ProductsComponent,
    SignitureComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
