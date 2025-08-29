import { FormatEnum, LeaderEnum } from "../tournament.enum";

export const GREEN_BONNEY_RANKED = [
    {
        leader: LeaderEnum.GREEN_BONNEY,
        opponents: [
             //0-1
            { leader: LeaderEnum.BLUE_NAMI, wins: 0, loses: 1 },
            { leader: LeaderEnum.BLUE_BOA, wins: 0, loses: 1 },
        ],
        format: FormatEnum.OP08
    },
    {
        leader: LeaderEnum.GREEN_BONNEY,
        opponents: [
             //0-1
            { leader: LeaderEnum.GREEN_BONNEY, wins: 0, loses: 1 },
            //1-0
            { leader: LeaderEnum.YELLOW_ENEL, wins: 1, loses: 0 }, 
            //1-1
            { leader: LeaderEnum.BY_LUFFY, wins: 1, loses: 1 }, 
            //3-1
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 3, loses: 1 }, 
            { leader: LeaderEnum.BLACK_LUCCI_OP07, wins: 2, loses: 4 }, 
            { leader: LeaderEnum.BLUE_DOFFY, wins: 5, loses: 1 }, 
        ],
        format: FormatEnum.OP08_5
    },
    {
        leader: LeaderEnum.GREEN_BONNEY,
        opponents: [
             //0-2
            { leader: LeaderEnum.BLACK_TEACH, wins: 0, loses: 2 },
            { leader: LeaderEnum.PURPLE_LUFFY, wins: 0, loses: 2 },
            //2-0
            { leader: LeaderEnum.RED_SHANKS, wins: 2, loses: 0 }, 
            { leader: LeaderEnum.BLUE_DOFFY, wins: 2, loses: 0 }, 
            //1-1
            { leader: LeaderEnum.YELLOW_ENEL, wins: 1, loses: 1 }, 
        ],
        format: FormatEnum.OP09
    },
]