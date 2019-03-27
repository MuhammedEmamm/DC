import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptorCalllogComponent } from './deptor-calllog.component';

describe('DeptorCalllogComponent', () => {
  let component: DeptorCalllogComponent;
  let fixture: ComponentFixture<DeptorCalllogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptorCalllogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptorCalllogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
