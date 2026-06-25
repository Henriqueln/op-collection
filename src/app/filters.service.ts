import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { COLOR } from 'src/enums/color';
import { SETS } from 'src/enums/sets';

@Injectable()
export class FiltersService {
  selectedSet = new BehaviorSubject(SETS.OP01);
  selectedSet$ = this.selectedSet.asObservable();

  selectedColor = new BehaviorSubject('');
  selectedColor$ = this.selectedColor.asObservable();

  hideOwned = new BehaviorSubject(false);
  hideOwned$ = this.hideOwned.asObservable();

  setValue(value: any) {
    this.selectedSet.next(value);
  }

  getValue() {
    return this.selectedSet.value;
  }

  setColor(value: any) {
    this.selectedColor.next(value);
  }

  getColor() {
    return this.selectedColor.value;
  }

  setHideOwned(value: boolean) {
    this.hideOwned.next(value);
  }

  getHideOwned() {
    return this.hideOwned.value;
  }
}
