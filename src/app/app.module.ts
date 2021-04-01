import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { BackendService } from './backend.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
   // MatIcon
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
