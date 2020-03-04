import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglesearchComponent } from './googlesearch.component';

describe('GooglesearchComponent', () => {
  let component: GooglesearchComponent;
  let fixture: ComponentFixture<GooglesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
