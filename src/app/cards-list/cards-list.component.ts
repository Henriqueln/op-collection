import { Component, DestroyRef, effect, inject, input } from '@angular/core';
import { CardViewTableComponent } from '../card-view-table/card-view-table.component';
import { Card } from '../entities/card';
import { ApiService } from '../api.service';
import { SETS } from 'src/enums/sets';
import { FiltersService } from '../filters.service';
import { takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CreateCardComponent } from '../create-card/create-card.component';

@Component({
  selector: 'app-cards-list',
  imports: [CardViewTableComponent, CreateCardComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
})
export class CardsListComponent {
  selectedSet = SETS.OP01;
  cardCreation = false;
  selectedColor = '';
  filteredCards: Card[] = [];
  playsetsSelected = false;
  allCards: Card[] = [];
  selectedCard: Card | undefined;
  destroyRef = inject(DestroyRef);
  private apiService = inject(ApiService);
  private filtersService = inject(FiltersService);

  ngOnInit() {
    this.filtersService.selectedSet$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((set) => {
        this.selectedSet = set;
        this.updateView();
      });
    this.filtersService.selectedColor$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((color) => {
        this.selectedColor = color;
        this.updateView();
      });
  }

  selectCard(card: Card) {
    this.selectedCard = card;
  }

  updateView() {
    this.playsetsSelected = false;
    this.apiService.getCards().subscribe((result) => {
      this.allCards = result;
      this.allCards = this.allCards
        .map((card) => {
          card.leo = false;
          card.increment = 1;
          card.extra = card.quantity - card.playset;
          if (card.priceHistory?.length === 0) card.priceHistory = [0];
          if (card.extra < 0) card.extra = 0;
          return card;
        })
        .sort((a, b) => {
          if (a.code < b.code) return -1;
          if (a.code > b.code) return 1;
          return 0;
        });
      if (this.selectedSet === SETS.PLAYSETS) {
        this.playsetsSelected = true;
        this.filteredCards = this.allCards.filter(
          (c) =>
            c.quantity < c.playset && c.rarity !== 'ALT' && c.set !== SETS.DON,
        );
        this.filteredCards = this.filteredCards.map((c) => {
          if (c.playset == 5 || c.playset == 2) {
            c.playset = c.playset - 1;
          }
          return c;
        });
      } else {
        // if (!this.showAll) {
        //   this.filteredCards = this.allCards.filter(
        //     (c) => c.set === this.selectedSet,
        //   );
        // } else {
        //   this.filteredCards = this.allCards;
        // }
      }
      if(this.selectedSet){
        this.filteredCards = this.allCards.filter((c: any) => c.set === this.selectedSet);
      }
      if (this.selectedColor) {
        this.filteredCards = this.filteredCards.filter(
          (c) =>
            c.color === this.selectedColor || c.color2 === this.selectedColor,
        );
      }
      // if (this.sourceFilter) {
      //   this.filteredCards = this.filteredCards.filter(
      //     (c) => c.source === this.sourceFilter,
      //   );
      // }
      // if (this.notOwned) {
      //   this.filteredCards = this.filteredCards.filter((c) => c.quantity === 0);
      // }
      // this.updateStatistics();
      console.log('filtered cards', this.filteredCards)
    });
  }
}
