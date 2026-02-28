import { NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Card } from '../entities/card';
import { COLOR } from 'src/enums/color';
import { Clipboard } from '@angular/cdk/clipboard';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card-view-table',
  imports: [NgClass, ReactiveFormsModule, FormsModule],
  templateUrl: './card-view-table.component.html',
  styleUrl: './card-view-table.component.css',
  standalone: true,
})
export class CardViewTableComponent {
  public clipboard = inject(Clipboard);
  public apiService = inject(ApiService);
  public cards = input<Card[]>();
  public quantityChange = output<void>();
  public cardSelected = output<Card>();

  getColor(card: Card, color: string): string {
    if (!color) color = card.color;
    if (color === COLOR.RED) {
      if (card.quantity >= card.playset) return 'dark-red';
      else return 'red';
    }
    if (color === COLOR.GREEN) {
      if (card.quantity >= card.playset) return 'dark-green';
      else return 'green';
    }
    if (color === COLOR.BLUE) {
      if (card.quantity >= card.playset) return 'dark-blue';
      else return 'blue';
    }
    if (color === COLOR.PURPLE) {
      if (card.quantity >= card.playset) return 'dark-purple';
      else return 'purple';
    }
    if (color === COLOR.BLACK) {
      if (card.quantity >= card.playset) return 'dark-black';
      else return 'black';
    }
    if (color === COLOR.YELLOW) {
      if (card.quantity >= card.playset) return 'dark-yellow';
      else return 'yellow';
    }
    return '';
  }

  copyToClipboard(text: string) {
    this.clipboard.copy(text);
  }

  increment(card: Card) {
    card.quantity = card.quantity + card.increment;
    this.apiService.updateCard(card).subscribe((result) => {
      this.quantityChange.emit();
    });
  }

  decrement(card: Card) {
    card.quantity = card.quantity - card.increment;
    this.apiService.updateCard(card).subscribe((result) => {
      this.quantityChange.emit();
    });
  }

  selectCard(card: Card) {
    this.cardSelected.emit(card);
  }
}
