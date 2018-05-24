import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestTrackerComponent } from './nest-tracker.component';

describe('NestTrackerComponent', () => {
  let component: NestTrackerComponent;
  let fixture: ComponentFixture<NestTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
