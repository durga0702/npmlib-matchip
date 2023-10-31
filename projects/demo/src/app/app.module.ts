import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NpmlibMatchipModule } from 'npmlib-matchip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NpmlibMatchipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
