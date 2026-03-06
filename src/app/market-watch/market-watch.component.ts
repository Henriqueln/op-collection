import { Component, OnInit } from '@angular/core';
import { MARKET_WATCH } from 'src/enums/market';
import { MARKET_WATCH_FIXED } from 'src/enums/market-fixed';
import { Card } from '../entities/card';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-market-watch',
  templateUrl: './market-watch.component.html',
  styleUrls: ['./market-watch.component.css'],
  standalone: false,
})
export class MarketWatchComponent implements OnInit {
  showWishlist = false;
  cards = MARKET_WATCH.map((market) => {
    const prices = market.prices.reverse();
    market.currentPrice = prices[0];
    market.previousPrice = prices[1] ?? market.currentPrice;
    console.log(market);
    return market;
  });
  cardsFixed = MARKET_WATCH_FIXED.filter((m) => m.prices[0] > 0)
    .map((market) => {
      const prices = market.prices.reverse();
      market.currentPrice = prices[0];
      market.previousPrice = prices[1] ?? market.currentPrice;
      console.log(market);
      return market;
      // });
    })
    .sort((a, b) => a.currentPrice - b.currentPrice);

  wishList = MARKET_WATCH.map((market) => {
    return { ...market };
  });

  allCards: Card[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.apiService.getCards().subscribe((result) => {
      this.allCards = result;
      this.allCards = this.allCards
        .map((card) => {
          card.leo = false;
          card.increment = 1;
          card.extra = card.quantity - card.playset;
          if (card.priceHistory?.length === 0) card.priceHistory = [0];
          if (card.extra < 0) card.extra = 0;
          card.currentPrice = card.priceHistory?.reverse()?.[0] ?? 0;
          card.previousPrice = card.priceHistory?.reverse()?.[1] ?? card.currentPrice;
          return card;
        })
        .sort((a, b) => {
          if (a.code < b.code) return -1;
          if (a.code > b.code) return 1;
          return 0;
        });
      this.allCards = this.allCards.filter((c) => c.quantity === 0);
    });
  }
}
