import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCalllogComponent } from './emp-calllog.component';

describe('EmpCalllogComponent', () => {
  let component: EmpCalllogComponent;
  let fixture: ComponentFixture<EmpCalllogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCalllogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCalllogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
