import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import likeApi from "../Apis/LikeApi";
import { UserProfile } from "../interfaces/user";
import userStore from "./userStore";

class LikeStore {
  likes: UserProfile[] = [];
  addLike = async (userId: string, postId: string) => {
    try {
      const data = await likeApi.addLike(userId, postId);
      console.log("data", data.data);
    } catch (err) {
      console.log(err);
    }
  };

  getLikes = async (postId: string) => {
    try {
      const data = await likeApi.getLikes(postId);
      console.log("likes", data.data.likes);
      runInAction(() => {
        this.likes = data.data.likes;
      });
    } catch (err) {
      console.log(err);
    }
  };
  constructor() {
    makeObservable(this, {
      likes: observable,
      addLike: action.bound,
      getLikes: action.bound,
    });
  }
}

const likeStore = new LikeStore();
export default likeStore;
