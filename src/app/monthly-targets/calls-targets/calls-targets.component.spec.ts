import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsTargetsComponent } from './calls-targets.component';

describe('CallsTargetsComponent', () => {
  let component: CallsTargetsComponent;
  let fixture: ComponentFixture<CallsTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
