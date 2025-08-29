import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const RP_LAW_RANKED = [
    {
        leader: LeaderEnum.RP_LAW,
        opponents: [
             //0-1
            { leader: LeaderEnum.RY_BETTY, wins: 0, loses: 1 },
            //2-0
            { leader: LeaderEnum.GREEN_UTA, wins: 2, loses: 0 }, 
            //1-0
            { leader: LeaderEnum.GY_ARLONG, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.GB_ISSHO, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.PURPLE_KAIDO, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.GB_PERONA, wins: 1, loses: 0 }, 
            //2-2
            { leader: LeaderEnum.BLACK_MORIA, wins: 2, loses: 2 }, 
            //Others
            { leader: LeaderEnum.YELLOW_KATAKURI, wins: 14, loses: 3 }, 
            { leader: LeaderEnum.RP_LAW, wins: 4, loses: 0 }, 
            { leader: LeaderEnum.UP_REIJU, wins: 4, loses: 0 }, 
            { leader: LeaderEnum.UB_SAKAZUKI, wins: 6, loses: 1 }, 
            { leader: LeaderEnum.GY_YAMATO, wins: 8, loses: 1 }, 
        ],
        format: FormatEnum.OP06
    },
    {
        leader: LeaderEnum.RP_LAW,
        opponents: [
             //0-1
            { leader: LeaderEnum.UY_QUEEN, wins: 0, loses: 1 },
            { leader: LeaderEnum.GREEN_UTA, wins: 0, loses: 1 },
            //2-0
            { leader: LeaderEnum.YELLOW_KATAKURI, wins: 2, loses: 0 }, 
            { leader: LeaderEnum.BLUE_NAMI, wins: 2, loses: 0 }, 
            //1-0
            { leader: LeaderEnum.BY_ACE, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.PURPLE_KAIDO, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.RG_ODEN, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.GB_PERONA, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.UB_REBECCA, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.PURPLE_ICEBURG, wins: 1, loses: 0 }, 
            //1-2
            { leader: LeaderEnum.RED_NEWGATE, wins: 1, loses: 2 }, 
            //1-1
            { leader: LeaderEnum.UP_REIJU, wins: 1, loses: 1 }, 
            //2-1
            { leader: LeaderEnum.PY_CROCODILE, wins: 2, loses: 1 }, 
            //5-5
            { leader: LeaderEnum.YELLOW_ENEL, wins: 5, loses: 5 }, 
            { leader: LeaderEnum.RP_LAW, wins: 11, loses: 8 }, 
            { leader: LeaderEnum.BY_LUFFY, wins: 8, loses: 1 }, 
            { leader: LeaderEnum.BLACK_MORIA, wins: 10, loses: 8 }, 
            { leader: LeaderEnum.UB_SAKAZUKI, wins: 6, loses: 3 }, 
            { leader: LeaderEnum.GY_YAMATO, wins: 3, loses: 2 }, 
        ],
        format: FormatEnum.EB01
    },
    {
        leader: LeaderEnum.RP_LAW,
        opponents: [
            //1-0
            { leader: LeaderEnum.GB_PERONA, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.RED_NEWGATE, wins: 1, loses: 0 }, 
            //1-1
            { leader: LeaderEnum.BLACK_MORIA, wins: 1, loses: 1 }, 
            //3-1
            { leader: LeaderEnum.BY_LUFFY, wins: 3, loses: 1 }, 
            { leader: LeaderEnum.BLUE_NAMI, wins: 3, loses: 1 }, 
            //2-1
            { leader: LeaderEnum.GREEN_BONNEY, wins: 2, loses: 1 }, 
            { leader: LeaderEnum.YELLOW_ENEL, wins: 7, loses: 2 }, 
            { leader: LeaderEnum.RP_LAW, wins: 6, loses: 5 }, 
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 0, loses: 3 }, 
            { leader: LeaderEnum.BLUE_DOFFY, wins: 1, loses: 3 }, 
        ],
        format: FormatEnum.OP07
    },
]