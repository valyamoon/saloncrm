import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoundtextComponent } from './pagenotfoundtext.component';

describe('PagenotfoundtextComponent', () => {
  let component: PagenotfoundtextComponent;
  let fixture: ComponentFixture<PagenotfoundtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotfoundtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfoundtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
