import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketWatchComponent } from './market-watch/market-watch.component';

const routes: Routes = [
  { path: 'market', component: MarketWatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
