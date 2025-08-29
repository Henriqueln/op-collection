import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const RED_ACE_RANKED = [
    {
        leader: LeaderEnum.RED_ACE,
        opponents: [
            { leader: LeaderEnum.BY_ACE, wins: 1, loses: 0 },
            { leader: LeaderEnum.YELLOW_KATAKURI, wins: 2, loses: 0 },
            { leader: LeaderEnum.RP_LAW, wins: 2, loses: 0 },
            { leader: LeaderEnum.BLACK_MORIA, wins: 2, loses: 0 },
            { leader: LeaderEnum.GB_PERONA, wins: 1, loses: 0 },
            { leader: LeaderEnum.UP_REIJU, wins: 1, loses: 1 },
            { leader: LeaderEnum.UB_SAKAZUKI, wins: 1, loses: 0 },
            { leader: LeaderEnum.GY_YAMATO, wins: 1, loses: 1 },
        ],
        format: FormatEnum.OP06
    },
    {
        leader: LeaderEnum.RED_ACE,
        opponents: [
            { leader: LeaderEnum.YELLOW_ENEL, wins: 0, loses: 1 },
            { leader: LeaderEnum.YELLOW_KATAKURI, wins: 1, loses: 1 },
            { leader: LeaderEnum.RP_LAW, wins: 2, loses: 1 },
            { leader: LeaderEnum.BY_LUFFY, wins: 1, loses: 0 },
            { leader: LeaderEnum.BLACK_MORIA, wins: 1, loses: 1 },
            { leader: LeaderEnum.UP_REIJU, wins: 1, loses: 0 },
            { leader: LeaderEnum.UB_SAKAZUKI, wins: 0, loses: 1 },
            { leader: LeaderEnum.RED_NEWGATE, wins: 1, loses: 0 },
            { leader: LeaderEnum.PURPLE_ICEBURG, wins: 1, loses: 0 },
        ],
        format: FormatEnum.EB01
    },
    {
        leader: LeaderEnum.RED_ACE,
        opponents: [
            { leader: LeaderEnum.YELLOW_ENEL, wins: 0, loses: 1 },
            { leader: LeaderEnum.UP_REIJU, wins: 0, loses: 1 },
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 1, loses: 0 },
            { leader: LeaderEnum.PY_PUDDING, wins: 1, loses: 0 },
            { leader: LeaderEnum.YELLOW_KALGARA, wins: 1, loses: 0 },
            { leader: LeaderEnum.BLACK_LUFFY, wins: 1, loses: 0 },
            { leader: LeaderEnum.RP_LUFFY, wins: 0, loses: 1 },
            { leader: LeaderEnum.YELLOW_KATAKURI, wins: 0, loses: 1 },
        ],
        format: FormatEnum.OP08
    },
    {
        leader: LeaderEnum.RED_ACE,
        opponents: [
             //0-2
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 0, loses: 2 },
            //2-0
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 2, loses: 0 }, 
            //1-2
            { leader: LeaderEnum.BLUE_DOFFY, wins: 1, loses: 2 }, 
            //1-1
            { leader: LeaderEnum.GREEN_BONNEY, wins: 1, loses: 1 }, 
        ],
        format: FormatEnum.OP08_5
    },
    {
        leader: LeaderEnum.RED_ACE,
        opponents: [
             //0-2
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 0, loses: 2 },
             //0-1
            { leader: LeaderEnum.RG_SMOKER, wins: 0, loses: 1 },
            { leader: LeaderEnum.GREEN_BONNEY, wins: 0, loses: 1 },
            { leader: LeaderEnum.RED_ZORO, wins: 0, loses: 1 },
            //2-0
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 2, loses: 0 }, 
            //1-0
            { leader: LeaderEnum.GP_LUFFY, wins: 1, loses: 0 }, 
            //1-2
            { leader: LeaderEnum.BLUE_DOFFY, wins: 1, loses: 2 }, 
            //1-1
            { leader: LeaderEnum.UP_LUFFY, wins: 1, loses: 1 }, 
            { leader: LeaderEnum.BLACK_TEACH, wins: 1, loses: 1 }, 
            { leader: LeaderEnum.PB_LUFFY, wins: 1, loses: 1 }, 
        ],
        format: FormatEnum.OP11
    },
]