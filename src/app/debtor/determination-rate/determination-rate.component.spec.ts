import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminationRateComponent } from './determination-rate.component';

describe('DeterminationRateComponent', () => {
  let component: DeterminationRateComponent;
  let fixture: ComponentFixture<DeterminationRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeterminationRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeterminationRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
