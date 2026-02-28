import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewTableComponent } from './card-view-table.component';

describe('CardViewTableComponent', () => {
  let component: CardViewTableComponent;
  let fixture: ComponentFixture<CardViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardViewTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
