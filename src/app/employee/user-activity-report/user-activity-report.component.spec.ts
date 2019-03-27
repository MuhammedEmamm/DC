import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityReportComponent } from './user-activity-report.component';

describe('UserActivityReportComponent', () => {
  let component: UserActivityReportComponent;
  let fixture: ComponentFixture<UserActivityReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserActivityReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActivityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
