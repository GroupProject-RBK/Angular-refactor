import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCarouselBasicComponent } from './ngb-carousel-basic.component';

describe('NgbCarouselBasicComponent', () => {
  let component: NgbCarouselBasicComponent;
  let fixture: ComponentFixture<NgbCarouselBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbCarouselBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbCarouselBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
