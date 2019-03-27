import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptorPaymentComponent } from './deptor-payment.component';

describe('DeptorPaymentComponent', () => {
  let component: DeptorPaymentComponent;
  let fixture: ComponentFixture<DeptorPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptorPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptorPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
