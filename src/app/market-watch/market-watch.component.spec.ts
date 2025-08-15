/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarketWatchComponent } from './market-watch.component';

describe('MarketWatchComponent', () => {
  let component: MarketWatchComponent;
  let fixture: ComponentFixture<MarketWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
