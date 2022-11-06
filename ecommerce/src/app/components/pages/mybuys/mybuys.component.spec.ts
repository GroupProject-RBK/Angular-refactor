import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybuysComponent } from './mybuys.component';

describe('MybuysComponent', () => {
  let component: MybuysComponent;
  let fixture: ComponentFixture<MybuysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybuysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybuysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
