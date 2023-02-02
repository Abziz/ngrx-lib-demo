import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { operate } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store-app';
  test$: Observable<number>;
  constructor(private store:Store<{test:number}>){
    this.test$ = store.select(x=>x.test);
  }

  operate(){
    this.store.dispatch(operate());
  }
}
