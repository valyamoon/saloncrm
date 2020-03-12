import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSearcComponent } from './google-searc.component';

describe('GoogleSearcComponent', () => {
  let component: GoogleSearcComponent;
  let fixture: ComponentFixture<GoogleSearcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSearcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSearcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
