import { MarketWatch } from "src/app/entities/market";
import { MARKET_FIXED_OP01 } from "./market-fixed/op01";
import { MARKET_FIXED_OP02 } from "./market-fixed/op02";
import { MARKET_FIXED_OP03 } from "./market-fixed/op03";
import { MARKET_FIXED_OP04 } from "./market-fixed/op04";
import { MARKET_FIXED_OP05 } from "./market-fixed/op05";
import { MARKET_FIXED_OP06 } from "./market-fixed/op06";
import { MARKET_FIXED_OP07 } from "./market-fixed/op07";
import { MARKET_FIXED_OP08 } from "./market-fixed/op08";
import { MARKET_FIXED_OP09 } from "./market-fixed/op09";
import { MARKET_FIXED_OP10 } from "./market-fixed/op10";

export const MARKET_WATCH_FIXED = [
    ...MARKET_FIXED_OP01,
    ...MARKET_FIXED_OP02,
    ...MARKET_FIXED_OP03,
    ...MARKET_FIXED_OP04,
    ...MARKET_FIXED_OP05,
    ...MARKET_FIXED_OP06,
    ...MARKET_FIXED_OP07,
    ...MARKET_FIXED_OP08,
    ...MARKET_FIXED_OP09,
    ...MARKET_FIXED_OP10,
    
] as MarketWatch[]