import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiCallsReportComponent } from './kpi-calls-report.component';

describe('KpiCallsReportComponent', () => {
  let component: KpiCallsReportComponent;
  let fixture: ComponentFixture<KpiCallsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiCallsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiCallsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
