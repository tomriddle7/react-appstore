import axios from "axios";

const api = axios.create();

export const getHome = () => api.get("/api/v1/kr/ios-apps/new-apps-we-love/all/10/explicit.json");
export const getDetail = id => api.get(`/lookup?id=${id}&country=KR`);
export const getSearch = id => api.get(`/search?term=${id}&country=kr&entity=software`);