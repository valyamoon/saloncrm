import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageplanComponent } from './manageplan.component';

describe('ManageplanComponent', () => {
  let component: ManageplanComponent;
  let fixture: ComponentFixture<ManageplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
