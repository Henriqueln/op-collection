import { characterNames } from "./characters";
import { eventsNames } from "./events";

export const nameOptions = [
    '',
    ...characterNames,
    ...eventsNames
].sort((a, b) => a.localeCompare(b));
