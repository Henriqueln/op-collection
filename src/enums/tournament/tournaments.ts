import { SETS } from "../sets";
import { FormatEnum, LeaderEnum, PlacementTier, Stores, StoresEnum, TournamentType } from "./tournament.enum";

export const TournamentsData = [
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1641069995000, rounds: [] },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1641069995000, rounds: [] },
    { leader: LeaderEnum.RED_ACE, store: StoresEnum.RAID_N_TRADE, tournamentType: TournamentType.TreasureCup, players: 1024, placement: 47, date: 1672605995000, rounds: [] },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.RAID_N_TRADE, tournamentType: TournamentType.Regional, players: 1024, placement: 256, date: 1672605995000, rounds: [] },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.RAID_N_TRADE, tournamentType: TournamentType.Regional, players: 1024, placement: 256, date: 1672605995000, rounds: [] },
    { leader: LeaderEnum.RED_ACE, store: StoresEnum.RAID_N_TRADE, tournamentType: TournamentType.Regional, players: 1024, placement: 256, date: 1672605995000, rounds: [] },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.PECOCCITANIA, tournamentType: TournamentType.Regional, players: 256, placement: 128, date: 1672605995000, rounds: [], location: 'Toulouse' },
    { leader: LeaderEnum.YELLOW_KATAKURI, store: StoresEnum.OPE, tournamentType: TournamentType.Regional, players: 1024, placement: 512, date: 1672605995000, rounds: [], location: 'Liverpool' },
    { leader: LeaderEnum.RED_ACE, store: StoresEnum.PLAYERS_SPOT, tournamentType: TournamentType.StoreTreasureCup, players: 32, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ACE, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ACE, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ACE, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalSmall, players: 6, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ACE, store: StoresEnum.PLAYERS_SPOT, tournamentType: TournamentType.LocalMedium, players: 16, placement: 4, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.PLAYERS_SPOT, tournamentType: TournamentType.LocalMedium, players: 16, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.POP_N_PLAY, tournamentType: TournamentType.LocalMedium, players: 8, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.WEATHERLIGHT, tournamentType: TournamentType.StoreTreasureCup, players: 32, placement: 8, date: 1672605995000, rounds: [], location: 'Évora' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalSmall, players: 6, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalSmall, players: 6, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.CONFLUX, tournamentType: TournamentType.LocalSmall, players: 6, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.YELLOW_KATAKURI, store: StoresEnum.CRITICAL_HIT, tournamentType: TournamentType.StoreTreasureCup, players: 32, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.YELLOW_KATAKURI, store: StoresEnum.VERSUS, tournamentType: TournamentType.StoreTreasureCup, players: 32, placement: 4, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.YELLOW_KATAKURI, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.YELLOW_KATAKURI, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.PURPLE_LUFFY, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalSmall, players: 6, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.BLUE_NAMI, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalSmall, players: 6, placement: 1, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RG_LAW, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RG_LAW, store: StoresEnum.DUELOS_DE_HONRA, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.CRITICAL_HIT, tournamentType: TournamentType.LocalMedium, players: 16, placement: 4, date: 1672605995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.YELLOW_ENEL, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 8, date: 1704314795000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.YELLOW_KATAKURI, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalSmall, players: 6, placement: 1, date: 1704573995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1704919595000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 8, date: 1707338795000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ACE, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1709757995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ACE, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1710362795000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 1, date: 1710967595000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalMedium, players: 16, placement: 4, date: 1711226795000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.DUELOS_DE_HONRA, tournamentType: TournamentType.LocalSmall, players: 6, placement: 1, date: 1711313195000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalMedium, players: 16, placement: 4, date: 1711831595000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 1, date: 1712177195000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalMedium, players: 16, placement: 1, date: 1712436395000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1712781995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1713041195000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 1, date: 1713473195000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalMedium, players: 16, placement: 1, date: 1713645995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1713991595000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalMedium, players: 16, placement: 4, date: 1714250795000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.PECOCCITANIA, tournamentType: TournamentType.Regional, players: 1024, placement: 512, date: 1716065195000, rounds: [], location: 'Toulouse' },
    { leader: LeaderEnum.BY_ACE, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1717015595000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ACE, store: StoresEnum.TAVERNA, tournamentType: TournamentType.LocalMedium, players: 16, placement: 4, date: 1718052395000, rounds: [], location: 'Curitiba' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.MERURU, tournamentType: TournamentType.LocalMedium, players: 16, placement: 4, date: 1718916395000, rounds: [], location: 'Curitiba' },
    { leader: LeaderEnum.GREEN_BONNEY, store: StoresEnum.DUELOS_DE_HONRA, tournamentType: TournamentType.LocalSmall, players: 8, placement: 1, date: 1719780395000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.PLAYERS_SPOT, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1720298795000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 1, date: 1720644395000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ACE, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1721249195000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 1, date: 1722458795000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LAW, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 8, date: 1722717995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalMedium, players: 16, placement: 1, date: 1728161195000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 1, date: 1729802795000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_SHANKS, store: StoresEnum.DUELOS_DE_HONRA, tournamentType: TournamentType.LocalSmall, players: 8, placement: 1, date: 1734295595000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_SHANKS, store: StoresEnum.DUELOS_DE_HONRA, tournamentType: TournamentType.LocalSmall, players: 8, placement: 1, date: 1734900395000, rounds: [], location: 'Lisboa' },
    //2025
    { leader: LeaderEnum.RED_SHANKS, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 8, date: 1736369195000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_SHANKS, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalSmall, players: 8, placement: 1, date: 1736628395000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_SHANKS, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 8, date: 1737578795000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_SHANKS, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1738183595000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LUFFY, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1739393195000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RU_MARCO, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1740602795000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RU_MARCO, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalSmall, players: 8, placement: 1, date: 1740861995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.DUELOS_DE_HONRA, tournamentType: TournamentType.LocalSmall, players: 8, placement: 1, date: 1741553195000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.PTMERCH, tournamentType: TournamentType.LocalSmall, players: 8, placement: 1, date: 1742676395000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.OPE, tournamentType: TournamentType.RegionalSideEvent, players: 64, placement: 4, date: 1744490795000, rounds: [], location: 'Londres' },
    { leader: LeaderEnum.RP_LUFFY, store: StoresEnum.GG_LOUNGE, tournamentType: TournamentType.StoreChampionship, players: 32, placement: 4, date: 1745095595000, rounds: [], location: 'Viseu' },
    { leader: LeaderEnum.RP_LUFFY, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 8, date: 1745441195000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RU_MARCO, store: StoresEnum.LOTUS_MARKET, tournamentType: TournamentType.LocalSmall, players: 8, placement: 2, date: 1745527595000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.DUELOS_DE_HONRA, tournamentType: TournamentType.LocalSmall, players: 8, placement: 1, date: 1746391595000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RP_LUFFY, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 8, date: 1746909995000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RU_MARCO, store: StoresEnum.MERCADIA, tournamentType: TournamentType.LocalMedium, players: 16, placement: 4, date: 1747169195000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.MERCADIA, tournamentType: TournamentType.LocalMedium, players: 16, placement: 1, date: 1749588395000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1749674795000, rounds: [], location: 'Lisboa' },
    {
        leader: LeaderEnum.RU_MARCO,
        store: StoresEnum.GAMERSWORLD,
        tournamentType: TournamentType.Regional,
        players: 256,
        placement: 84,
        date: 1749933995000,
        rounds: [
            { number: 1, opponent: LeaderEnum.GY_LAW, wonDice: false, won: true },
            { number: 3, opponent: LeaderEnum.UP_LUFFY, wonDice: false, won: true },
            { number: 4, opponent: LeaderEnum.UP_LUFFY, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.RG_SMOKER, wonDice: false, won: false },
            { number: 5, opponent: LeaderEnum.RY_BETTY, wonDice: false, won: false },
            { number: 6, opponent: LeaderEnum.BLUE_BUGGY, wonDice: false, won: true },
            { number: 7, opponent: LeaderEnum.YELLOW_KALGARA, wonDice: false, won: false },
            { number: 8, opponent: LeaderEnum.GP_LUFFY, wonDice: false, won: false },
        ],
        location: 'Dublin'
    },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 4, date: 1750279595000, rounds: [], location: 'Lisboa' },
    { leader: LeaderEnum.RU_MARCO, store: StoresEnum.VERSUS, tournamentType: TournamentType.LocalBig, players: 20, placement: 1, date: 1750884395000, rounds: [], location: 'Lisboa' },
    {
        leader: LeaderEnum.RU_MARCO,
        store: StoresEnum.PECOCCITANIA,
        tournamentType: TournamentType.Regional,
        players: 1024,
        placement: 301,
        date: 1751143595000,
        rounds: [
            { number: 1, opponent: LeaderEnum.RY_BETTY, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.RG_SMOKER, wonDice: false, won: true },
            { number: 3, opponent: LeaderEnum.UP_LUFFY, wonDice: false, won: false },
            { number: 4, opponent: LeaderEnum.BLUE_BUGGY, wonDice: false, won: false },
            { number: 5, opponent: LeaderEnum.UP_REIJU, wonDice: false, won: false },
            { number: 6, opponent: LeaderEnum.BLUE_NAMI, wonDice: false, won: true },
            { number: 7, opponent: LeaderEnum.PB_LUFFY, wonDice: false, won: true },
            { number: 8, opponent: LeaderEnum.BLACK_TEACH, wonDice: false, won: false },
        ],
        location: 'Toulouse'
    },
    { leader: LeaderEnum.RED_ZORO, store: StoresEnum.DUELOS_DE_HONRA, tournamentType: TournamentType.LocalSmall, players: 8, placement: 1, date: 1751834795000, rounds: [], location: 'Lisboa' },
    {
        leader: LeaderEnum.RED_ZORO,
        store: StoresEnum.PECOCCITANIA,
        tournamentType: TournamentType.Finals,
        players: 512,
        placement: 170,
        date: 1754167595000,
        rounds: [
            { number: 1, opponent: LeaderEnum.GY_LAW, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.BLUE_BUGGY, wonDice: false, won: false },
            { number: 3, opponent: LeaderEnum.UP_LUFFY, wonDice: false, won: false },
            { number: 4, opponent: LeaderEnum.UP_LUFFY, wonDice: false, won: true },
            { number: 5, opponent: LeaderEnum.RY_BETTY, wonDice: false, won: true },
            { number: 6, opponent: LeaderEnum.BLUE_BUGGY, wonDice: false, won: false },
            { number: 7, opponent: LeaderEnum.PB_LUFFY, wonDice: false, won: false },
            { number: 8, opponent: LeaderEnum.RED_ZORO, wonDice: false, won: true },
        ],
        location: 'Paris'
    },
    //OP12
    {
        leader: LeaderEnum.RED_SHANKS,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalSmall,
        players: 8,
        placement: 2,
        date: 1755722795000,
        rounds: [
            { number: 1, opponent: LeaderEnum.UP_REIJU, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.RED_RAYLEIGH, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.UP_REIJU, wonDice: false, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_RAYLEIGH,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalBig,
        players: 20,
        placement: 2,
        date: 1755981995000,
        rounds: [
            { number: 1, opponent: LeaderEnum.UP_SANJI, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.PB_LUFFY, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.RED_ZORO, wonDice: true, won: true },
            { number: 4, opponent: LeaderEnum.PURPLE_LUFFY, wonDice: false, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_RAYLEIGH,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalBig,
        players: 14,
        placement: 4,
        date: 1756260262000,
        rounds: [
            { number: 1, opponent: LeaderEnum.BLACK_TEACH, wonDice: false, won: false },
            { number: 2, opponent: LeaderEnum.BLUE_KUZAN, wonDice: false, won: true },
            { number: 3, opponent: LeaderEnum.UP_REIJU, wonDice: false, won: true },
            { number: 4, opponent: LeaderEnum.PB_LUFFY, wonDice: false, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_SHANKS,
        store: StoresEnum.LOTUS_MARKET,
        tournamentType: TournamentType.LocalSmall,
        players: 8,
        placement: 1,
        date: 1756413995000,
        rounds: [
            { number: 1, opponent: LeaderEnum.PURPLE_LUFFY, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.UP_REIJU, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.RB_KOBY, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_RAYLEIGH,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalBig,
        players: 30,
        placement: 6,
        date: 1756564666000,
        rounds: [
            { number: 1, opponent: LeaderEnum.RU_CAESAR, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.BLUE_KUZAN, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.YELLOW_ENEL, wonDice: true, won: false },
            { number: 4, opponent: LeaderEnum.RED_RAYLEIGH, wonDice: true, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_RAYLEIGH,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.LocalMedium,
        players: 13,
        placement: 3,
        date: 1756665579000,
        rounds: [
            { number: 1, opponent: LeaderEnum.PB_LUFFY, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.BLUE_KUZAN, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.BY_KOALA, wonDice: false, won: false },
            { number: 4, opponent: LeaderEnum.GREEN_ZORO, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_RAYLEIGH,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalBig,
        players: 14,
        placement: 9,
        date: 1756941951000, // 03-Set-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.UP_SANJI, wonDice: true, won: false },
            { number: 2, opponent: LeaderEnum.BLUE_KUZAN, wonDice: false, won: true },
            { number: 3, opponent: LeaderEnum.UP_LUFFY, wonDice: true, won: false },
            { number: 4, opponent: LeaderEnum.GREEN_BONNEY, wonDice: true, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_SHANKS,
        store: StoresEnum.LOTUS_MARKET,
        tournamentType: TournamentType.LocalMedium,
        players: 8,
        placement: 2,
        date: 1757020786000, // 04-Set-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.YELLOW_KID, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.UP_REIJU, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.UP_LUFFY, wonDice: false, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_RAYLEIGH,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalBig,
        players: 22,
        placement: 18,
        date: 1757183278000, // 06-Set-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.RY_BETTY, wonDice: false, won: false },
            { number: 2, opponent: LeaderEnum.YELLOW_ENEL, wonDice: true, won: false },
            { number: 3, opponent: LeaderEnum.UY_NAMI, wonDice: false, won: false },
            { number: 4, opponent: LeaderEnum.RB_KOBY, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.PY_ROSINANTE,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.LocalMedium,
        players: 9,
        placement: 6,
        date: new Date('2025-09-07').getTime(), // 07-Set-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.YELLOW_KATAKURI, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.BLUE_ACE_NEWGATE, wonDice: false, won: false },
            { number: 3, opponent: LeaderEnum.BLUE_ACE_NEWGATE, wonDice: true, won: false },
            { number: 4, opponent: LeaderEnum.BY_KOALA, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_ZORO,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalBig,
        players: 21,
        placement: 13,
        date: 1757508054000, // 10-Set-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.BLACK_TEACH, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.YELLOW_KALGARA, wonDice: false, won: true },
            { number: 3, opponent: LeaderEnum.RED_SHANKS, wonDice: true, won: false },
            { number: 4, opponent: LeaderEnum.UY_NAMI, wonDice: false, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_RAYLEIGH,
        store: StoresEnum.ZENITH,
        tournamentType: TournamentType.StoreChampionship,
        players: 22,
        placement: 13,
        date: 1757778726000, // 13-Set-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.RED_RAYLEIGH, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.GREEN_ZORO, wonDice: false, won: true },
            { number: 3, opponent: LeaderEnum.UP_LUFFY, wonDice: false, won: false },
            { number: 4, opponent: LeaderEnum.GREEN_BONNEY, wonDice: false, won: false },
            { number: 5, opponent: LeaderEnum.GP_LIM, wonDice: false, won: false },
        ],
        location: 'Leiria'
    },
    {
        leader: LeaderEnum.RED_RAYLEIGH,
        store: StoresEnum.GG_LOUNGE,
        tournamentType: TournamentType.StoreChampionship,
        players: 25,
        placement: 9,
        date: 1757865126000, // 14-Set-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.PB_LUFFY, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.UP_LUFFY, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.BY_KOALA, wonDice: true, won: false },
            { number: 4, opponent: LeaderEnum.YELLOW_KATAKURI, wonDice: true, won: false },
            { number: 5, opponent: LeaderEnum.GREEN_BONNEY, wonDice: false, won: true },
        ],
        location: 'Viseu'
    },
    {
        leader: LeaderEnum.RED_SHANKS,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalMedium,
        players: 14,
        placement: 9,
        date: new Date('2025-10-22').getTime(), // 22-Oct-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.RED_RAYLEIGH, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.GREEN_BONNEY, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.RG_SMOKER, wonDice: true, won: true },
            { number: 4, opponent: LeaderEnum.GREEN_ZORO, wonDice: false, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_SHANKS,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.LocalSmall,
        players: 9,
        placement: 3,
        date: 1761444638000, // 26-Oct-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.BLUE_KUZAN, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.RG_ODEN, wonDice: true, won: false },
            { number: 3, opponent: LeaderEnum.GREEN_ZORO, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RU_ACE,
        store: StoresEnum.LOTUS_MARKET,
        tournamentType: TournamentType.LocalSmall,
        players: 10,
        placement: 3,
        date: new Date('2025-11-07').getTime(), // 07-Nov-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.RED_RAYLEIGH, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.UY_NAMI, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.RB_SABO, wonDice: true, won: true },
            { number: 4, opponent: LeaderEnum.RU_ACE, wonDice: true, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RU_ACE,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalBig,
        players: 29,
        placement: 5,
        date: new Date('2025-11-08').getTime(), // 08-Nov-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.BLACK_IMU, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.BLACK_IMU, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.BLACK_IMU, wonDice: true, won: true },
            { number: 4, opponent: LeaderEnum.GREEN_ZORO, wonDice: true, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RP_ROGER,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.LocalSmall,
        players: 7,
        placement: 4,
        date: new Date('2025-11-08').getTime(), // 08-Nov-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.GREEN_ZORO, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.RED_RAYLEIGH, wonDice: false, won: false },
            { number: 3, opponent: LeaderEnum.PY_CROCODILE, wonDice: true, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RU_ACE,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalBig,
        players: 23,
        placement: 1,
        date: new Date('2025-11-13').getTime(), // 13-Nov-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.RP_SUGAR, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.RP_ROGER, wonDice: false, won: true },
            { number: 3, opponent: LeaderEnum.RP_ROGER, wonDice: false, won: true },
            { number: 4, opponent: LeaderEnum.GREEN_ZORO, wonDice: true, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RU_ACE,
        store: StoresEnum.PECOCCITANIA,
        tournamentType: TournamentType.Regional,
        players: 512,
        placement: 512, //Drop
        date: new Date('2025-11-15').getTime(), // 15-Nov-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.BLACK_IMU, wonDice: true, won: false },
            { number: 2, opponent: LeaderEnum.BLUE_DOFFY, wonDice: true, won: false },
            { number: 3, opponent: LeaderEnum.GREEN_BONNEY, wonDice: false, won: false },
            { number: 4, opponent: LeaderEnum.GREEN_ZORO, wonDice: true, won: true },
        ],
        location: 'Bordeux'
    },
    {
        leader: LeaderEnum.RP_ROGER,
        store: StoresEnum.PECOCCITANIA,
        tournamentType: TournamentType.RegionalSideEvent,
        players: 56,
        placement: 1, 
        date: new Date('2025-11-15').getTime(), // 15-Nov-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.GREEN_ZORO, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.RB_SABO, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.GREEN_ZORO, wonDice: false, won: true },
            { number: 4, opponent: LeaderEnum.GREEN_ZORO, wonDice: false, won: true },
        ],
        location: 'Bordeux'
    },
    {
        leader: LeaderEnum.RU_ACE,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.StoreTreasureCup,
        players: 35,
        placement: 9, 
        date: new Date('2025-11-22').getTime(), // 22-Nov-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.GREEN_ZORO, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.GP_LIM, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.RU_ACE, wonDice: false, won: true },
            { number: 4, opponent: LeaderEnum.RU_ACE, wonDice: true, won: true },
            { number: 5, opponent: LeaderEnum.GREEN_ZORO, wonDice: false, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RU_ACE,
        store: StoresEnum.LOTUS_MARKET,
        tournamentType: TournamentType.StoreTreasureCup,
        players: 15,
        placement: 1, 
        date: new Date('2025-11-22').getTime(), // 22-Nov-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.RU_ACE, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.BLACK_IMU, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.GREEN_ZORO, wonDice: true, won: true },
            { number: 4, opponent: LeaderEnum.RU_ACE, wonDice: true, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.YELLOW_BONNEY,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.LocalSmall,
        players: 9,
        placement: 2, 
        date: new Date('2025-11-23').getTime(), // 23-Nov-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.RB_SABO, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.RED_RAYLEIGH, wonDice: false, won: true },
            { number: 3, opponent: LeaderEnum.UB_USOPP, wonDice: true, won: true },
            { number: 4, opponent: LeaderEnum.BLACK_IMU, wonDice: false, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.YELLOW_BONNEY,
        store: StoresEnum.LOTUS_MARKET,
        tournamentType: TournamentType.LocalSmall,
        players: 11,
        placement: 7, 
        date: new Date('2025-11-27').getTime(), // 27-Nov-2025
        rounds: [
            { number: 1, opponent: LeaderEnum.RG_LUFFY_OP13, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.GREEN_ZORO, wonDice: true, won: false },
            { number: 3, opponent: LeaderEnum.BLACK_IMU, wonDice: true, won: true },
            { number: 4, opponent: LeaderEnum.RB_SABO, wonDice: false, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RU_ACE,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.StoreTreasureCup,
        players: 18,
        placement: 4, 
        date: new Date('2025-11-30').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.BLACK_IMU, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.RU_ACE, wonDice: true, won: false },
            { number: 3, opponent: LeaderEnum.RU_ACE, wonDice: true, won: true },
            { number: 4, opponent: LeaderEnum.GREEN_ZORO, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RU_ACE,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalSmall,
        players: 12,
        placement: 2, 
        date: new Date('2025-12-03').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.PY_PUDDING, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.PURPLE_LUFFY, wonDice: true, won: false },
            { number: 3, opponent: LeaderEnum.RG_SMOKER, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_ZORO,
        store: StoresEnum.LOTUS_MARKET,
        tournamentType: TournamentType.LocalSmall,
        players: 10,
        placement: 5, 
        date: new Date('2025-12-04').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.BLACK_IMU, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.UY_NAMI, wonDice: true, won: false },
            { number: 3, opponent: LeaderEnum.RB_SABO, wonDice: true, won: false },
            { number: 4, opponent: LeaderEnum.PURPLE_LUFFY, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },

    // 2026
    {
        leader: LeaderEnum.RED_ZORO,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.LocalBig,
        players: 20,
        placement: 19, 
        date: new Date('2026-01-04').getTime(), 
        set: FormatEnum.OP13,
        rounds: [
            { number: 1, opponent: LeaderEnum.GP_LIM, wonDice: false, won: false },
            { number: 2, opponent: LeaderEnum.RB_SABO, wonDice: true, won: false },
            { number: 3, opponent: LeaderEnum.RU_ACE, wonDice: false, won: false },
            { number: 4, opponent: LeaderEnum.BYE, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_LAW,
        store: StoresEnum.LOTUS_MARKET,
        tournamentType: TournamentType.LocalSmall,
        players: 12,
        placement: 3, 
        date: new Date('2026-01-15').getTime(), 
        set: FormatEnum.OP14,
        rounds: [
            { number: 1, opponent: LeaderEnum.BLACK_IMU, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.BLACK_IMU, wonDice: true, won: false },
            { number: 3, opponent: LeaderEnum.RED_NEWGATE, wonDice: true, won: false },
            { number: 4, opponent: LeaderEnum.RU_ACE, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RU_ACE,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalBig,
        players: 32,
        placement: 12, 
        date: new Date('2026-01-17').getTime(), 
        set: FormatEnum.OP14,
        rounds: [
            { number: 1, opponent: LeaderEnum.UY_BOA, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.UP_SANJI, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.UP_LUFFY, wonDice: false, won: false },
            { number: 4, opponent: LeaderEnum.UP_LUFFY, wonDice: false, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.PY_ROSINANTE,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.LocalBig,
        players: 25,
        placement: 5, 
        set: FormatEnum.OP14,
        date: new Date('2026-01-18').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.BLUE_KUZAN, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.RP_ROGER, wonDice: false, won: false },
            { number: 3, opponent: LeaderEnum.BLUE_JINBE, wonDice: false, won: true },
            { number: 4, opponent: LeaderEnum.GREEN_MIHAWK, wonDice: true, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_LAW,
        store: StoresEnum.VERSUS,
        tournamentType: TournamentType.LocalBig,
        players: 28,
        placement: 12, 
        set: FormatEnum.OP14,
        date: new Date('2026-01-21').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.BLUE_JINBE, wonDice: false, won: false },
            { number: 2, opponent: LeaderEnum.YELLOW_BONNEY, wonDice: true, won: false },
            { number: 3, opponent: LeaderEnum.GREEN_BONNEY, wonDice: false, won: true },
            { number: 4, opponent: LeaderEnum.PURPLE_DOFLAMINGO, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.PY_ROSINANTE,
        store: StoresEnum.LOTUS_MARKET,
        tournamentType: TournamentType.LocalMedium,
        players: 14,
        placement: 5, 
        set: FormatEnum.OP14,
        date: new Date('2026-01-22').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.RU_ACE, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.BLUE_JINBE, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.RB_SABO_OP13, wonDice: true, won: false },
            { number: 4, opponent: LeaderEnum.UP_SANJI, wonDice: true, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_LAW,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.LocalBig,
        players: 21,
        placement: 10, 
        set: FormatEnum.OP14,
        date: new Date('2026-01-25').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.BY_KOALA, wonDice: false, won: false },
            { number: 2, opponent: LeaderEnum.GREEN_ZORO, wonDice: true, won: false },
            { number: 3, opponent: LeaderEnum.GREEN_MIHAWK, wonDice: false, won: true },
            { number: 4, opponent: LeaderEnum.BLUE_JINBE, wonDice: true, won: true },
            { number: 5, opponent: LeaderEnum.PURPLE_DOFLAMINGO, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.YELLOW_BONNEY,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.LocalSmall,
        players: 7,
        placement: 1, 
        set: FormatEnum.OP14,
        date: new Date('2026-01-28').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.GREEN_ZORO, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.UY_BOA, wonDice: false, won: true },
            { number: 3, opponent: LeaderEnum.GP_LUFFY, wonDice: true, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RP_ROGER,
        store: StoresEnum.LOTUS_MARKET,
        tournamentType: TournamentType.LocalMedium,
        players: 15,
        placement: 6, 
        set: FormatEnum.OP14,
        date: new Date('2026-01-29').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.YELLOW_BONNEY, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.YELLOW_LUFFY, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.PURPLE_DOFLAMINGO, wonDice: false, won: false },
            { number: 4, opponent: LeaderEnum.UY_BOA, wonDice: false, won: false },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.PY_ROSINANTE,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.LocalMedium,
        players: 14,
        placement: 3, 
        set: FormatEnum.OP14,
        date: new Date('2026-02-01').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.RB_SABO_OP13, wonDice: false, won: false },
            { number: 2, opponent: LeaderEnum.GREEN_BONNEY, wonDice: false, won: true },
            { number: 3, opponent: LeaderEnum.PURPLE_DOFLAMINGO, wonDice: false, won: true },
            { number: 4, opponent: LeaderEnum.RB_SABO_OP13, wonDice: true, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RG_LAW,
        store: StoresEnum.DUELOS_DE_HONRA,
        tournamentType: TournamentType.LocalSmall,
        players: 7,
        placement: 1, 
        set: FormatEnum.OP14,
        date: new Date('2026-02-04').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.GREEN_ZORO, wonDice: true, won: true },
            { number: 2, opponent: LeaderEnum.UB_USOPP, wonDice: true, won: true },
            { number: 3, opponent: LeaderEnum.RB_SABO_OP13, wonDice: true, won: true },
        ],
        location: 'Lisboa'
    },
    {
        leader: LeaderEnum.RED_LAW,
        store: StoresEnum.LOTUS_MARKET,
        tournamentType: TournamentType.LocalMedium,
        players: 14,
        placement: 3, 
        set: FormatEnum.OP14,
        date: new Date('2026-02-05').getTime(), 
        rounds: [
            { number: 1, opponent: LeaderEnum.GREEN_BONNEY, wonDice: false, won: true },
            { number: 2, opponent: LeaderEnum.RB_SABO_OP13, wonDice: false, won: false },
            { number: 3, opponent: LeaderEnum.YELLOW_BONNEY, wonDice: true, won: true },
            { number: 4, opponent: LeaderEnum.UP_SANJI, wonDice: false, won: true },
        ],
        location: 'Lisboa'
    },
]