import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationRRDComponent } from './communication-r-r-d.component';

describe('CommunicationRRDComponent', () => {
  let component: CommunicationRRDComponent;
  let fixture: ComponentFixture<CommunicationRRDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationRRDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationRRDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
