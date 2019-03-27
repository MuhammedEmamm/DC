import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiCollectionReportComponent } from './kpi-collection-report.component';

describe('KpiCollectionReportComponent', () => {
  let component: KpiCollectionReportComponent;
  let fixture: ComponentFixture<KpiCollectionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiCollectionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiCollectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
