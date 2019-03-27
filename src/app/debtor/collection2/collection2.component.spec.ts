import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorCollectionComponent } from './collection2.component';

describe('DebtorCollectionComponent', () => {
  let component: DebtorCollectionComponent;
  let fixture: ComponentFixture<DebtorCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtorCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtorCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
