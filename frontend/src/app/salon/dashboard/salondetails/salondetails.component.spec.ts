import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalondetailsComponent } from './salondetails.component';

describe('SalondetailsComponent', () => {
  let component: SalondetailsComponent;
  let fixture: ComponentFixture<SalondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
