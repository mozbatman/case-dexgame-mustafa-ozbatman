import axios from "axios";

const client = axios.create({
    baseURL: "https://dexgame.io",
    responseType: "application/json",
    headers: { "Access-Control-Allow-Origin": "*" },
});

export default client;
