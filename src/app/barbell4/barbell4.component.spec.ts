import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barbell4Component } from './barbell4.component';

describe('Barbell4Component', () => {
  let component: Barbell4Component;
  let fixture: ComponentFixture<Barbell4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Barbell4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Barbell4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
