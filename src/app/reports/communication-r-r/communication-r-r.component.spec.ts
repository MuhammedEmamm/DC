import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationRRComponent } from './communication-r-r.component';

describe('CommunicationRRComponent', () => {
  let component: CommunicationRRComponent;
  let fixture: ComponentFixture<CommunicationRRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationRRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationRRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
