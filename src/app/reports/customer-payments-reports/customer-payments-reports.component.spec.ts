import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentsReportsComponent } from './customer-payments-reports.component';

describe('CustomerPaymentsReportsComponent', () => {
  let component: CustomerPaymentsReportsComponent;
  let fixture: ComponentFixture<CustomerPaymentsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPaymentsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPaymentsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
