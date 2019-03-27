import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceReportComponent } from './performance-report.component';

describe('PerformanceReportComponent', () => {
  let component: PerformanceReportComponent;
  let fixture: ComponentFixture<PerformanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
