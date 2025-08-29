import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const RED_SHANKS_RANKED = [
    {
        leader: LeaderEnum.RED_SHANKS,
        opponents: [
             //0-2
            { leader: LeaderEnum.BY_LUFFY, wins: 0, loses: 2 },
            //1-0
            { leader: LeaderEnum.YELLOW_ENEL, wins: 1, loses: 0 }, 
            //2-1
            { leader: LeaderEnum.RP_LUFFY, wins: 2, loses: 1 }, 
            //Others
            { leader: LeaderEnum.BLACK_SMOKER, wins: 3, loses: 0 }, 
            { leader: LeaderEnum.RED_SHANKS, wins: 16, loses: 9 }, 
            { leader: LeaderEnum.BLACK_TEACH, wins: 7, loses: 3 }, 
            { leader: LeaderEnum.BLUE_DOFFY, wins: 5, loses: 5 }, 
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 8, loses: 6 }, 
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 5, loses: 4 }, 
        ],
        format: FormatEnum.OP09
    },
    {
        leader: LeaderEnum.RED_SHANKS,
        opponents: [
             //0-1
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 0, loses: 1 },
            { leader: LeaderEnum.UB_USOPP, wins: 0, loses: 1 },
            //2-0
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 2, loses: 0 }, 
            //1-3
            { leader: LeaderEnum.BLACK_TEACH, wins: 1, loses: 3 }, 
            //1-1
            { leader: LeaderEnum.RG_SMOKER, wins: 1, loses: 1 }, 
            //2-1
            { leader: LeaderEnum.GREEN_BONNEY, wins: 2, loses: 1 }, 
            //others
            { leader: LeaderEnum.RED_SHANKS, wins: 6, loses: 1 }, 
        ],
        format: FormatEnum.OP10
    },
    {
        leader: LeaderEnum.RED_SHANKS,
        opponents: [
             //0-2
            { leader: LeaderEnum.RED_ZORO, wins: 0, loses: 2 },
             //0-1
            { leader: LeaderEnum.BLUE_BUGGY, wins: 0, loses: 1 },
            { leader: LeaderEnum.PB_LUFFY, wins: 0, loses: 1 },
            //2-0
            { leader: LeaderEnum.UP_LUFFY, wins: 2, loses: 0 }, 
            { leader: LeaderEnum.GP_LUFFY, wins: 2, loses: 0 }, 
            //1-0
            { leader: LeaderEnum.RY_BETTY, wins: 1, loses: 0 }, 
            //1-1
            { leader: LeaderEnum.RG_SMOKER, wins: 1, loses: 1 }, 
            //2-1
            { leader: LeaderEnum.BLACK_TEACH, wins: 2, loses: 1 }, 
        ],
        format: FormatEnum.OP11
    },
    // {
    //     leader: LeaderEnum.RED_SHANKS,
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