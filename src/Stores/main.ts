import authStore from "./AuthStore";
import userStore from "./userStore";
import { api } from "../Apis/api";
import postStore from "./PostStore";
import likeStore from "./LikeStore";
import followStore from "./followStore";

api.interceptors.response.use(undefined, (config) => {
  if (config.response.status === 401 || config.response.status === 403) {
    authStore.setUser(null);
  }
  return Promise.reject(config);
});

export const rootStores = {
  authStore: authStore,
  postStore: postStore,
  userStore: userStore,
  likeStore: likeStore,
  followStore: followStore,
};
