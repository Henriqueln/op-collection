import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Card } from '../entities/card';
import { SETS } from 'src/enums/sets';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-playsets',
  templateUrl: './playsets.component.html',
  styleUrls: ['./playsets.component.css']
})

export class PlaysetsComponent implements OnInit {

  @Input() cards: Card[] = []
  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;

  sets: string[] = [];
  constructor() { }

  ngOnInit() {
    this.sets = Object.keys(SETS);
    this.sets = this.sets.filter(s => s !== SETS.P)
    console.log(this.cards)
  }

  getCardsFiltered(set: string) {
    return this.cards.filter(c => c.set == set);
  }

  downloadImage() {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    html2canvas(this.screen.nativeElement, {scale: 2}).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = `missing-playsets-${formattedDate}.png`;
      this.downloadLink.nativeElement.click();
    });

  }

}
