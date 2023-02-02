import { NgModule } from '@angular/core';
import { StoreCounterComponent } from './store-counter.component';
import { ReducerManager, StoreModule } from '@ngrx/store';
import { counterReducer } from './store-counter.reducer';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    StoreCounterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature("counter",{ count:counterReducer})
  ],
  providers:[ReducerManager],
  exports: [
    StoreCounterComponent
  ]
})
export class StoreCounterModule { }
