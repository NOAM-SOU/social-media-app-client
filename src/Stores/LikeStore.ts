import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import likeApi from "../Apis/LikeApi";
import userStore from "./userStore";

class LikeStore {
  addLike = async (userId: string, postId: string) => {
    try {
      const data = await likeApi.addLike(userId, postId);
      console.log("data", data.data);
    } catch (err) {
      console.log(err);
    }
  };
  constructor() {
    makeObservable(this, {});
  }
}

const likeStore = new LikeStore();
export default likeStore;
