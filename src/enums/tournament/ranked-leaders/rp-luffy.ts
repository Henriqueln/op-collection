import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const RP_LUFFY_RANKED = [
    {
        leader: LeaderEnum.RP_LUFFY,
        opponents: [
             //0-1
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 0, loses: 1 },
            { leader: LeaderEnum.GREEN_BONNEY, wins: 0, loses: 1 },
            //2-0
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 2, loses: 0 }, 
            //1-0
            { leader: LeaderEnum.BLUE_DOFFY, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.BLACK_SMOKER, wins: 1, loses: 0 }, 
            //others
            { leader: LeaderEnum.RED_SHANKS, wins: 4, loses: 1 }, 
        ],
        format: FormatEnum.OP09
    },
    {
        leader: LeaderEnum.RP_LUFFY,
        opponents: [
             //0-1
            { leader: LeaderEnum.GREEN_BONNEY, wins: 0, loses: 1 },
            //1-0
            { leader: LeaderEnum.RED_SHANKS, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.BLACK_TEACH, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.BLUE_DOFFY, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.RP_LUFFY, wins: 1, loses: 0 }, 
            //1-1
            { leader: LeaderEnum.YELLOW_KID, wins: 1, loses: 1 }, 
        ],
        format: FormatEnum.OP10
    },
    {
        leader: LeaderEnum.RP_LUFFY,
        opponents: [
             //0-2
            { leader: LeaderEnum.GREEN_BONNEY, wins: 0, loses: 2 },
             //0-1
            { leader: LeaderEnum.BLACK_TEACH, wins: 0, loses: 1 },
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 0, loses: 1 },
            //2-0
            { leader: LeaderEnum.YELLOW_ENEL, wins: 2, loses: 0 }, 
            { leader: LeaderEnum.GP_LUFFY, wins: 3, loses: 0 }, 
            { leader: LeaderEnum.RED_SHANKS, wins: 5, loses: 1 }, 
        ],
        format: FormatEnum.EB02
    },
    // {
    //     leader: LeaderEnum.RP_LUFFY,
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