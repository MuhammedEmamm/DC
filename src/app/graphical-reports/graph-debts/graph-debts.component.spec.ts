import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDebtsComponent } from './graph-debts.component';

describe('GraphDebtsComponent', () => {
  let component: GraphDebtsComponent;
  let fixture: ComponentFixture<GraphDebtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDebtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDebtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
