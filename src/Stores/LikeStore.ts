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
import postStore from "./PostStore";
import { Error } from "../interfaces/error";
import { AxiosResponse } from "axios";

class LikeStore {
  likes: UserProfile[] = [];
  likeStatus: boolean | null = null;
  errorStatus: Error = {
    error: "",
    code: 0,
  };
  addLike = async (userId: string, postId: string) => {
    try {
      const data = await likeApi.addLike(userId, postId);
      console.log(data.data, "ADD LIKE");

      // runInAction(() => {
      //   this.likes.push(data.data.userLike);
      //   postStore.post = data.data.addLikeToPost;
      // });
      console.log("datallll", data.data);
    } catch (err: any) {
      // runInAction(() => {
      //   this.errorStatus = err.response.data;
      //   console.log("err", err.response.data);
      // });
      console.log(err, "ERROR IS HRE");
    }
  };

  removeLike = async (userId: string, postId: string) => {
    try {
      const data = await likeApi.removeLike(userId, postId);
      console.log(data.data, "ADD removeLike");

      runInAction(() => {
        // this.likes.push(data.data.userLike);
        postStore.post = data.data.removeLikeFromPost;
      });
      // console.log("datallll", data.data);
    } catch (err: any) {
      // runInAction(() => {
      //   this.errorStatus = err.response.data;
      //   console.log("err", err.response.data);
      // });
      console.log(err, "ERROR IS HRE");
    }
  };

  getLikes = async (postId: string) => {
    try {
      const data = await likeApi.getLikes(postId);
      console.log("likes", data.data);

      runInAction(() => {
        this.likes = data.data;
      });
    } catch (err) {
      console.log(err);
    }
  };

  checkLikeStatus = async (
    userId: string,
    postId: string
  ): Promise<boolean> => {
    // try {
    // console.log(this.likeStatus, "THE FIRST LIKE STATUS");

    const data = await likeApi.checkLike(userId, postId);
    console.log("LIKE STATUS", data.data);
    return data.data;

    // runInAction(() => {
    // this.likeStatus = data.data;
    // console.log(this.likeStatus, "LIKE STATUS THIS AFTER RUN IN ACTION");
    // });
    // } catch (err) {
    // console.log(err);
    // }
  };
  constructor() {
    makeObservable(this, {
      likes: observable,
      likeStatus: observable,
      addLike: action.bound,
      getLikes: action.bound,
      checkLikeStatus: action.bound,
    });
  }
}

const likeStore = new LikeStore();
export default likeStore;
