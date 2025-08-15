import { Component } from '@angular/core';
import { SETS } from 'src/enums/sets';
import { ApiService } from './api.service';
import { Card } from './entities/card';
import { CATEGORIES, categoriesOptions, raritiesOptions } from 'src/enums/categories';
import { COLOR } from 'src/enums/color';
import { typesOptions } from 'src/enums/types';
import { sourcesOptions } from 'src/enums/sources';
import { nameOptions } from 'src/enums/name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showEdit = false;

  SETS = SETS;
  COLORS = COLOR;
  setsValue = Object.keys(SETS) as SETS[]
  title = 'opCollection';
  allCards: Card[] = [];
  filteredCards: Card[] = [];
  selectedSet = SETS.OP01
  setName = '';
  image = '';
  rarity = '';
  category = '';
  color = '';
  color2 = '';
  type1 = '';
  type2 = '';
  type3 = '';
  source = '';
  name = '';
  code = '';
  playset = 0;
  id = '';
  quantity = 0;
  rev = '';
  totalCards = 0;
  haveCards = 0;
  completion = 0;
  colorFilter = '';
  playsetsSelected = false;
  typeOptions = typesOptions;
  sourceOptions = sourcesOptions;
  categoriesOptions = categoriesOptions;
  raritiesOptions = raritiesOptions;
  nameOptions = nameOptions;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.updateView();
  }

  selectSet(set: SETS) {
    this.selectedSet = set;
    this.updateView();
  }

  updateView() {
    this.playsetsSelected = false;
    this.apiService.getCards().subscribe(result => {
      this.allCards = result;
      this.allCards = this.allCards.map(card => {
        card.leo = false;
        card.increment = 1;
        card.extra = card.quantity - card.playset;
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
        this.filteredCards = this.allCards.filter(c => c.quantity < c.playset && c.rarity !== 'ALT' && c.set !== SETS.DON);
      } else {
        this.filteredCards = this.allCards.filter(c => c.set === this.selectedSet);
      }
      if (this.colorFilter) {
        this.filteredCards = this.filteredCards.filter(c => c.color === this.colorFilter || c.color2 === this.colorFilter);
      }
      this.updateStatistics();
    });
  }

  filterColor(color: string) {
    this.colorFilter = color;
    this.updateView();
  }

  removeFilters() {
    this.colorFilter = '';
    this.updateView();
  }

  updateStatistics() {
    this.totalCards = this.filteredCards.length;
    this.haveCards = this.filteredCards.filter(x => x.quantity > 0).length;
    this.completion = (this.haveCards * 100) / this.totalCards
  }

  increment(card: Card) {
    card.quantity = card.quantity + card.increment;
    this.apiService.updateCard(card).subscribe(result => {
      this.updateView();
    })
  }

  decrement(card: Card) {
    card.quantity = card.quantity - card.increment;
    this.apiService.updateCard(card).subscribe(result => {
      this.updateView();
    })
  }

  getColor(card: Card, color: string): string {
    if (!color) color = card.color;
    if (color === COLOR.RED) {
      if (card.quantity >= card.playset) return 'dark-red'
      else return 'red';
    }
    if (color === COLOR.GREEN) {
      if (card.quantity >= card.playset) return 'dark-green'
      else return 'green';
    }
    if (color === COLOR.BLUE) {
      if (card.quantity >= card.playset) return 'dark-blue'
      else return 'blue';
    }
    if (color === COLOR.PURPLE) {
      if (card.quantity >= card.playset) return 'dark-purple'
      else return 'purple';
    }
    if (color === COLOR.BLACK) {
      if (card.quantity >= card.playset) return 'dark-black'
      else return 'black';
    }
    if (color === COLOR.YELLOW) {
      if (card.quantity >= card.playset) return 'dark-yellow'
      else return 'yellow';
    }
    return '';
  }

  create() {
    let request = {
      set: this.setName,
      quantity: 0,
      image: this.image,
      rarity: this.rarity,
      category: this.category,
      color: this.color,
      code: this.code,
      color2: this.color2,
      extra: 0,
      leo: false,
      name: this.name,
      playset: this.playset,
      source: this.source,
      type1: this.type1,
      type2: this.type2,
      type3: this.type3
    } as Card
    this.apiService.createCard(request).subscribe(response => {
      this.updateView();
    })
  }

  selectCard(card: Card) {
    this.setName = card.set;
    this.image = card.image;
    this.rarity = card.rarity;
    this.category = card.category;
    this.color = card.color;
    this.color2 = card.color2;
    this.type1 = card.type1;
    this.type2 = card.type2;
    this.type3 = card.type3;
    this.source = card.source;
    this.name = card.name;
    this.code = card.code;
    this.playset = card.playset;
    this.id = card._id;
    this.quantity = card.quantity;
    this.rev = card._rev;
  }

  updateCard() {
    let request = {
      _id: this.id,
      _rev: this.rev,
      set: this.setName,
      image: this.image,
      rarity: this.rarity,
      category: this.category,
      color: this.color,
      code: this.code,
      color2: this.color2,
      extra: 0,
      leo: false,
      name: this.name,
      playset: this.playset,
      source: this.source,
      type1: this.type1,
      type2: this.type2,
      type3: this.type3,
      quantity: this.quantity,
    } as Card
    this.apiService.updateCard(request).subscribe(result => {
      this.updateView();
    })
  }

  printList() {
    let textOutput = '';
    this.filteredCards.forEach(card => {
      textOutput+=`${card.playset - card.quantity}X ${card.code} - ${card.name}\n`
    })

    const blob = new Blob([textOutput], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  };
}



