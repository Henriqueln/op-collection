import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const BLUE_NAMI_RANKED = [
    {
        leader: LeaderEnum.BLUE_NAMI,
        opponents: [
             //0-1
            { leader: LeaderEnum.RP_LAW, wins: 0, loses: 1 },
            { leader: LeaderEnum.BLACK_MORIA, wins: 0, loses: 1 },
            { leader: LeaderEnum.UB_SAKAZUKI, wins: 0, loses: 1 },
            { leader: LeaderEnum.GU_ZORO_SANJI, wins: 0, loses: 1 },
            //2-0
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 2, loses: 0 }, 
            //1-0
            { leader: LeaderEnum.GB_PERONA, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.GY_YAMATO, wins: 1, loses: 0 }, 
            //1-1
            { leader: LeaderEnum.BY_LUFFY, wins: 1, loses: 1 }, 
        ],
        format: FormatEnum.OP06
    },
    {
        leader: LeaderEnum.BLUE_NAMI,
        opponents: [
             //0-2
            { leader: LeaderEnum.BLUE_NAMI, wins: 0, loses: 2 },
             //0-1
            { leader: LeaderEnum.BLACK_MORIA, wins: 0, loses: 1 },
            //2-0
            // { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 2, loses: 0 }, 
            //1-0
            { leader: LeaderEnum.BLUE_BOA, wins: 1, loses: 0 }, 
            //1-2
            { leader: LeaderEnum.UP_REIJU, wins: 1, loses: 2 }, 
            //1-1
            // { leader: LeaderEnum.BY_LUFFY, wins: 1, loses: 1 }, 
            //2-2
            { leader: LeaderEnum.GREEN_BONNEY, wins: 2, loses: 2 }, 
            //3-1
            { leader: LeaderEnum.YELLOW_ENEL, wins: 3, loses: 1 }, 
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 3, loses: 6 }, 
            { leader: LeaderEnum.BY_LUFFY, wins: 4, loses: 2 }, 
        ],
        format: FormatEnum.OP07
    },
]