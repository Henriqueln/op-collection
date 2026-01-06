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
import { MARKET_FIXED_OP11 } from "./market-fixed/op11";
import { MARKET_FIXED_EB01 } from "./market-fixed/eb01";
import { MARKET_FIXED_EB02 } from "./market-fixed/eb02";
import { MARKET_FIXED_ST } from "./market-fixed/st";
import { MARKET_FIXED_PROMO } from "./market-fixed/promo";
import { MARKET_FIXED_DON } from "./market-fixed/don";
import { MARKET_FIXED_OP12 } from "./market-fixed/op12";

export const MARKET_WATCH_FIXED = [
    ...MARKET_FIXED_OP01, // 01-Set-2025
    ...MARKET_FIXED_OP02, // 01-Set-2025
    ...MARKET_FIXED_OP03, // 01-Set-2025
    ...MARKET_FIXED_OP04, // 01-Set-2025
    ...MARKET_FIXED_OP05, // 01-Set-2025
    ...MARKET_FIXED_OP06, // 01-Set-2025
    ...MARKET_FIXED_OP07, // 01-Set-2025
    ...MARKET_FIXED_OP08, // 02-Set-2025
    ...MARKET_FIXED_OP09, // 02-Set-2025
    ...MARKET_FIXED_OP10, // 02-Set-2025
    ...MARKET_FIXED_OP11, // 02-Set-2025
    ...MARKET_FIXED_OP12, // 02-Set-2025
    ...MARKET_FIXED_EB01, // 02-Set-2025
    ...MARKET_FIXED_EB02, // 02-Set-2025
    ...MARKET_FIXED_ST,   // 02-Set-2025
    ...MARKET_FIXED_PROMO,// 05-Set-2025
    ...MARKET_FIXED_DON,  // 05-Set-2025

] as MarketWatch[]