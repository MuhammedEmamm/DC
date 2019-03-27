import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionErrorsComponent } from './submission-errors.component';

describe('SubmissionErrorsComponent', () => {
  let component: SubmissionErrorsComponent;
  let fixture: ComponentFixture<SubmissionErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show anything is the errors object is empty or null', () => {
    const errors = null;
    const compiled = fixture.debugElement.nativeElement;

    component.errors = errors;
    fixture.detectChanges();
    const sectionElem = compiled.querySelector('.submission-errors');
    expect(sectionElem).toBeNull();
  });

  it('should display list of errors when they are provided', () => {
    const errors = {email: 'The provided email is not valid', phone: 'The provided phone is not valid'};
    const compiled = fixture.debugElement.nativeElement;

    component.errors = errors;
    fixture.detectChanges();
    const listElems = compiled.querySelectorAll('.submission-errors__list li');
    expect(listElems.length).toEqual(2);
    expect(listElems[0].textContent).toEqual('The provided email is not valid');
    expect(listElems[1].textContent).toEqual('The provided phone is not valid');
  });
});
