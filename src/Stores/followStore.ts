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
      // console.log("data", data.data);
      authStore.userProfile = data.data.newFollowed;
      userStore.another = data.data.newFollow;
      runInAction(() => {
        this.followedUsers.push(data.data.newFollow._id);
      });
      // console.log("follow", this.follow);

      // console.log("follow-now", this.follow);
    } catch (err) {
      console.log(err);
    }
  };

  removeFollow = async (userId: string, from: string) => {
    try {
      const data = await followApi.removeFollow(userId, from);
      // console.log("data", data.data);
      authStore.userProfile = data.data.removeFromUser;
      userStore.another = data.data.removeFromFollowedUser;
      runInAction(() => {
        this.followedUsers.filter(
          (id) => id !== data.data.removeFromFollowedUser._id
        );
      });

      // console.log("followeduserrrrr", this.followedUsers);
    } catch (err) {
      console.log(err);
    }
  };

  getFollowedUsers = async (userId: string) => {
    try {
      const data = await followApi.getFollowedUsers(userId);
      // console.log("followedusers", data.data);
      runInAction(() => {
        this.followedUsers = data.data;
      });
    } catch (err) {
      console.log(err);
    }
  };

  checkFollowStatus = async (
    userId: string,
    otherId: string
  ): Promise<boolean> => {
    const data = await followApi.followStatus(userId, otherId);
    // console.log(data.data, "FOLLOW STATUS");
    return data.data;
  };
  constructor() {
    makeObservable(this, {
      followedUsers: observable,
      addFollow: action.bound,
      getFollowedUsers: action.bound,
      removeFollow: action.bound,
      checkFollowStatus: action.bound,
    });
  }
}

const followStore = new FollowStore();
export default followStore;
