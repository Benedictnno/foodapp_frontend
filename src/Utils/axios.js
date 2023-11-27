import axios from "axios";
import { getUserfromLocalStorage } from "./localStorage";
   
const customUrl = axios.create({
  baseURL: "https://storefood-api.onrender.com/api/v1/",
});
customUrl.interceptors.request.use(
  (config) => {
    const user = getUserfromLocalStorage();
    if (user) {
      
      config.headers["Authorization"] = `Bearer ${user.token}`;
      // in the latest version "common" returns undefined
      // config.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default customUrl 