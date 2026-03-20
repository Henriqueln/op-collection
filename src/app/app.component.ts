import { Component, inject } from '@angular/core';
import { SETS } from 'src/enums/sets';
import { ApiService } from './api.service';
import { Card } from './entities/card';
import { COLOR } from 'src/enums/color';
import { FiltersService } from './filters.service';
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
    { label: 'Card List', routerLink: 'card-list' },
    { label: 'Market Watch', routerLink: 'market' },
    { label: 'Tournament Report', routerLink: 'tournaments' },
  ];
  selectedCard: Card | undefined;
  cardCreation = false;
  setsValue = Object.keys(SETS) as SETS[];
  selectedSet = SETS.OP01;

  //OLD CODE, TO REFACTOR

  source = '';
  totalCards = 0;
  haveCards = 0;
  completion = 0;
  colorFilter = '';
  sourceFilter = '';
  showAll = false;
  notOwned = false;
  hideFilters = false;

  private filtersService = inject(FiltersService)

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.updateView();
  }

  updateView() {}

  selectSet(set: any) {
    this.selectedSet = set;
    this.filtersService.setValue(set);
    this.updateView();
  }

  showNotOwned() {
    this.notOwned = true;
    this.updateView();
  }

  filterColor(color: string) {
    this.colorFilter = color;
    this.filtersService.setColor(color);
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
    // this.totalCards = this.filteredCards.length;
    // this.haveCards = this.filteredCards.filter((x) => x.quantity > 0).length;
    // this.completion = (this.haveCards * 100) / this.totalCards;
  }

  selectCard(card: Card) {
    this.selectedCard = card;
  }

  printList() {
    // let textOutput = '';
    // this.filteredCards.forEach((card) => {
    //   textOutput += `${card.playset - card.quantity}X ${card.code} - ${card.name}\n`;
    // });

    // const blob = new Blob([textOutput], { type: 'text/plain' });
    // const url = window.URL.createObjectURL(blob);
    // window.open(url);
  }
}

// TO DO A BACKUP OF THE DB RUN THIS COMMAND
// curl -u admin:1234 -X GET http://localhost:5984/cards/_all_docs?include_docs=true > cards_backup.json
// GIT TOKEN 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
