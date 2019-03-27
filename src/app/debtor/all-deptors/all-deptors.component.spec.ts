import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeptorsComponent } from './all-deptors.component';

describe('AllDeptorsComponent', () => {
  let component: AllDeptorsComponent;
  let fixture: ComponentFixture<AllDeptorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDeptorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDeptorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
