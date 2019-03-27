import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGraphsReportsComponent } from './all-graphs-reports.component';

describe('AllGraphsReportsComponent', () => {
  let component: AllGraphsReportsComponent;
  let fixture: ComponentFixture<AllGraphsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGraphsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGraphsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
