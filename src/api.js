import axios from "axios";

const api = axios.create();

//export const getHome = () => api.get("/api");
//export const getExchanges = () => api.get("/exchanges");
//export const getCoins = () => api.get("/coins");
export const getDetail = id => api.get(`/itunes/lookup?id=${id}&country=KR`);
export const getSearch = id => api.get(`/itunes/search?term=${id}&country=kr&entity=software`);
//export const getCoinExchanges = coin => api.get(coin);