import { Component, OnInit } from '@angular/core';
import { RankedData } from 'src/enums/tournament/ranked';
import { FormatEnum, getTournamentScore, LeaderEnum, leaders, Stores, TournamentTypeData } from 'src/enums/tournament/tournament.enum';
import { TournamentsData } from 'src/enums/tournament/tournaments';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
    selector: 'app-tournament-report',
    templateUrl: './tournament-report.component.html',
    styleUrls: ['./tournament-report.component.css'],
    standalone: false
})
export class TournamentReportComponent implements OnInit {

  leadersCurrentSet = JSON.parse(JSON.stringify(leaders));
  leaderCurrentSetFiltered: any;
  leaderFilteredAllTime: any;
  leaders = leaders;
  tournaments = TournamentsData;
  activeTab: string = 'tab1'; // default active tab
  stores = Stores;
  tournamentTypes = TournamentTypeData;
  ranked = RankedData;
  currentSet = FormatEnum.EB03;
  selectedLeader = leaders.find(l => l.code === LeaderEnum.RED_ZORO);

  leaderStats = {
    mostUsedComp: [],
    mostWinsComp: [],
  } as any

  chartData!: ChartConfiguration<'pie'>['data'];

  chartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
  };



  constructor() { }

  ngOnInit(): void {
    this.tournaments.forEach(t => {
      const score = getTournamentScore(t.tournamentType, t.players, t.placement);
      this.leaders.find(l => l.code === t.leader)!.points += score.score;
      this.leaders.find(l => l.code === t.leader)!.timesUsed++;
      if (t.placement === 1) {
        this.leaders.find(l => l.code === t.leader)!.timesWon++;
      }
      if (t.set === this.currentSet) {
        this.leadersCurrentSet.find((l: any) => l!.code === t.leader)!.points += score.score;
        this.leadersCurrentSet.find((l: any) => l!.code === t.leader)!.timesUsed++;
        if (t.placement === 1) {
          this.leadersCurrentSet.find((l: any) => l!.code === t.leader)!.timesWon++;
        }
      }
    });
    this.tournaments = this.tournaments.sort((a, b) => b.date - a.date)
    this.leaders = this.leaders.sort((a, b) => b.points - a.points);
    this.leadersCurrentSet = this.leadersCurrentSet.sort((a: any, b: any) => b.points - a.points);
  }

  selectLeader(leaderCode: string) {
    this.selectedLeader = this.leaders.find(l => l.code === leaderCode);
    this.switchTab('tab4');
  }


  getRowContext(tData: any) {
    return {
      leader: this.leaders.find(l => l.code === tData.leader),
      store: this.stores.find(s => s.id === tData.store),
      points: getTournamentScore(tData.tournamentType, tData.players, tData.placement).score,
      type: this.tournamentTypes.find(t => tData.tournamentType === t.id)
    }
  }

  switchTab(tab: any) {
    const leadersAux = this.leaders.map(l => ({ ...l }));
    const leadersCurrentSet = this.leadersCurrentSet.map((l: any) => ({ ...l }));
    const leadersRanked = leaders.map(l => ({ ...l, timesLost: 0, timesUsed: 0, timesWon: 0 }));
    const leadersRankedCurrentSet = leaders.map(l => ({ ...l, timesLost: 0, timesUsed: 0, timesWon: 0 }));
    const leadersIndividualWinLose = leaders.map(l => ({ ...l, timesLost: 0, timesUsed: 0, timesWon: 0 }));
    if (tab === 'tab3') {
      this.ranked.forEach(r => {
        r.opponents.forEach(opp => {
          leadersRanked.find(l => l.code === r.leader)!.timesWon += opp.wins;
          leadersRanked.find(l => l.code === r.leader)!.timesLost += opp.loses;
          leadersRanked.find(l => l.code === r.leader)!.timesUsed += (opp.wins + opp.loses);
          leadersIndividualWinLose.find(l => l.code === opp.leader)!.timesWon += opp.wins;
          leadersIndividualWinLose.find(l => l.code === opp.leader)!.timesLost += opp.loses;
          if (r.format === this.currentSet) {
            leadersRankedCurrentSet.find(l => l.code === r.leader)!.timesWon += opp.wins;
            leadersRankedCurrentSet.find(l => l.code === r.leader)!.timesLost += opp.loses;
            leadersRankedCurrentSet.find(l => l.code === r.leader)!.timesUsed += (opp.wins + opp.loses);
          }
        })
      });
      leadersRanked.forEach(l => {
        l.winRatio = Math.round((l.timesWon / (l.timesWon + l.timesLost)) * 100 * 100) / 100;
      })
      leadersRankedCurrentSet.forEach(l => {
        l.winRatio = Math.round((l.timesWon / (l.timesWon + l.timesLost)) * 100 * 100) / 100;
      })
      leadersIndividualWinLose.forEach(l => {
        l.winRatio = Math.round((l.timesWon / (l.timesWon + l.timesLost)) * 100 * 100) / 100;
      })
      this.leaderStats = {
        mostUsedComp: leadersAux.sort((a, b) => b.timesUsed - a.timesUsed).filter(l => l.timesUsed > 0).slice(0, 10),
        mostWinsComp: leadersAux.sort((a, b) => b.timesWon - a.timesWon).filter(l => l.timesWon > 0).slice(0, 10),
        mostUsedCompCurrent: leadersCurrentSet.sort((a: any, b: any) => b.timesUsed - a.timesUsed).filter((l: any) => l.timesUsed > 0).slice(0, 10),
        mostWinsCompCurrent: leadersCurrentSet.sort((a: any, b: any) => b.timesWon - a.timesWon).filter((l: any) => l.timesWon > 0).slice(0, 10),
        mostUsedRank: leadersRanked.sort((a, b) => b.timesUsed - a.timesUsed).filter(l => l.timesUsed > 0).slice(0, 10),
        mostWinsRank: leadersRanked.sort((a, b) => b.timesWon - a.timesWon).filter(l => l.timesWon > 0).slice(0, 10),
        bestWinRatioRank: leadersRanked.sort((a, b) => b.winRatio - a.winRatio).filter(l => l.winRatio > 0 && l.timesWon + l.timesLost >= 60).slice(0, 10),
        mostUsedRankCurrent: leadersRankedCurrentSet.sort((a: any, b: any) => b.timesUsed - a.timesUsed).filter(l => l.timesUsed > 0).slice(0, 10),
        mostWinsRankCurrent: leadersRankedCurrentSet.sort((a: any, b: any) => b.timesWon - a.timesWon).filter(l => l.timesWon > 0).slice(0, 10),
        bestWinRatioRankCurrent: leadersRankedCurrentSet.sort((a: any, b: any) => b.winRatio - a.winRatio).filter(l => l.winRatio > 0).slice(0, 10),
        individualWins: leadersIndividualWinLose.sort((a, b) => b.timesWon - a.timesWon).slice(0, 10),
        individualLoses: leadersIndividualWinLose.sort((a, b) => b.timesLost - a.timesLost).slice(0, 10),
        individualWinRatio: leadersIndividualWinLose.filter(l => l.timesLost + l.timesWon >= 30).sort((a, b) => b.winRatio - a.winRatio).slice(0, 10),
        individualLoseRatio: leadersIndividualWinLose.filter(l => l.timesLost + l.timesWon >= 30).sort((a, b) => a.winRatio - b.winRatio).slice(0, 10),
      }
    }
    this.ranked = this.ranked.map(r => {
      return {
        ...r,
        opponents: r.opponents.sort((a: any, b: any) => ((b.wins + b.loses)) - ((a.wins + a.loses)))
      }
    })
    if (tab === 'tab5') {
      this.leaderFilteredAllTime = [];
      this.ranked.filter((l: any) => l.leader === this.selectedLeader?.code).forEach((r: any) => {
        r.opponents.forEach((opp: any) => {
          if (this.leaderFilteredAllTime.find((l: any) => l.leader === opp.leader)) {
            this.leaderFilteredAllTime.find((l: any) => l.leader === opp.leader).wins += opp.wins;
            this.leaderFilteredAllTime.find((l: any) => l.leader === opp.leader).loses += opp.loses;
          } else {
            this.leaderFilteredAllTime.push({ ...opp });
          }
        })
      });
      this.leaderFilteredAllTime = this.leaderFilteredAllTime?.sort((a: any, b: any) => ((b.wins + b.loses)) - ((a.wins + a.loses)))
    } else {
      this.leaderCurrentSetFiltered = this.ranked.find((l: any) => l.leader === this.selectedLeader?.code && l.format === this.currentSet);
    }
    this.activeTab = tab;
  }

  calculateWinRatio(wins: number, loses: number): number {
    return Math.round((wins / (wins + loses)) * 100 * 100) / 100;
  }

  getWinRatioCurrent(): any {
    let wins = 0;
    let loses = 0;

    this.leaderCurrentSetFiltered.opponents.forEach((o: any) => {
      wins += o.wins;
      loses += o.loses;
    })

    return {
      wins: wins,
      loses: loses,
      ratio: this.calculateWinRatio(wins, loses)
    }
  }

  getWinRatioAllTime(): any {
    console.log(this.leaderFilteredAllTime)
    let wins = 0;
    let loses = 0;

    this.leaderFilteredAllTime.forEach((o: any) => {
      wins += o.wins;
      loses += o.loses;
    })

    return {
      wins: wins,
      loses: loses,
      ratio: this.calculateWinRatio(wins, loses)
    }
  }



}
