import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataReportsComponent } from './customer-data-reports.component';

describe('CustomerDataReportsComponent', () => {
  let component: CustomerDataReportsComponent;
  let fixture: ComponentFixture<CustomerDataReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDataReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDataReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
