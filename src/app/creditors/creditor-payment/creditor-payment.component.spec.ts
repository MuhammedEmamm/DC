import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorPaymentComponent } from './creditor-payment.component';

describe('CreditorPaymentComponent', () => {
  let component: CreditorPaymentComponent;
  let fixture: ComponentFixture<CreditorPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
