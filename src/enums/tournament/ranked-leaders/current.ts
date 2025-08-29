import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const CURRENT_RANKED = [
    {
        leader: LeaderEnum.RED_RAYLEIGH,
        opponents: [
            { leader: LeaderEnum.GREEN_BONNEY, wins: 1, loses: 0 },
            { leader: LeaderEnum.GY_YAMATO, wins: 1, loses: 0 },
            { leader: LeaderEnum.UP_SANJI, wins: 1, loses: 1 },
            { leader: LeaderEnum.RED_RAYLEIGH, wins: 4, loses: 3 },
            { leader: LeaderEnum.GREEN_ZORO, wins: 4, loses: 3 },
            { leader: LeaderEnum.BLACK_TEACH, wins: 3, loses: 3 },
            { leader: LeaderEnum.RY_BETTY, wins: 0, loses: 1 },
            { leader: LeaderEnum.GP_LUFFY, wins: 0, loses: 1 },
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 0, loses: 1 },
            { leader: LeaderEnum.PB_LUFFY, wins: 3, loses: 0 },
            { leader: LeaderEnum.UB_SAKAZUKI, wins: 1, loses: 0 },
            { leader: LeaderEnum.UP_REIJU, wins: 1, loses: 0 },
            { leader: LeaderEnum.BLUE_KUZAN, wins: 1, loses: 0 },
        ],
        format: FormatEnum.OP12
    },
    {
        leader: LeaderEnum.RED_SHANKS,
        opponents: [
            { leader: LeaderEnum.RED_RAYLEIGH, wins: 0, loses: 1 },
            { leader: LeaderEnum.BLACK_TEACH, wins: 0, loses: 1 },
            { leader: LeaderEnum.PB_LUFFY, wins: 0, loses: 1 },
            { leader: LeaderEnum.GP_LUFFY, wins: 2, loses: 0 }, 
            { leader: LeaderEnum.BLUE_KUZAN, wins: 2, loses: 0 }, 
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.GREEN_ZORO, wins: 1, loses: 2 }, 
            { leader: LeaderEnum.UB_SAKAZUKI, wins: 1, loses: 1 }, 
            { leader: LeaderEnum.RB_KOBY, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.UP_REIJU, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 1, loses: 0 }, 
        ],
        format: FormatEnum.OP12
    },
    {
        leader: LeaderEnum.RED_ZORO,
        opponents: [
            { leader: LeaderEnum.RED_RAYLEIGH, wins: 2, loses: 2 },
            { leader: LeaderEnum.BLACK_TEACH, wins: 3, loses: 1 },
            { leader: LeaderEnum.GREEN_ZORO, wins: 3, loses: 1 },
            { leader: LeaderEnum.GP_LUFFY, wins: 2, loses: 0 },
            { leader: LeaderEnum.BLUE_KUZAN, wins: 0, loses: 1 },
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 2, loses: 0 },
            { leader: LeaderEnum.GREEN_BONNEY, wins: 1, loses: 0 },
            { leader: LeaderEnum.UP_LUFFY, wins: 3, loses: 0 },
            { leader: LeaderEnum.RG_SMOKER, wins: 0, loses: 1 },
            { leader: LeaderEnum.YELLOW_KID, wins: 1, loses: 2 },
        ],
        format: FormatEnum.OP12
    },
    {
        leader: LeaderEnum.RP_LUFFY,
        opponents: [
            { leader: LeaderEnum.BLUE_KUZAN, wins: 0, loses: 2 },
            { leader: LeaderEnum.GREEN_BONNEY, wins: 0, loses: 2 },
            { leader: LeaderEnum.RY_BETTY, wins: 0, loses: 1 },
            { leader: LeaderEnum.YELLOW_ENEL, wins: 0, loses: 1 },
            { leader: LeaderEnum.RED_SHANKS, wins: 2, loses: 0 }, 
            { leader: LeaderEnum.BLUE_BUGGY, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.RG_SMOKER, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.RED_RAYLEIGH, wins: 1, loses: 1 }, 
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 1, loses: 1 }, 
            { leader: LeaderEnum.GREEN_ZORO, wins: 3, loses: 2 }, 
            { leader: LeaderEnum.UP_LUFFY, wins: 1, loses: 3 }, 
        ],
        format: FormatEnum.OP12
    },
    {
        leader: LeaderEnum.RU_MARCO,
        opponents: [
            { leader: LeaderEnum.BLUE_KUZAN, wins: 0, loses: 1 },
            { leader: LeaderEnum.UB_SAKAZUKI, wins: 0, loses: 1 },
        ],
        format: FormatEnum.OP12
    },
    {
        leader: LeaderEnum.YELLOW_KALGARA,
        opponents: [
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 0, loses: 1 },
            { leader: LeaderEnum.RG_SMOKER, wins: 0, loses: 1 },
            { leader: LeaderEnum.YELLOW_ENEL, wins: 0, loses: 1 },
            { leader: LeaderEnum.PB_LUFFY, wins: 0, loses: 1 },
            { leader: LeaderEnum.RED_SHANKS, wins: 2, loses: 0 }, 
            { leader: LeaderEnum.BLACK_TEACH, wins: 1, loses: 0 }, 
            { leader: LeaderEnum.GREEN_ZORO, wins: 1, loses: 2 }, 
            { leader: LeaderEnum.GP_LUFFY, wins: 1, loses: 1 }, 
            { leader: LeaderEnum.BLUE_KUZAN, wins: 1, loses: 1 }, 
            { leader: LeaderEnum.YELLOW_KID, wins: 1, loses: 1 }, 
            { leader: LeaderEnum.RED_RAYLEIGH, wins: 3, loses: 0 }, 
        ],
        format: FormatEnum.OP12
    },
    {
        leader: LeaderEnum.UP_SANJI,
        opponents: [
            { leader: LeaderEnum.RED_RAYLEIGH, wins: 0, loses: 2 },
            { leader: LeaderEnum.UP_SANJI, wins: 0, loses: 1 },
            { leader: LeaderEnum.GREEN_ZORO, wins: 0, loses: 1 },
            { leader: LeaderEnum.GP_LUFFY, wins: 0, loses: 1 },
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 1, loses: 0 },
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 1, loses: 0 },
            { leader: LeaderEnum.GREEN_BONNEY, wins: 0, loses: 2 },
        ],
        format: FormatEnum.OP12
    },
    {
        leader: LeaderEnum.PY_ROSINANTE,
        opponents: [
            { leader: LeaderEnum.RED_RAYLEIGH, wins: 1, loses: 4 },
            { leader: LeaderEnum.BLACK_TEACH, wins: 2, loses: 0 },
            { leader: LeaderEnum.GREEN_ZORO, wins: 0, loses: 1 },
            { leader: LeaderEnum.GP_LUFFY, wins: 0, loses: 1 },
            { leader: LeaderEnum.BLUE_KUZAN, wins: 1, loses: 0 },
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 1, loses: 1 },
            { leader: LeaderEnum.GREEN_BONNEY, wins: 0, loses: 1 },
            { leader: LeaderEnum.RED_SHANKS, wins: 0, loses: 2 },
        ],
        format: FormatEnum.OP12
    },
    {
        leader: LeaderEnum.GU_ZORO_SANJI,
        opponents: [
            { leader: LeaderEnum.RED_RAYLEIGH, wins: 1, loses: 2 },
            { leader: LeaderEnum.GY_YAMATO, wins: 1, loses: 0 },
            { leader: LeaderEnum.GREEN_ZORO, wins: 2, loses: 3 },
            { leader: LeaderEnum.YELLOW_KID, wins: 0, loses: 1 },
        ],
        format: FormatEnum.OP12
    },
    {
        leader: LeaderEnum.BLUE_ACE_NEWGATE,
        opponents: [
            { leader: LeaderEnum.BLACK_TEACH, wins: 1, loses: 1 },
            { leader: LeaderEnum.GREEN_ZORO, wins: 0, loses: 3 },
            { leader: LeaderEnum.YELLOW_KID, wins: 1, loses: 0 },
        ],
        format: FormatEnum.OP12
    },
]