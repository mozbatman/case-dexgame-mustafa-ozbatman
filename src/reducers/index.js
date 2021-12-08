import { combineReducers } from "redux";

import gamesReducer from "./gamesReducer";
import accountReducer from "./accountReducer";

export default combineReducers({
    games: gamesReducer,
    account: accountReducer,
});
