import { Component, OnInit } from '@angular/core';
import { createFeatureSelector, select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { decrement, increment, reset } from './store-counter.actions';

@Component({
  selector: 'lib-store-counter',
  templateUrl:'./store-counter.component.html',
  styles: [
  ]
})
export class StoreCounterComponent implements OnInit {
  public count$: Observable<number>;
  constructor(private store: Store) {
    console.log(store);
    this.count$ = store.select(createFeatureSelector<{count:number}>("counter")).pipe(select(x=>x.count));
   }

  ngOnInit(): void {
  }

  public increment() {
    this.store.dispatch(increment());
  }

  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(reset());
  }

}
