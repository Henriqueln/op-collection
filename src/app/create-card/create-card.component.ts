import { Component, effect, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from '../entities/card';
import { ApiService } from '../api.service';
import { typesOptions } from 'src/enums/types';
import { sourcesOptions } from 'src/enums/sources';
import { categoriesOptions, raritiesOptions } from 'src/enums/categories';
import { nameOptions } from 'src/enums/name';
import { eventsNames } from 'src/enums/events';
import { characterNames } from 'src/enums/characters';

@Component({
  selector: 'app-create-card',
  imports: [FormsModule],
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.css',
})
export class CreateCardComponent {
  typeOptions = typesOptions;
  sourceOptions = sourcesOptions;
  categoriesOptions = categoriesOptions;
  raritiesOptions = raritiesOptions;
  nameOptions = nameOptions;
  eventsNames = eventsNames.sort((a, b) => a.localeCompare(b));
  characterNames = characterNames.sort((a, b) => a.localeCompare(b));

  card = input<Card | undefined>();
  cardCreate: Card = this.getEmptyCard();
  price: number = 0;
  private apiService = inject(ApiService);
  public cardsChanged = output<void>();

  constructor() {
    console.log(this.categoriesOptions);
    effect(() => {
      const value = this.card();

      if (value) {
        if(!value.priceHistory || value.priceHistory.length === 0) {
          value.priceHistory = [0];
        }
        this.cardCreate = { ...value };
        this.price = value.priceHistory?.reverse()?.[0] ?? 0;
      } else {
        this.cardCreate = this.getEmptyCard();
      }
    });
  }

  private getEmptyCard(): Card {
    return {
      quantity: 0,
      extra: 0,
      playset: 0,
      increment: 0,
      leo: false,
      category: '',
      code: '',
      color: '',
      image: '',
      set: '',
      rarity: '',
      type1: '',
      type2: '',
      type3: '',
      source: '',
      name: '',
      color2: '',
      block: 4,
      priceHistory: [0],
    };
  }

  createCard(): void {
    this.cardCreate._id = undefined;
    this.cardCreate._rev = undefined;
    if (
      this.price > 0 &&
      this.price !== this.cardCreate.priceHistory?.reverse()?.[0]
    ) {
      this.cardCreate.priceHistory?.push(this.price);
    }
    this.apiService.createCard(this.cardCreate).subscribe(() => {
      this.cardsChanged.emit();
    });
  }

  updateCard(): void {
    if (
      this.price > 0 &&
      this.price !== this.cardCreate.priceHistory?.reverse()?.[0]
    ) {
      this.cardCreate.priceHistory?.push(this.price);
    }
    this.apiService.updateCard(this.cardCreate).subscribe(() => {
      this.cardsChanged.emit();
    });
  }
}
