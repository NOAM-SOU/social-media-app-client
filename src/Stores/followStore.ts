import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import followApi from "../Apis/followApi";
import likeApi from "../Apis/LikeApi";
import { UserProfile } from "../interfaces/user";
import authStore from "./AuthStore";
import userStore from "./userStore";

class FollowStore {
  follow: boolean = false;
  followedUsers: UserProfile[] = [];
  addFollow = async (userId: string, to: string) => {
    try {
      const data = await followApi.addFollow(userId, to);
      console.log("data", data.data);
      authStore.userProfile = data.data.newFollowed;
      userStore.another = data.data.newFollow;
      this.followedUsers.push(data.data.newFollow._id);
      console.log("follow", this.follow);

      console.log("follow-now", this.follow);
    } catch (err) {
      console.log(err);
    }
  };

  getFollowedUsers = async (userId: string) => {
    try {
      const data = await followApi.getFollowedUsers(userId);
      console.log("followedusers", data.data);
      this.followedUsers = data.data;
    } catch (err) {
      console.log(err);
    }
  };
  constructor() {
    makeObservable(this, {});
  }
}

const followStore = new FollowStore();
export default followStore;
