import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreCounterModule } from 'store-counter';

import { AppComponent } from './app.component';
import { createAction, createReducer, on, ReducerManager, ReducerManagerDispatcher, StoreModule } from '@ngrx/store';
import { testReducer } from './app.reducer';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ test:testReducer }), // can be removed
    StoreCounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
