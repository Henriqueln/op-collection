import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketWatchComponent } from './market-watch/market-watch.component';
import { TournamentReportComponent } from './tournament-report/tournament-report.component';
import { CardViewTableComponent } from './card-view-table/card-view-table.component';
import { CardsListComponent } from './cards-list/cards-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'card-list', pathMatch: 'full' },
  { path: 'market', component: MarketWatchComponent },
  { path: 'tournaments', component: TournamentReportComponent },
  { path: 'card-list', component: CardsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
