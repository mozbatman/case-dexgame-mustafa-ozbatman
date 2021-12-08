import { GET_GAMES } from "./gameActionTypes";

const getGamesEndpoint = () => '/docs/mock-data.json';

export const getGames = () => {
  return {
    type: GET_GAMES,
    payload: {
      request: {
        method: 'GET',
        url: getGamesEndpoint(),
        withCredentials: false,
      },
    },
  };
};
