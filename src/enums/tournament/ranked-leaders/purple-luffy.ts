import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const PURPLE_LUFFY_RANKED = [
    {
        leader: LeaderEnum.PURPLE_LUFFY,
        opponents: [
            //0-1
            { leader: LeaderEnum.BLACK_MORIA, wins: 0, loses: 1 },
            { leader: LeaderEnum.UB_SAKAZUKI, wins: 0, loses: 1 },
            { leader: LeaderEnum.RY_SABO, wins: 3, loses: 0 },
            //1-0
            { leader: LeaderEnum.YELLOW_ENEL, wins: 1, loses: 0 },
            { leader: LeaderEnum.RED_LUFFY, wins: 1, loses: 0 },
            { leader: LeaderEnum.UP_REIJU, wins: 1, loses: 0 },
            { leader: LeaderEnum.RED_NEWGATE, wins: 1, loses: 0 },
        ],
        format: FormatEnum.OP06
    },
    {
        leader: LeaderEnum.PURPLE_LUFFY,
        opponents: [
             //0-1
            { leader: LeaderEnum.BLACK_MORIA, wins: 0, loses: 1 },
        ],
        format: FormatEnum.EB01
    },
    {
        leader: LeaderEnum.PURPLE_LUFFY,
        opponents: [
             //0-1
            { leader: LeaderEnum.BLUE_DOFFY, wins: 0, loses: 1 },
            { leader: LeaderEnum.BLUE_NAMI, wins: 0, loses: 1 },
            //1-0
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 1, loses: 0 }, 
            //1-1
            { leader: LeaderEnum.UP_REIJU, wins: 1, loses: 1 }, 
            //2-1
            { leader: LeaderEnum.BY_LUFFY, wins: 2, loses: 1 }, 
        ],
        format: FormatEnum.OP08
    },
    {
        leader: LeaderEnum.PURPLE_LUFFY,
        opponents: [
             //0-2
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 0, loses: 2 },
            { leader: LeaderEnum.BLUE_DOFFY, wins: 0, loses: 2 },
             //0-1
            { leader: LeaderEnum.BY_LUFFY, wins: 0, loses: 1 },
            //1-0
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.UP_REIJU, wins: 1, loses: 0 }, 
        ],
        format: FormatEnum.OP08_5
    },
    {
        leader: LeaderEnum.PURPLE_LUFFY,
        opponents: [
            //2-0
            { leader: LeaderEnum.RED_SHANKS, wins: 2, loses: 0 }, 
            //1-0
            { leader: LeaderEnum.BLACK_TEACH, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.YELLOW_ENEL, wins: 1, loses: 0 }, 
            //1-2
            { leader: LeaderEnum.BLUE_DOFFY, wins: 1, loses: 2 }, 
            { leader: LeaderEnum.GREEN_BONNEY, wins: 1, loses: 2 }, 
            //1-1
            { leader: LeaderEnum.RP_LUFFY, wins: 1, loses: 1 }, 
        ],
        format: FormatEnum.OP09
    },
    // {
    //     leader: LeaderEnum.PURPLE_LUFFY,
    //     opponents: [
    //          //0-2
    //         { leader: LeaderEnum., wins: 0, loses: 2 },
    //          //0-1
    //         { leader: LeaderEnum., wins: 0, loses: 1 },
    //         //2-0
    //         { leader: LeaderEnum., wins: 2, loses: 0 }, 
    //         //1-0
    //         { leader: LeaderEnum., wins: 1, loses: 0 }, 
    //         //1-2
    //         { leader: LeaderEnum., wins: 1, loses: 2 }, 
    //         //1-1
    //         { leader: LeaderEnum., wins: 1, loses: 1 }, 
    //         //2-2
    //         { leader: LeaderEnum., wins: 2, loses: 2 }, 
    //         //2-1
    //         { leader: LeaderEnum., wins: 2, loses: 1 }, 
    //         //3-1
    //         { leader: LeaderEnum., wins: 3, loses: 1 }, 
    //     ],
    //     format: FormatEnum.OP06
    // },
]