import axios from "axios";

const api = axios.create();

export const getUpcomingApps = () => api.get("/api/v1/kr/ios-apps/new-apps-we-love/all/10/explicit.json");
export const getUpcomingGames = () => api.get("/api/v1/kr/ios-apps/new-games-we-love/all/10/explicit.json");
export const getTopFreeApps = () => api.get("/api/v1/kr/ios-apps/top-free/all/25/explicit.json");
export const getTopPaidApps = () => api.get("/api/v1/kr/ios-apps/top-paid/all/25/explicit.json");
export const getTopFreeGames = () => api.get("/api/v1/kr/ios-apps/top-free/games/25/explicit.json");
export const getTopPaidGames = () => api.get("/api/v1/kr/ios-apps/top-paid/games/25/explicit.json");
export const getDetail = id => api.get(`/lookup?id=${id}&country=KR`);
export const getSearch = id => api.get(`/search?term=${id}&country=kr&entity=software`);