import { checkAuthentication } from "../utils";
import {
  ADD_PLAYER_SUCCESS,
  DELETE_PLAYER_SUCCESS,
  EDIT_PLAYER_FAIL,
  EDIT_PLAYER_SUCCESS,
  GET_ACCOUNT_SUCCESS,
  GET_PLAYER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "./accountActionTypes";

export const login = (crendentials) => {
  const { username, password } = crendentials;
  const myStorage = window.localStorage;

  const isValid = checkAuthentication(username, password);

  if (isValid) {
    myStorage.setItem("user", username);
    window.location = "/";
    return { type: LOGIN_SUCCESS, payload: { username } };
  } else {
    return { type: LOGIN_FAIL, error: "Invalid Credentials" };
  }
};

export const getAccount = () => {
  const myStorage = window.localStorage;

  const user = myStorage.getItem("user");
  let players = myStorage.getItem("players");
  players = JSON.parse(players);

  return { type: GET_ACCOUNT_SUCCESS, payload: { user, players } };
};

export const addPlayer = (player) => {
  const myStorage = window.localStorage;
  let players = myStorage.getItem("players");
  player.id = (Math.random()*100).toString();

  if (!players) {
    players = { players: [] };
  } else {
    players = JSON.parse(players);
  }

  players?.players?.push(player);
  myStorage.setItem("players", JSON.stringify(players));

  return { type: ADD_PLAYER_SUCCESS, payload: { players } };
};

export const editPlayer = (player) => {
  const myStorage = window.localStorage;
  let players = myStorage.getItem("players");

  if (!players) {
    return { type: EDIT_PLAYER_FAIL, error: "Player Not Found" };
  } else {
    players = JSON.parse(players);
    let editedPlayerIndex = players.players?.findIndex(
      (p) => p.id === player.id
    );
    players.players[editedPlayerIndex] = player;
  }

  myStorage.setItem("players", JSON.stringify(players));

  return { type: EDIT_PLAYER_SUCCESS, payload: { players } };
};

export const getPlayer = (playerId) => {
  const myStorage = window.localStorage;
  let players = myStorage.getItem("players");

  if (!players) {
    return { type: EDIT_PLAYER_FAIL, error: "Player Not Found" };
  } else {
    players = JSON.parse(players);
    let selectedPlayer = players.players?.find((p) => p.id === playerId);
    return { type: GET_PLAYER_SUCCESS, payload: { player: selectedPlayer } };
  }
};

export const deletePlayer = (playerId) => {
  const myStorage = window.localStorage;
  let players = myStorage.getItem("players");

  if (!players) {
    return { type: EDIT_PLAYER_FAIL, error: "Player Not Found" };
  } else {
    players = JSON.parse(players);
    let newPlayers = players.players?.filter((p) => p.id !== playerId);
    myStorage.setItem("players", JSON.stringify({players: newPlayers}));
    return { type: DELETE_PLAYER_SUCCESS, payload: { players: { players: newPlayers } } };
  }
};
