import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancrReportDetailsComponent } from './performancr-report-details.component';

describe('PerformancrReportDetailsComponent', () => {
  let component: PerformancrReportDetailsComponent;
  let fixture: ComponentFixture<PerformancrReportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformancrReportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformancrReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
