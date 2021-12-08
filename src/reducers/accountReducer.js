import * as accountActionTypes from "../actions/accountActionTypes";

const initialState = {
    user: null,
    players: null,
    player: null,
    error: null
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case accountActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload
            };
        }
        case accountActionTypes.LOGIN_FAIL: {
            return {
                ...state,
                error: action.error
            };
        }
        case accountActionTypes.GET_ACCOUNT_SUCCESS: {
            const { user, players } = action.payload;
            return {
                ...state,
                user: user ? user : null,
                players: players ? players : null,
            };
        }
        case accountActionTypes.ADD_PLAYER_SUCCESS: {
            const { players } = action.payload;
            return {
                ...state,
                players: players,
            };
        }
        case accountActionTypes.EDIT_PLAYER_SUCCESS: {
            const { players } = action.payload;
            return {
                ...state,
                players: players
            };
        }
        case accountActionTypes.GET_PLAYER_SUCCESS: {
            const { player } = action.payload;
            return {
                ...state,
                player: player
            };
        }
        case accountActionTypes.DELETE_PLAYER_SUCCESS: {
            const { players } = action.payload;
            return {
                ...state,
                players: players
            };
        }
        default:
            return state;
    }
};

export default accountReducer;
