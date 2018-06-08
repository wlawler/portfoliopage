import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybioComponent } from './mybio.component';

describe('MybioComponent', () => {
  let component: MybioComponent;
  let fixture: ComponentFixture<MybioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
