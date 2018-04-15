import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiclinkComponent } from './piclink.component';

describe('PiclinkComponent', () => {
  let component: PiclinkComponent;
  let fixture: ComponentFixture<PiclinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiclinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiclinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
