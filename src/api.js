import axios from "axios";

const api = axios.create();

export const storeApi = {
  getUpcomingApps: () => api.get("api/v1/kr/apps/new-apps-we-love/all/10/explicit.json"),
  getUpcomingGames: () => api.get("api/v1/kr/ios-apps/new-games-we-love/all/10/explicit.json"),
  getTopFreeApps: () => api.get("api/v2/kr/apps/top-free/25/apps.json"),
  getTopPaidApps: () => api.get("api/v2/kr/apps/top-paid/25/apps.json"),
  getTopFreeGames: () => api.get("api/v1/kr/ios-apps/top-free/games/25/explicit.json"),
  getTopPaidGames: () => api.get("api/v1/kr/ios-apps/top-paid/games/25/explicit.json"),
  getDetail: id => api.get(`lookup?id=${id}&country=KR`),
  search: term => api.get(`search?term=${term}&country=kr&entity=software`),
};
