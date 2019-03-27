import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCollectionComponent } from './collection.component';

describe('CompanyCollectionComponent', () => {
  let component: CompanyCollectionComponent;
  let fixture: ComponentFixture<CompanyCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
