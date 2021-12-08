import * as gameActionTypes from "../actions/gameActionTypes";
import games from '../mockData/mockGames.json';

const initialState = {
    fetchingGames: false,
    games: games,
    fetchGamesError: null,
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case gameActionTypes.GET_GAMES: {
            return {
                ...state,
                fetchingGames: true,
            };
        }
        case gameActionTypes.GET_GAMES_SUCCESS: {
            return {
                ...state,
                fetchingGames: false,
                games: action.payload
            };
        }
        case gameActionTypes.GET_GAMES_FAIL: {
            return {
                ...state,
                fetchingGames: false,
                fetchGamesError: action.error,
            };
        }
        default:
            return state;
    }
};

export default gamesReducer;
