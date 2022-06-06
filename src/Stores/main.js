import AuthStore from "./AuthStore";
import api from "../Apis/api";

/**
 * Initiate all stores
 */
const authStore = new AuthStore();

api.interceptors.response.use(undefined, (config) => {
  if (config.response.status === 401) {
    authStore.setUser(null);
  }
  return Promise.reject(config);
});

/**
 * Save the instance in global object
 */
const rootStores = {
  AUTH_STORE: authStore,
};

export default rootStores;
