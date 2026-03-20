import { Component, OnInit } from '@angular/core';
import { RankedData } from 'src/enums/tournament/ranked';
import {
  FormatEnum,
  getTournamentScore,
  LeaderEnum,
  leaders,
  Stores,
  TournamentTypeData,
} from 'src/enums/tournament/tournament.enum';
import { TournamentsData } from 'src/enums/tournament/tournaments';
import { ChartConfiguration, ChartType } from 'chart.js';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tournament-report',
  templateUrl: './tournament-report.component.html',
  styleUrls: ['./tournament-report.component.css'],
  standalone: false,
})
export class TournamentReportComponent implements OnInit {
  leadersRanking = JSON.parse(JSON.stringify(leaders));
  currentLeader = '-1';
  tournamentsFiltered = JSON.parse(JSON.stringify(TournamentsData));
  statistics: any = {
    mostUsedTournament: [],
    mostWinsTournament: [],
    mostUsedRanked: [],
  };
  // OLD CODE
  leadersCurrentSet = JSON.parse(JSON.stringify(leaders));
  leaderCurrentSetFiltered: any;
  leaderFilteredAllTime: any;
  leaders = leaders;
  leadersDropdown = [...leaders.sort((a, b) => a.name.localeCompare(b.name))];
  tournaments = TournamentsData;
  activeTab: string = 'tab1'; // default active tab
  stores = Stores;
  tournamentTypes = TournamentTypeData;
  ranked: any[] = [];
  currentSet = FormatEnum.OP15;
  formats = Object.keys(FormatEnum);
  selectedLeader = leaders.find((l) => l.code === LeaderEnum.RED_ZORO);

  leaderStats = {
    mostUsedComp: [],
    mostWinsComp: [],
  } as any;

  leaderUsed = '';
  leaderOpponent = '';
  format = FormatEnum.OP15;
  wonGame = false;

  chartData!: ChartConfiguration<'pie'>['data'];

  chartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
  };

  constructor(private apiService: ApiService) {}

  refreshData() {
    this.getData();
    this.switchTab(this.activeTab);
  }

  getTournamentData(set = '', leader = '') {
    this.resetRanking();
    let tournamentsFiltered = [...this.tournaments];
    if (set && set !== FormatEnum.ALL_TIME) {
      tournamentsFiltered = tournamentsFiltered.filter(
        (tournament) => tournament.set === set,
      );
    }
    if (leader && leader !== '-1') {
      tournamentsFiltered = tournamentsFiltered.filter(
        (tournament) => tournament.leader === leader,
      );
    }
    console.log('tournaments filtered', tournamentsFiltered);
    this.tournamentsFiltered = JSON.parse(JSON.stringify(tournamentsFiltered));
    tournamentsFiltered.forEach((tournament) => {
      const score = getTournamentScore(
        tournament.tournamentType,
        tournament.players,
        tournament.placement,
      );
      this.leadersRanking.find(
        (leaderRank: any) => leaderRank.code === tournament.leader,
      )!.points += score.score;
      this.leadersRanking.find(
        (leaderRank: any) => leaderRank.code === tournament.leader,
      )!.timesUsed++;
      if (tournament.placement === 1) {
        this.leadersRanking.find(
          (leaderRank: any) => leaderRank.code === tournament.leader,
        )!.timesWon++;
      }
    });
    this.leadersRanking = this.leadersRanking
      .filter((l: any) => l.points > 0)
      .sort((a: any, b: any) => b.points - a.points);
  }

  resetRanking() {
    this.leadersRanking = JSON.parse(JSON.stringify(leaders));
  }

  resetStatistics() {
    this.statistics = {
      mostUsedTournament: [],
      mostWinsTournament: [],
      mostUsedRanked: [],
    };
  }

  getStatistics(set = '', leader = '', data: any) {
    this.resetStatistics();
    this.statistics.mostUsedTournament = JSON.parse(
      JSON.stringify(this.leadersRanking),
    ).sort((a: any, b: any) => b.timesUsed - a.timesUsed);
    this.statistics.mostWinsTournament = JSON.parse(
      JSON.stringify(this.leadersRanking),
    )
      .filter((l: any) => l.timesWon > 0)
      .sort((a: any, b: any) => b.timesWon - a.timesWon);
    console.log('statistics', this.statistics);

    if (set && set !== FormatEnum.ALL_TIME) {
      data = data.filter((d: any) => d.format === set);
    }
    if (leader && leader !== '-1') {
      data = data.filter((d: any) => d.leader === leader);
    }
    data.forEach((d: any) => {
      const statsLead = {
        code: d.leader,
        timesUsed: 0,
        timesWon: 0,
        timesLost: 0,
      };
      d.opponents.forEach((o: any) => {
        statsLead.timesLost += o.loses;
        statsLead.timesWon += o.wins;
        statsLead.timesUsed += o.loses + o.wins;
      });
      const existingLeader = this.statistics.mostUsedRanked.find(
        (s: any) => s.code === d.leader,
      );
      if (existingLeader) {
        existingLeader.timesLost += statsLead.timesLost;
        existingLeader.timesWon += statsLead.timesWon;
        existingLeader.timesUsed += statsLead.timesUsed;
      } else {
        this.statistics.mostUsedRanked.push(statsLead);
      }
    });

    this.statistics.mostUsedRanked = this.statistics.mostUsedRanked.map(
      (s: any) => {
        return {
          ...s,
          winRatio:
            Math.round((s.timesWon / (s.timesWon + s.timesLost)) * 100 * 100) /
            100,
        };
      },
    );

    this.statistics.mostUsedRanked = this.statistics.mostUsedRanked.sort(
      (a: any, b: any) => b.timesUsed - a.timesUsed,
    );

    this.statistics.mostWinRatio = this.normalizeArray(
      this.statistics.mostUsedRanked,
    )
      .filter((s: any) => s.timesUsed > 10)
      .sort((a: any, b: any) => b.winRatio - a.winRatio);
  }

  normalizeArray(array: any[]): any[] {
    return JSON.parse(JSON.stringify(array));
  }

  getData() {
    this.getTournamentData(this.currentSet, this.currentLeader);
    this.apiService.getGames().subscribe((data) => {
      this.ranked = data;
      console.log('games data', data);
      this.getStatistics(
        this.currentSet,
        this.currentLeader,
        JSON.parse(JSON.stringify(data)),
      );
    });
    this.tournaments.forEach((t) => {
      const score = getTournamentScore(
        t.tournamentType,
        t.players,
        t.placement,
      );
      // this.leaders.find((l) => l.code === t.leader)!.points += score.score;
      // this.leaders.find((l) => l.code === t.leader)!.timesUsed++;
      // if (t.placement === 1) {
      //   this.leaders.find((l) => l.code === t.leader)!.timesWon++;
      // }
      if (t.set === this.currentSet) {
        this.leadersCurrentSet.find((l: any) => l!.code === t.leader)!.points +=
          score.score;
        this.leadersCurrentSet.find((l: any) => l!.code === t.leader)!
          .timesUsed++;
        if (t.placement === 1) {
          this.leadersCurrentSet.find((l: any) => l!.code === t.leader)!
            .timesWon++;
        }
      }
    });
    this.tournaments = this.tournaments.sort((a, b) => b.date - a.date);
    this.leaders = this.leaders.sort((a, b) => b.points - a.points);
    this.leadersCurrentSet = this.leadersCurrentSet.sort(
      (a: any, b: any) => b.points - a.points,
    );
  }

  ngOnInit(): void {
    this.getData();
  }

  selectLeader(leaderCode: string) {
    this.selectedLeader = this.leaders.find((l) => l.code === leaderCode);
    this.switchTab('tab4');
  }

  getRowContext(tData: any) {
    return {
      leader: this.leaders.find((l) => l.code === tData.leader),
      store: this.stores.find((s) => s.id === tData.store),
      points: getTournamentScore(
        tData.tournamentType,
        tData.players,
        tData.placement,
      ).score,
      type: this.tournamentTypes.find((t) => tData.tournamentType === t.id),
    };
  }

  switchTab(tab: any) {
    const leadersAux = this.leaders.map((l) => ({ ...l }));
    const leadersCurrentSet = this.leadersCurrentSet.map((l: any) => ({
      ...l,
    }));
    const leadersRanked = leaders.map((l) => ({
      ...l,
      timesLost: 0,
      timesUsed: 0,
      timesWon: 0,
    }));
    const leadersRankedCurrentSet = leaders.map((l) => ({
      ...l,
      timesLost: 0,
      timesUsed: 0,
      timesWon: 0,
    }));
    const leadersIndividualWinLose = leaders.map((l) => ({
      ...l,
      timesLost: 0,
      timesUsed: 0,
      timesWon: 0,
    }));
    if (tab === 'tab3') {
      console.log(this.ranked);
      this.ranked.forEach((r) => {
        r.opponents.forEach((opp: any) => {
          leadersRanked.find((l) => l.code === r.leader)!.timesWon += opp.wins;
          leadersRanked.find((l) => l.code === r.leader)!.timesLost +=
            opp.loses;
          leadersRanked.find((l) => l.code === r.leader)!.timesUsed +=
            opp.wins + opp.loses;
          leadersIndividualWinLose.find(
            (l) => l.code === opp.leader,
          )!.timesWon += opp.wins;
          leadersIndividualWinLose.find(
            (l) => l.code === opp.leader,
          )!.timesLost += opp.loses;
          if (r.format === this.currentSet) {
            leadersRankedCurrentSet.find(
              (l) => l.code === r.leader,
            )!.timesWon += opp.wins;
            leadersRankedCurrentSet.find(
              (l) => l.code === r.leader,
            )!.timesLost += opp.loses;
            leadersRankedCurrentSet.find(
              (l) => l.code === r.leader,
            )!.timesUsed += opp.wins + opp.loses;
          }
        });
      });
      leadersRanked.forEach((l) => {
        l.winRatio =
          Math.round((l.timesWon / (l.timesWon + l.timesLost)) * 100 * 100) /
          100;
      });
      leadersRankedCurrentSet.forEach((l) => {
        l.winRatio =
          Math.round((l.timesWon / (l.timesWon + l.timesLost)) * 100 * 100) /
          100;
      });
      leadersIndividualWinLose.forEach((l) => {
        l.winRatio =
          Math.round((l.timesWon / (l.timesWon + l.timesLost)) * 100 * 100) /
          100;
      });
      this.leaderStats = {
        mostUsedComp: leadersAux
          .sort((a, b) => b.timesUsed - a.timesUsed)
          .filter((l) => l.timesUsed > 0)
          .slice(0, 10),
        mostWinsComp: leadersAux
          .sort((a, b) => b.timesWon - a.timesWon)
          .filter((l) => l.timesWon > 0)
          .slice(0, 10),
        mostUsedCompCurrent: leadersCurrentSet
          .sort((a: any, b: any) => b.timesUsed - a.timesUsed)
          .filter((l: any) => l.timesUsed > 0)
          .slice(0, 10),
        mostWinsCompCurrent: leadersCurrentSet
          .sort((a: any, b: any) => b.timesWon - a.timesWon)
          .filter((l: any) => l.timesWon > 0)
          .slice(0, 10),
        mostUsedRank: leadersRanked
          .sort((a, b) => b.timesUsed - a.timesUsed)
          .filter((l) => l.timesUsed > 0)
          .slice(0, 10),
        mostWinsRank: leadersRanked
          .sort((a, b) => b.timesWon - a.timesWon)
          .filter((l) => l.timesWon > 0)
          .slice(0, 10),
        bestWinRatioRank: leadersRanked
          .sort((a, b) => b.winRatio - a.winRatio)
          .filter((l) => l.winRatio > 0 && l.timesWon + l.timesLost >= 60)
          .slice(0, 10),
        mostUsedRankCurrent: leadersRankedCurrentSet
          .sort((a: any, b: any) => b.timesUsed - a.timesUsed)
          .filter((l) => l.timesUsed > 0)
          .slice(0, 10),
        mostWinsRankCurrent: leadersRankedCurrentSet
          .sort((a: any, b: any) => b.timesWon - a.timesWon)
          .filter((l) => l.timesWon > 0)
          .slice(0, 10),
        bestWinRatioRankCurrent: leadersRankedCurrentSet
          .sort((a: any, b: any) => b.winRatio - a.winRatio)
          .filter((l) => l.winRatio > 0)
          .slice(0, 10),
        individualWins: leadersIndividualWinLose
          .sort((a, b) => b.timesWon - a.timesWon)
          .slice(0, 10),
        individualLoses: leadersIndividualWinLose
          .sort((a, b) => b.timesLost - a.timesLost)
          .slice(0, 10),
        individualWinRatio: leadersIndividualWinLose
          .filter((l) => l.timesLost + l.timesWon >= 30)
          .sort((a, b) => b.winRatio - a.winRatio)
          .slice(0, 10),
        individualLoseRatio: leadersIndividualWinLose
          .filter((l) => l.timesLost + l.timesWon >= 30)
          .sort((a, b) => a.winRatio - b.winRatio)
          .slice(0, 10),
      };
    }
    this.ranked = this.ranked.map((r) => {
      return {
        ...r,
        opponents: r.opponents.sort(
          (a: any, b: any) => b.wins + b.loses - (a.wins + a.loses),
        ),
      };
    });
    if (tab === 'tab5') {
      this.leaderFilteredAllTime = [];
      this.ranked
        .filter((l: any) => l.leader === this.selectedLeader?.code)
        .forEach((r: any) => {
          r.opponents.forEach((opp: any) => {
            if (
              this.leaderFilteredAllTime.find(
                (l: any) => l.leader === opp.leader,
              )
            ) {
              this.leaderFilteredAllTime.find(
                (l: any) => l.leader === opp.leader,
              ).wins += opp.wins;
              this.leaderFilteredAllTime.find(
                (l: any) => l.leader === opp.leader,
              ).loses += opp.loses;
            } else {
              this.leaderFilteredAllTime.push({ ...opp });
            }
          });
        });
      this.leaderFilteredAllTime = this.leaderFilteredAllTime?.sort(
        (a: any, b: any) => b.wins + b.loses - (a.wins + a.loses),
      );
    } else {
      this.leaderCurrentSetFiltered = this.ranked.find(
        (l: any) =>
          l.leader === this.selectedLeader?.code &&
          l.format === this.currentSet,
      );
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
    });

    return {
      wins: wins,
      loses: loses,
      ratio: this.calculateWinRatio(wins, loses),
    };
  }

  getWinRatioAllTime(): any {
    let wins = 0;
    let loses = 0;

    this.leaderFilteredAllTime.forEach((o: any) => {
      wins += o.wins;
      loses += o.loses;
    });

    return {
      wins: wins,
      loses: loses,
      ratio: this.calculateWinRatio(wins, loses),
    };
  }

  addGame() {
    if (!this.leaderUsed || !this.format || !this.leaderOpponent) {
      return;
    }
    let leader = this.ranked.find(
      (r) => r.leader === this.leaderUsed && r.format === this.format,
    );
    if (!leader) {
      leader = this.createEmptyLeaderData();
      leader.opponents.push({
        leader: this.leaderOpponent as any,
        wins: this.wonGame ? 1 : 0,
        loses: this.wonGame ? 0 : 1,
      });
      this.apiService.addNewGame(leader).subscribe(() => {});
    } else {
      let opponents = leader.opponents;
      let opponent = opponents.find(
        (o: any) => o.leader === this.leaderOpponent,
      );
      if (!opponent) {
        opponents.push({
          leader: this.leaderOpponent as any,
          wins: this.wonGame ? 1 : 0,
          loses: this.wonGame ? 0 : 1,
        });
      } else {
        if (this.wonGame) opponent.wins++;
        else opponent.loses++;
      }
      this.apiService.addGame(leader).subscribe(() => {
        this.apiService.getGames().subscribe((data) => {
          this.ranked = data;
        });
      });
    }
  }

  createEmptyLeaderData(): any {
    return {
      format: this.format,
      leader: this.leaderUsed,
      opponents: [],
    };
  }

  selected: any;
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  select(option: any) {
    this.leaderOpponent = option;
    this.isOpen = false;
  }
}
