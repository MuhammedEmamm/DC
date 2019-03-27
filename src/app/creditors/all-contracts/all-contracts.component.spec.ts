import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContractsComponent } from './all-contracts.component';

describe('AllContractsComponent', () => {
  let component: AllContractsComponent;
  let fixture: ComponentFixture<AllContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
