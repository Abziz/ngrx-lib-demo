import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCounterComponent } from './store-counter.component';

describe('StoreCounterComponent', () => {
  let component: StoreCounterComponent;
  let fixture: ComponentFixture<StoreCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
