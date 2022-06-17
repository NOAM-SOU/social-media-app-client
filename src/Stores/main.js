import authStore from "./AuthStore";
import userStore from "./UserStore";
import api from "../Apis/api";

api.interceptors.response.use(undefined, (config) => {
  if (config.response.status === 401 || config.response.status === 403) {
    authStore.setUser(null);
  }
  return Promise.reject(config);
});

const rootStores = {
  AUTH_STORE: authStore,
  USER_STORE: userStore,
};

export default rootStores;
