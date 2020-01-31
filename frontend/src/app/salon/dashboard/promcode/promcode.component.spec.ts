import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromcodeComponent } from './promcode.component';

describe('PromcodeComponent', () => {
  let component: PromcodeComponent;
  let fixture: ComponentFixture<PromcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
