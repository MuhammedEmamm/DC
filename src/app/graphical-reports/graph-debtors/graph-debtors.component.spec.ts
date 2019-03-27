import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDebtorsComponent } from './graph-debtors.component';

describe('GraphDebtorsComponent', () => {
  let component: GraphDebtorsComponent;
  let fixture: ComponentFixture<GraphDebtorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDebtorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDebtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
