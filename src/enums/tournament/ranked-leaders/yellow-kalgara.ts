import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const YELLOW_KALGARA_RANKED = [
    {
        leader: LeaderEnum.YELLOW_KALGARA,
        opponents: [
             //0-2
            { leader: LeaderEnum.BLUE_DOFFY, wins: 0, loses: 2 },
            //2-0
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 2, loses: 0 }, 
            //1-0
            { leader: LeaderEnum.RED_ZORO, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.GB_PERONA, wins: 1, loses: 0 }, 
        ],
        format: FormatEnum.OP08
    },
    {
        leader: LeaderEnum.YELLOW_KALGARA,
        opponents: [
             //0-1
            { leader: LeaderEnum.BLUE_DOFFY, wins: 0, loses: 1 },
        ],
        format: FormatEnum.OP08_5
    },
    {
        leader: LeaderEnum.YELLOW_KALGARA,
        opponents: [
             //0-1
            { leader: LeaderEnum.BLUE_DOFFY, wins: 0, loses: 1 },
            //1-0
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 1, loses: 0 }, 
        ],
        format: FormatEnum.OP09
    },
    // {
    //     leader: LeaderEnum.YELLOW_KALGARA,
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