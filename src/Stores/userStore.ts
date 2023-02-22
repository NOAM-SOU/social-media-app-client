import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import userApi from "../Apis/UserApi";
import { Post } from "../interfaces/post";
import { UserProfile } from "../interfaces/user";
import { userProfile } from "../tools/userStoreTool";

// import userApi from "../Apis/UserApi";

class UserStore {
  allUsers: UserProfile[] = [];
  another: UserProfile = userProfile;

  getAllUsers = async () => {
    try {
      const data = await userApi.getAllUsers();
      console.log("data", data.data);
      this.allUsers = data.data;
    } catch (err) {
      console.log(err);
    }
  };

  constructor() {
    makeObservable(this, {
      //   session: observable,
      allUsers: observable,
      another: observable,
      //   anotherPosts: computed,
      //   post: computed,
      //   getUser: action.bound,
      //   getFollowedPosts: action.bound,
      getAllUsers: action.bound,
      //   getUserPosts: action.bound,
      //   getAnotherPosts: action.bound,
    });
  }
}

const userStore = new UserStore();
export default userStore;
