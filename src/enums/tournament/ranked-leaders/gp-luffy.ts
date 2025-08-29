import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const GP_LUFFY_RANKED = [
    {
        leader: LeaderEnum.GP_LUFFY,
        opponents: [
             //0-2
            { leader: LeaderEnum.YELLOW_ENEL, wins: 0, loses: 2 },
            //1-0
            { leader: LeaderEnum.RG_SMOKER, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.YELLOW_KID, wins: 1, loses: 0 }, 
            //1-2
            { leader: LeaderEnum.GP_LUFFY, wins: 1, loses: 2 }, 
            //1-1
            { leader: LeaderEnum.BLACK_TEACH, wins: 1, loses: 1 }, 
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 1, loses: 1 }, 
            //2-1
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 2, loses: 1 }, 
            //3-1
            { leader: LeaderEnum.RED_SHANKS, wins: 3, loses: 1 }, 
        ],
        format: FormatEnum.EB02
    },
    {
        leader: LeaderEnum.GP_LUFFY,
        opponents: [
             //0-2
            { leader: LeaderEnum.BLACK_TEACH, wins: 0, loses: 1 },
            //1-0
            { leader: LeaderEnum.UP_LUFFY, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.GP_LUFFY, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.RG_SMOKER, wins: 1, loses: 0 }, 
        ],
        format: FormatEnum.OP11
    },
]