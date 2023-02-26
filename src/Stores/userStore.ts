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

class UserStore {
  allUsers: UserProfile[] = [];
  another: UserProfile = userProfile;

  getAllUsers = async () => {
    try {
      const data = await userApi.getAllUsers();
      console.log("data", data.data);
      runInAction(() => {
        this.allUsers = data.data;
      });
    } catch (err) {
      console.log(err);
    }
  };

  constructor() {
    makeObservable(this, {
      allUsers: observable,
      another: observable,
      getAllUsers: action.bound,
    });
  }
}

const userStore = new UserStore();
export default userStore;
