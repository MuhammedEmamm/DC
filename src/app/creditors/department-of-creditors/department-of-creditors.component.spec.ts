import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentOfCreditorsComponent } from './department-of-creditors.component';

describe('DepartmentOfCreditorsComponent', () => {
  let component: DepartmentOfCreditorsComponent;
  let fixture: ComponentFixture<DepartmentOfCreditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentOfCreditorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentOfCreditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
