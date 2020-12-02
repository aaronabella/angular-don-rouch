import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JewelryListComponent } from "./jewelry-list/JewelryListComponent";
import { FormsModule } from '@angular/forms';
import { JewelryContactComponent } from './jewelry-contact/jewelry-contact.component';
import { CartComponent } from "./cart/cart.component";
import { RouchJoyasComponent } from './rouch-joyas/rouch-joyas.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    JewelryListComponent,
    JewelryContactComponent,
    CartComponent,
    RouchJoyasComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
