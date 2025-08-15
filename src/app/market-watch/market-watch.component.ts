import { Component, OnInit } from '@angular/core';
import { MARKET_WATCH } from 'src/enums/market';
import { MARKET_WATCH_FIXED } from 'src/enums/market-fixed';

@Component({
  selector: 'app-market-watch',
  templateUrl: './market-watch.component.html',
  styleUrls: ['./market-watch.component.css']
})
export class MarketWatchComponent implements OnInit {
  cards = MARKET_WATCH.map(market => {
    const prices = market.prices.reverse();
    market.currentPrice = prices[0];
    market.previousPrice = prices[1] ?? market.currentPrice;
    console.log(market)
    return market;
  });
  cardsFixed = MARKET_WATCH_FIXED.filter(m => m.prices[0] > 0).map(market => {
    const prices = market.prices.reverse();
    market.currentPrice = prices[0];
    market.previousPrice = prices[1] ?? market.currentPrice;
    console.log(market)
    return market
  }).sort((a, b) => a.currentPrice - b.currentPrice);

  constructor() { }

  ngOnInit() {
  }

}
