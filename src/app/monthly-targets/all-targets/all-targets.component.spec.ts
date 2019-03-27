import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTargetsComponent } from './all-targets.component';

describe('AllTargetsComponent', () => {
  let component: AllTargetsComponent;
  let fixture: ComponentFixture<AllTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
