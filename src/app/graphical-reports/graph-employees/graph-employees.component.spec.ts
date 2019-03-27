import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphEmployeesComponent } from './graph-employees.component';

describe('GraphEmployeesComponent', () => {
  let component: GraphEmployeesComponent;
  let fixture: ComponentFixture<GraphEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
