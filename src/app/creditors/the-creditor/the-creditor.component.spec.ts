import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCreditorComponent } from './the-creditor.component';

describe('TheCreditorComponent', () => {
  let component: TheCreditorComponent;
  let fixture: ComponentFixture<TheCreditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCreditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCreditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
