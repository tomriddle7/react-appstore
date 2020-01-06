import axios from "axios";

const api = axios.create();

export const getUpcomingApps = () => api.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/new-apps-we-love/all/10/explicit.json");
export const getUpcomingGames = () => api.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/new-games-we-love/all/10/explicit.json");
export const getTopFreeApps = () => api.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/all/25/explicit.json");
export const getTopPaidApps = () => api.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/all/25/explicit.json");
export const getTopFreeGames = () => api.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/games/25/explicit.json");
export const getTopPaidGames = () => api.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/games/25/explicit.json");
export const getDetail = id => api.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${id}&country=KR`);
export const getSearch = id => api.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${id}&country=kr&entity=software`);