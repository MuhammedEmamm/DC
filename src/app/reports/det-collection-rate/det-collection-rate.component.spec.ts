import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetCollectionRateComponent } from './det-collection-rate.component';

describe('DetCollectionRateComponent', () => {
  let component: DetCollectionRateComponent;
  let fixture: ComponentFixture<DetCollectionRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetCollectionRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetCollectionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
