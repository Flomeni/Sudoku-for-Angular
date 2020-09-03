import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './components/page-not-found-component/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';

const DECLARATIONS = [
  AppComponent,
  PageNotFoundComponent
];

const ANGULAR_MODULES = [
  BrowserModule,
  AppRoutingModule
];

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    ...ANGULAR_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
