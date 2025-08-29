import { COLOR } from "../color";

export enum TournamentType {
  // Locals
  LocalSmall = "LocalSmall",
  LocalMedium = "LocalMedium",
  LocalBig = "LocalBig",

  // Store-level
  StoreTreasureCup = "storeTreasureCup",
  StoreChampionship = "storeChampionship",

  // Large events
  TreasureCup = "treasureCup",
  Regional = "regional",
  RegionalSideEvent = "regionalSideEvent",
  Finals = "finals"
}

export const TournamentTypeData = [
  { id: TournamentType.LocalSmall, name: 'Locals Small' },
  { id: TournamentType.LocalMedium, name: 'Locals Medium' },
  { id: TournamentType.LocalBig, name: 'Locals Big' },
  { id: TournamentType.StoreTreasureCup, name: 'Store Treasure Cup' },
  { id: TournamentType.StoreChampionship, name: 'Store Championship' },
  { id: TournamentType.TreasureCup, name: 'Treasure Cup' },
  { id: TournamentType.Regional, name: 'Regional' },
  { id: TournamentType.RegionalSideEvent, name: 'Regional Side Event' },
  { id: TournamentType.Finals, name: 'Finals' },
]

export enum PlacementTier {
  Winner = "winner",
  Top2 = "top2",
  Top4 = "top4",
  Top8 = "top8",
  Top16 = "top16",
  Top32 = "top32",
  Top64 = "top64",
  Top128 = "top128",
  Top256 = "top256",
  Top512 = "top512"
}

const placementOrder: { tier: PlacementTier; cutoff: number }[] = [
  { tier: PlacementTier.Winner, cutoff: 1 },
  { tier: PlacementTier.Top2, cutoff: 2 },
  { tier: PlacementTier.Top4, cutoff: 4 },
  { tier: PlacementTier.Top8, cutoff: 8 },
  { tier: PlacementTier.Top16, cutoff: 16 },
  { tier: PlacementTier.Top32, cutoff: 32 },
  { tier: PlacementTier.Top64, cutoff: 64 },
  { tier: PlacementTier.Top128, cutoff: 128 },
  { tier: PlacementTier.Top256, cutoff: 256 },
  { tier: PlacementTier.Top512, cutoff: 512 }
];

export const BasePlacementPoints: Record<PlacementTier, number> = {
  [PlacementTier.Winner]: 100,
  [PlacementTier.Top2]: 75,
  [PlacementTier.Top4]: 60,
  [PlacementTier.Top8]: 48,
  [PlacementTier.Top16]: 36,
  [PlacementTier.Top32]: 27,
  [PlacementTier.Top64]: 20,
  [PlacementTier.Top128]: 14,
  [PlacementTier.Top256]: 10,
  [PlacementTier.Top512]: 6
};

export const TournamentMultipliers: Record<TournamentType, number> = {
  [TournamentType.LocalSmall]: 0.05,
  [TournamentType.LocalMedium]: 0.08,
  [TournamentType.LocalBig]: 0.12,

  [TournamentType.StoreTreasureCup]: 0.25,
  [TournamentType.StoreChampionship]: 0.40,

  [TournamentType.TreasureCup]: 1.2,
  [TournamentType.Regional]: 1.5,
  [TournamentType.RegionalSideEvent]: 1,
  [TournamentType.Finals]: 2.5
};

export enum LeaderEnum {
  RP_LAW = 'ST10-001',
  RP_LUFFY = 'ST10-002',
  RED_ZORO = 'OP01-001',
  RED_ACE = 'OP03-001',
  YELLOW_KATAKURI = 'OP03-099',
  PURPLE_LUFFY = 'OP05-060',
  BLUE_NAMI = 'OP03-040',
  RG_LAW = 'OP01-002',
  YELLOW_ENEL = 'OP05-098',
  BY_ACE = 'ST13-002',
  GREEN_BONNEY = 'OP07-019',
  RED_SHANKS = 'OP09-001',
  RED_RAYLEIGH = 'OP12-001',
  RU_MARCO = 'OP08-002',
  UP_REIJU = 'OP06-042',
  UP_SANJI = 'OP12-041',
  PB_LUFFY = 'OP09-061',
  GY_LAW = 'OP10-022',
  BLUE_BUGGY = 'OP09-042',
  UP_LUFFY = 'OP11-040',
  RY_BETTY = 'OP05-002',
  RG_SMOKER = 'OP10-001',
  BLACK_TEACH = 'OP09-081',
  YELLOW_KALGARA = 'OP08-098',
  GP_LUFFY = 'EB02-010',
  BY_LUFFY = 'ST13-003',
  GB_PERONA = 'OP06-021',
  RY_SABO = 'ST13-001',
  UB_SAKAZUKI = 'OP05-041',
  GY_YAMATO = 'OP06-022',
  BLACK_LUCCI = 'OP03-076',
  BLACK_LUCCI_OP07 = 'OP07-079',
  BLACK_MORIA = 'OP06-080',
  BLACK_LUFFY = 'ST14-001',
  PY_PUDDING = 'OP08-058',
  BLUE_DOFFY = 'OP01-060',
  BLACK_SMOKER = 'OP02-093',
  YELLOW_KID = 'OP10-099',
  UB_USOPP = 'OP10-042',
  GREEN_ZORO = 'OP12-020',
  BLUE_KUZAN = 'OP12-040',
  RED_NEWGATE = 'OP02-001',
  PURPLE_ICEBURG = 'OP03-058',
  GU_ZORO_SANJI = 'ST12-001',
  BLUE_BOA = 'OP07-038',
  GY_ARLONG = 'OP03-022',
  GB_ISSHO = 'OP04-020',
  PURPLE_KAIDO = 'ST04-001',
  GREEN_UTA = 'ST11-001',
  PY_CROCODILE = 'OP04-058',
  RG_ODEN = 'EB01-001',
  UB_REBECCA = 'OP04-039',
  UY_QUEEN = 'OP04-040',
  BLUE_IVANKOV = 'OP02-049',
  RED_LUFFY = 'ST01-001',
  UY_NAMI = 'OP11-041',
  RG_CHOPPER = 'OP08-001',
  RB_KOBY = 'OP11-001',
  PY_ROSINANTE = 'OP12-061',
  BLUE_ACE_NEWGATE = 'ST22-001',
}

export const leaders: Leader[] = [
  createLeader('Trafalgar Law', COLOR.RED, COLOR.PURPLE, LeaderEnum.RP_LAW),
  createLeader('Trafalgar Law', COLOR.RED, COLOR.GREEN, LeaderEnum.RG_LAW),
  createLeader('Trafalgar Law', COLOR.GREEN, COLOR.YELLOW, LeaderEnum.GY_LAW),
  createLeader('Roronoa Zoro', COLOR.RED, COLOR.RED, LeaderEnum.RED_ZORO),
  createLeader('Portgas D. Ace', COLOR.RED, COLOR.RED, LeaderEnum.RED_ACE),
  createLeader('Portgas D. Ace', COLOR.BLUE, COLOR.YELLOW, LeaderEnum.BY_ACE),
  createLeader('Queen', COLOR.BLUE, COLOR.YELLOW, LeaderEnum.UY_QUEEN),
  createLeader('Charlotte Katakuri', COLOR.YELLOW, COLOR.YELLOW, LeaderEnum.YELLOW_KATAKURI),
  createLeader('Enel', COLOR.YELLOW, COLOR.YELLOW, LeaderEnum.YELLOW_ENEL),
  createLeader('Monkey D. Luffy', COLOR.PURPLE, COLOR.PURPLE, LeaderEnum.PURPLE_LUFFY),
  createLeader('Monkey D. Luffy', COLOR.RED, COLOR.PURPLE, LeaderEnum.RP_LUFFY),
  createLeader('Monkey D. Luffy', COLOR.PURPLE, COLOR.BLACK, LeaderEnum.PB_LUFFY),
  createLeader('Monkey D. Luffy', COLOR.BLUE, COLOR.PURPLE, LeaderEnum.UP_LUFFY),
  createLeader('Monkey D. Luffy', COLOR.GREEN, COLOR.PURPLE, LeaderEnum.GP_LUFFY),
  createLeader('Monkey D. Luffy', COLOR.BLACK, COLOR.YELLOW, LeaderEnum.BY_LUFFY),
  createLeader('Monkey D. Luffy', COLOR.BLACK, COLOR.BLACK, LeaderEnum.BLACK_LUFFY),
  createLeader('Monkey D. Luffy', COLOR.RED, COLOR.RED, LeaderEnum.RED_LUFFY),
  createLeader('Nami', COLOR.BLUE, COLOR.BLUE, LeaderEnum.BLUE_NAMI),
  createLeader('Buggy', COLOR.BLUE, COLOR.BLUE, LeaderEnum.BLUE_BUGGY),
  createLeader('Emporio Ivankov', COLOR.BLUE, COLOR.BLUE, LeaderEnum.BLUE_IVANKOV),
  createLeader('Jewelry Bonney', COLOR.GREEN, COLOR.GREEN, LeaderEnum.GREEN_BONNEY),
  createLeader('Shanks', COLOR.RED, COLOR.RED, LeaderEnum.RED_SHANKS),
  createLeader('Silvers Rayleigh', COLOR.RED, COLOR.RED, LeaderEnum.RED_RAYLEIGH),
  createLeader('Marco', COLOR.RED, COLOR.BLUE, LeaderEnum.RU_MARCO),
  createLeader('Belo Betty', COLOR.RED, COLOR.YELLOW, LeaderEnum.RY_BETTY),
  createLeader('Smoker', COLOR.RED, COLOR.GREEN, LeaderEnum.RG_SMOKER),
  createLeader('Kalgara', COLOR.YELLOW, COLOR.YELLOW, LeaderEnum.YELLOW_KALGARA),
  createLeader('Perona', COLOR.GREEN, COLOR.BLACK, LeaderEnum.GB_PERONA),
  createLeader('Sabo', COLOR.RED, COLOR.YELLOW, LeaderEnum.RY_SABO),
  createLeader('Sakazuki', COLOR.BLUE, COLOR.BLACK, LeaderEnum.UB_SAKAZUKI),
  createLeader('Yamato', COLOR.GREEN, COLOR.YELLOW, LeaderEnum.GY_YAMATO),
  createLeader('Rob Lucci', COLOR.BLACK, COLOR.BLACK, LeaderEnum.BLACK_LUCCI),
  createLeader('Rob Lucci', COLOR.BLACK, COLOR.BLACK, LeaderEnum.BLACK_LUCCI_OP07),
  createLeader('Gecko Moria', COLOR.BLACK, COLOR.BLACK, LeaderEnum.BLACK_MORIA),
  createLeader('Charlotte Pudding', COLOR.PURPLE, COLOR.YELLOW, LeaderEnum.PY_PUDDING),
  createLeader('Donquixote Doflamingo', COLOR.BLUE, COLOR.BLUE, LeaderEnum.BLUE_DOFFY),
  createLeader('Smoker', COLOR.BLACK, COLOR.BLACK, LeaderEnum.BLACK_SMOKER),
  createLeader('Eustass "Captain" Kid', COLOR.YELLOW, COLOR.YELLOW, LeaderEnum.YELLOW_KID),
  createLeader('Usopp', COLOR.BLUE, COLOR.BLACK, LeaderEnum.UB_USOPP),
  createLeader('Roronoa Zoro', COLOR.GREEN, COLOR.GREEN, LeaderEnum.GREEN_ZORO),
  createLeader('Kuzan', COLOR.BLUE, COLOR.BLUE, LeaderEnum.BLUE_KUZAN),
  createLeader('Edward Newgate', COLOR.RED, COLOR.RED, LeaderEnum.RED_NEWGATE),
  createLeader('Iceburg', COLOR.PURPLE, COLOR.PURPLE, LeaderEnum.PURPLE_ICEBURG),
  createLeader('Roronoa Zoro & Sanji', COLOR.GREEN, COLOR.BLUE, LeaderEnum.GU_ZORO_SANJI),
  createLeader('Boa Hancock', COLOR.BLUE, COLOR.BLUE, LeaderEnum.BLUE_BOA),
  createLeader('Arlong', COLOR.GREEN, COLOR.YELLOW, LeaderEnum.GY_ARLONG),
  createLeader('Issho', COLOR.GREEN, COLOR.BLACK, LeaderEnum.GB_ISSHO),
  createLeader('Kaido', COLOR.PURPLE, COLOR.PURPLE, LeaderEnum.PURPLE_KAIDO),
  createLeader('Uta', COLOR.GREEN, COLOR.GREEN, LeaderEnum.GREEN_UTA),
  createLeader('Crocodile', COLOR.PURPLE, COLOR.YELLOW, LeaderEnum.PY_CROCODILE),
  createLeader('Kouzuki Oden', COLOR.RED, COLOR.GREEN, LeaderEnum.RG_ODEN),
  createLeader('Rebecca', COLOR.BLUE, COLOR.BLACK, LeaderEnum.UB_REBECCA),
  createLeader('Vinsmoke Reiju', COLOR.BLUE, COLOR.PURPLE, LeaderEnum.UP_REIJU),
  createLeader('Marshall D. Teach', COLOR.BLACK, COLOR.BLACK, LeaderEnum.BLACK_TEACH),
  createLeader('Nami', COLOR.BLUE, COLOR.YELLOW, LeaderEnum.UY_NAMI),
  createLeader('Tony Tony Chopper', COLOR.RED, COLOR.GREEN, LeaderEnum.RG_CHOPPER),
  createLeader('Koby', COLOR.RED, COLOR.BLACK, LeaderEnum.RB_KOBY),
  createLeader('Sanji', COLOR.BLUE, COLOR.PURPLE, LeaderEnum.UP_SANJI),
  createLeader('Donquixote Rosinante', COLOR.PURPLE, COLOR.YELLOW, LeaderEnum.PY_ROSINANTE),
  createLeader('Ace & Newgate', COLOR.BLUE, COLOR.BLUE, LeaderEnum.BLUE_ACE_NEWGATE),
]

export enum FormatEnum {
  OP06 = 'OP06',
  EB01 = 'EB01',
  OP07 = 'OP07',
  OP08 = 'OP08',
  OP08_5 = 'OP08.5', //ST15-ST20
  OP09 = 'OP09',
  OP10 = 'OP10',
  EB02 = 'EB02',
  OP11 = 'OP11',
  OP12 = 'OP12',
}

export enum StoresEnum {
  VERSUS,
  RAID_N_TRADE,
  PECOCCITANIA,
  OPE,
  PLAYERS_SPOT,
  PTMERCH,
  POP_N_PLAY,
  WEATHERLIGHT,
  CONFLUX,
  CRITICAL_HIT,
  DUELOS_DE_HONRA,
  TAVERNA,
  MERURU,
  GG_LOUNGE,
  LOTUS_MARKET,
  MERCADIA,
  GAMERSWORLD
}

export const Stores = [
  { name: 'Versus Gamecenter', location: 'pt', id: StoresEnum.VERSUS },
  { name: 'Raid n Trade', location: 'de', id: StoresEnum.RAID_N_TRADE },
  { name: 'Premier Event Company Occitania', location: 'fr', id: StoresEnum.PECOCCITANIA },
  { name: 'Organized Play Events', location: 'gb', id: StoresEnum.OPE },
  { name: 'Player\'s Spot', location: 'pt', id: StoresEnum.PLAYERS_SPOT },
  { name: 'PTMERCH', location: 'pt', id: StoresEnum.PTMERCH },
  { name: 'Pop And Play', location: 'pt', id: StoresEnum.POP_N_PLAY },
  { name: 'Weatherlight Games', location: 'pt', id: StoresEnum.WEATHERLIGHT },
  { name: 'Conflux Games', location: 'pt', id: StoresEnum.CONFLUX },
  { name: 'Critical Hit Gamecenter', location: 'pt', id: StoresEnum.CRITICAL_HIT },
  { name: 'Duelos de Honra', location: 'pt', id: StoresEnum.DUELOS_DE_HONRA },
  { name: 'Taverna Game House', location: 'br', id: StoresEnum.TAVERNA },
  { name: 'Meruru Curitiba', location: 'br', id: StoresEnum.MERURU },
  { name: 'GG Lounge', location: 'pt', id: StoresEnum.GG_LOUNGE },
  { name: 'Lotus Market', location: 'pt', id: StoresEnum.LOTUS_MARKET },
  { name: 'Mercadia', location: 'pt', id: StoresEnum.MERCADIA },
  { name: 'Gamers World', location: 'ie', id: StoresEnum.GAMERSWORLD },
]

export function getTournamentScore(
  eventType: TournamentType,
  playerCount: number,
  placement: number
): { score: number; tier?: PlacementTier } {
  const halfField = Math.floor(playerCount / 2);

  // find the placement tier that applies
  const validTier = placementOrder.find(
    p => placement <= p.cutoff && p.cutoff <= halfField
  );

  if (!validTier) return { score: 0 };

  const basePoints = BasePlacementPoints[validTier.tier];
  const multiplier = TournamentMultipliers[eventType];

  return {
    score: basePoints * multiplier,
    tier: validTier.tier
  };
}

// Types for clarity (optional, but recommended in TS)
interface Leader {
  name: string;
  color1: COLOR;
  color2: COLOR;
  code: LeaderEnum;
  points: number;
  timesUsed: number;
  timesWon: number;
  timesLost: number;
  winRatio: number;
}

// Factory function with defaults
function createLeader(
  name: string,
  color1: COLOR,
  color2: COLOR,
  code: LeaderEnum
): Leader {
  return {
    name,
    color1,
    color2,
    code,
    points: 0,
    timesUsed: 0,
    timesWon: 0,
    timesLost: 0,
    winRatio: 0
  };
}