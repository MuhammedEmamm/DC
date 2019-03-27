import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeglectedaccountComponent } from './neglectedaccount.component';

describe('NeglectedaccountComponent', () => {
  let component: NeglectedaccountComponent;
  let fixture: ComponentFixture<NeglectedaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeglectedaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeglectedaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
