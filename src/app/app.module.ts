import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './components/page-not-found-component/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

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
    ...ANGULAR_MODULES,
    NoopAnimationsModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
