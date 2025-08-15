/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlaysetsComponent } from './playsets.component';

describe('PlaysetsComponent', () => {
  let component: PlaysetsComponent;
  let fixture: ComponentFixture<PlaysetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaysetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaysetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
