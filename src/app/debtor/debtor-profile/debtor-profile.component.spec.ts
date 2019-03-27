import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorProfileComponent } from './debtor-profile.component';

describe('DebtorProfileComponent', () => {
  let component: DebtorProfileComponent;
  let fixture: ComponentFixture<DebtorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
