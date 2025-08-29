import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketWatchComponent } from './market-watch/market-watch.component';
import { TournamentReportComponent } from './tournament-report/tournament-report.component';

const routes: Routes = [
  { path: 'market', component: MarketWatchComponent },
  { path: 'tournaments', component: TournamentReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
