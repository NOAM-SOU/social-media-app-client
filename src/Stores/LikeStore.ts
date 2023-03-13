import { action, makeObservable, observable, runInAction } from "mobx";
import likeApi from "../Apis/LikeApi";
import { UserProfile } from "../interfaces/user";
import { Error } from "../interfaces/error";

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
    } catch (err: any) {
      console.log(err, "ERROR IS HRE");
    }
  };

  removeLike = async (userId: string, postId: string) => {
    try {
      const data = await likeApi.removeLike(userId, postId);
      console.log(data.data, "ADD removeLike");
    } catch (err: any) {
      console.log(err, "ERROR IS HRE");
    }
  };

  getLikes = async (postId: string) => {
    try {
      const data = await likeApi.getLikes(postId);
      // console.log("likes", data.data);

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
    const data = await likeApi.checkLike(userId, postId);
    return data.data;
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
