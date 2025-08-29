import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const RU_MARCO_RANKED = [
    {
        leader: LeaderEnum.RU_MARCO,
        opponents: [
             //0-1
            { leader: LeaderEnum.RU_MARCO, wins: 0, loses: 1 },
            //1-0
            { leader: LeaderEnum.GREEN_BONNEY, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.RED_ZORO, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.BLUE_DOFFY, wins: 1, loses: 0 }, 
            //1-2
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 1, loses: 2 }, 
            { leader: LeaderEnum.PY_PUDDING, wins: 1, loses: 2 }, 
            //1-1
            { leader: LeaderEnum.BLACK_LUFFY, wins: 1, loses: 1 }, 
            //2-1
            { leader: LeaderEnum.BY_LUFFY, wins: 2, loses: 1 }, 
        ],
        format: FormatEnum.OP08
    },
    {
        leader: LeaderEnum.RU_MARCO,
        opponents: [
            //1-0
            { leader: LeaderEnum.BLACK_LUFFY, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.UP_REIJU, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.YELLOW_ENEL, wins: 4, loses: 1 }, 
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 1, loses: 3 }, 
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 3, loses: 3 }, 
            { leader: LeaderEnum.GREEN_BONNEY, wins: 3, loses: 3 }, 
            { leader: LeaderEnum.BY_LUFFY, wins: 2, loses: 7 }, 
            { leader: LeaderEnum.BLUE_DOFFY, wins: 9, loses: 11 }, 
        ],
        format: FormatEnum.OP08_5
    },
    {
        leader: LeaderEnum.RU_MARCO,
        opponents: [
             //0-1
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 0, loses: 1 },
            //1-0
            { leader: LeaderEnum.BLACK_LUFFY, wins: 1, loses: 0 }, 
            //2-2
            { leader: LeaderEnum.RP_LUFFY, wins: 2, loses: 2 }, 
            //2-1
            { leader: LeaderEnum.BLACK_SMOKER, wins: 2, loses: 1 }, 
            //3-1
            { leader: LeaderEnum.RED_SHANKS, wins: 3, loses: 1 }, 
            { leader: LeaderEnum.BLACK_TEACH, wins: 4, loses: 2 }, 
            { leader: LeaderEnum.BLUE_DOFFY, wins: 4, loses: 3 }, 
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 2, loses: 3 }, 
            { leader: LeaderEnum.GREEN_BONNEY, wins: 4, loses: 0 }, 
        ],
        format: FormatEnum.OP09
    },
    {
        leader: LeaderEnum.RU_MARCO,
        opponents: [
             //0-2
            { leader: LeaderEnum.GREEN_BONNEY, wins: 0, loses: 2 },
             //0-1
            { leader: LeaderEnum.RP_LUFFY, wins: 0, loses: 1 },
            { leader: LeaderEnum.YELLOW_KID, wins: 0, loses: 1 },
            //1-0
            { leader: LeaderEnum.RED_SHANKS, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.RG_SMOKER, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.UB_USOPP, wins: 1, loses: 0 }, 
            //1-1
            { leader: LeaderEnum.BLUE_DOFFY, wins: 1, loses: 1 }, 
            { leader: LeaderEnum.BLACK_TEACH, wins: 1, loses: 3 }, 
        ],
        format: FormatEnum.OP10
    },
    {
        leader: LeaderEnum.RU_MARCO,
        opponents: [
             //0-1
            { leader: LeaderEnum.UB_USOPP, wins: 0, loses: 1 },
            //1-0
            { leader: LeaderEnum.YELLOW_KID, wins: 1, loses: 0 }, 
            //1-3
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 1, loses: 3 }, 
            //1-1
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 1, loses: 1 }, 
            //2-1
            { leader: LeaderEnum.GREEN_BONNEY, wins: 2, loses: 1 }, 
            { leader: LeaderEnum.BLACK_TEACH, wins: 2, loses: 3 }, 
            { leader: LeaderEnum.GP_LUFFY, wins: 5, loses: 3 }, 
            { leader: LeaderEnum.RED_SHANKS, wins: 2, loses: 6 }, 
        ],
        format: FormatEnum.EB02
    },
    {
        leader: LeaderEnum.RU_MARCO,
        opponents: [
            //0-3
            { leader: LeaderEnum.BLACK_TEACH, wins: 0, loses: 3 },
            //2-0
            { leader: LeaderEnum.PB_LUFFY, wins: 2, loses: 0 }, 
            //1-0
            { leader: LeaderEnum.UY_NAMI, wins: 1, loses: 0 }, 
            //1-2
            { leader: LeaderEnum.RY_BETTY, wins: 1, loses: 2 }, 
            //1-1
            { leader: LeaderEnum.GY_LAW, wins: 1, loses: 1 }, 
            //2-2
            { leader: LeaderEnum.GP_LUFFY, wins: 2, loses: 2 }, 
            //3-1
            { leader: LeaderEnum.BLUE_BUGGY, wins: 3, loses: 1 }, 
            { leader: LeaderEnum.RG_SMOKER, wins: 3, loses: 1 }, 
            //Others
            { leader: LeaderEnum.UP_LUFFY, wins: 6, loses: 4 }, 
        ],
        format: FormatEnum.OP11
    },
]