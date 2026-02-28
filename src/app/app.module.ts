import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MarketWatchComponent } from './market-watch/market-watch.component';
import { PlaysetsComponent } from './playsets/playsets.component';
import { TournamentReportComponent } from './tournament-report/tournament-report.component';
import { NgChartsModule } from 'ng2-charts';
import { CardViewTableComponent } from "./card-view-table/card-view-table.component";

@NgModule({ declarations: [
        AppComponent,
        MarketWatchComponent,
        PlaysetsComponent,
        TournamentReportComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule, CardViewTableComponent], providers: [ApiService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
