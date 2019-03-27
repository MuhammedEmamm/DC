import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTargetsComponent } from './employees-targets.component';

describe('EmployeesTargetsComponent', () => {
  let component: EmployeesTargetsComponent;
  let fixture: ComponentFixture<EmployeesTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
