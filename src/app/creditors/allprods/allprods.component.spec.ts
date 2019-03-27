import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprodsComponent } from './allprods.component';

describe('AllprodsComponent', () => {
  let component: AllprodsComponent;
  let fixture: ComponentFixture<AllprodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllprodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllprodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
