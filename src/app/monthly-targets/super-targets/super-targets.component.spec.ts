import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTargetsComponent } from './super-targets.component';

describe('SuperTargetsComponent', () => {
  let component: SuperTargetsComponent;
  let fixture: ComponentFixture<SuperTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
