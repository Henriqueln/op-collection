import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const OTHERS_RANKED = [
    {
        leader: LeaderEnum.RG_CHOPPER,
        opponents: [
            { leader: LeaderEnum.BLACK_TEACH, wins: 2, loses: 2 },
            { leader: LeaderEnum.UB_USOPP, wins: 2, loses: 2 },
            { leader: LeaderEnum.GP_LUFFY, wins: 2, loses: 0 },
            { leader: LeaderEnum.GREEN_BONNEY, wins: 0, loses: 2 },
            { leader: LeaderEnum.RED_SHANKS, wins: 1, loses: 1 },
        ],
        format: FormatEnum.EB02
    },
    {
        leader: LeaderEnum.RB_KOBY,
        opponents: [
            { leader: LeaderEnum.UP_LUFFY, wins: 0, loses: 2 },
            { leader: LeaderEnum.BLUE_BUGGY, wins: 0, loses: 1 },
            { leader: LeaderEnum.BLACK_TEACH, wins: 0, loses: 1 },
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 0, loses: 1 },
        ],
        format: FormatEnum.OP11
    },
]