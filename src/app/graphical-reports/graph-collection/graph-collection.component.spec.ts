import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCollectionComponent } from './graph-collection.component';

describe('GraphCollectionComponent', () => {
  let component: GraphCollectionComponent;
  let fixture: ComponentFixture<GraphCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
