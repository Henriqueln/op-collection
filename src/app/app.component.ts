import { Component } from '@angular/core';
import { SETS } from 'src/enums/sets';
import { ApiService } from './api.service';
import { Card } from './entities/card';
import { COLOR } from 'src/enums/color';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  SETS = SETS;
  COLORS = COLOR;

  readonly colorButtons = [
    { label: 'Red', value: this.COLORS.RED, class: 'dark-red' },
    { label: 'Green', value: this.COLORS.GREEN, class: 'dark-green' },
    { label: 'Blue', value: this.COLORS.BLUE, class: 'dark-blue' },
    { label: 'Purple', value: this.COLORS.PURPLE, class: 'dark-purple' },
    { label: 'Black', value: this.COLORS.BLACK, class: 'dark-black' },
    { label: 'Yellow', value: this.COLORS.YELLOW, class: 'dark-yellow' },
  ];

  readonly actionButtons = [
    { label: 'Source', action: () => this.filterBySource() },
    { label: 'Remove Filters', action: () => this.removeFilters() },
    { label: 'Not Owned', action: () => this.showNotOwned() },
    { label: 'Market Watch', routerLink: 'market' },
    { label: 'Tournament Report', routerLink: 'tournaments' },
  ];
  selectedCard: Card | undefined;
  cardCreation = false;
  setsValue = Object.keys(SETS) as SETS[];
  selectedSet = SETS.OP01;

  //OLD CODE, TO REFACTOR

  allCards: Card[] = [];
  filteredCards: Card[] = [];

  source = '';
  totalCards = 0;
  haveCards = 0;
  completion = 0;
  colorFilter = '';
  sourceFilter = '';
  playsetsSelected = false;
  showAll = false;
  notOwned = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.updateView();
  }

  selectSet(set: SETS) {
    this.selectedSet = set;
    this.updateView();
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
        if (!this.showAll) {
          this.filteredCards = this.allCards.filter(
            (c) => c.set === this.selectedSet,
          );
        } else {
          this.filteredCards = this.allCards;
        }
      }
      if (this.colorFilter) {
        this.filteredCards = this.filteredCards.filter(
          (c) => c.color === this.colorFilter || c.color2 === this.colorFilter,
        );
      }
      if (this.sourceFilter) {
        this.filteredCards = this.filteredCards.filter(
          (c) => c.source === this.sourceFilter,
        );
      }
      if (this.notOwned) {
        this.filteredCards = this.filteredCards.filter((c) => c.quantity === 0);
      }
      this.updateStatistics();
    });
  }

  showNotOwned() {
    this.notOwned = true;
    this.updateView();
  }

  filterColor(color: string) {
    this.colorFilter = color;
    this.updateView();
  }

  filterBySource() {
    this.sourceFilter = this.source;
    this.updateView();
  }

  removeFilters() {
    this.colorFilter = '';
    this.sourceFilter = '';
    this.notOwned = false;
    this.updateView();
  }

  updateStatistics() {
    this.totalCards = this.filteredCards.length;
    this.haveCards = this.filteredCards.filter((x) => x.quantity > 0).length;
    this.completion = (this.haveCards * 100) / this.totalCards;
  }

  selectCard(card: Card) {
    this.selectedCard = card;
  }

  printList() {
    let textOutput = '';
    this.filteredCards.forEach((card) => {
      textOutput += `${card.playset - card.quantity}X ${card.code} - ${card.name}\n`;
    });

    const blob = new Blob([textOutput], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}

// TO DO A BACKUP OF THE DB RUN THIS COMMAND
// curl -u admin:1234 -X GET http://localhost:5984/cards/_all_docs?include_docs=true > cards_backup.json
// GIT TOKEN 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
