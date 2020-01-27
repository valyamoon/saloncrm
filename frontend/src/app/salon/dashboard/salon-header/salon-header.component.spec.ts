import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonHeaderComponent } from './salon-header.component';

describe('SalonHeaderComponent', () => {
  let component: SalonHeaderComponent;
  let fixture: ComponentFixture<SalonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
