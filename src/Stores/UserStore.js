import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import userApi from "../Apis/UserApi";

class AuthStore {
  /**
   * @private
   * @type {object}
   */
  session = {
    userProfile: {},
    errorStatus: 0,
    userPosts: [],
    usersPosts: [],
  };

  get userProfile() {
    return this.session.userProfile;
  }

  get errorStatus() {
    return this.session.errorStatus;
  }

  get userPosts() {
    return this.session.userPosts;
  }

  get usersPosts() {
    return this.session.usersPosts;
  }

  constructor() {
    makeObservable(this, {
      session: observable,
      userProfile: computed,
      errorStatus: computed,
      userPosts: computed,
      usersPosts: computed,
      getUser: action.bound,
      getFollowedPosts: action.bound,
    });
  }

  async getUser(userId) {
    try {
      const data = await userApi.getUser(userId);
      runInAction(() => {
        this.session.userProfile = data;
      });
    } catch (err) {
      runInAction(() => {
        this.session.errorStatus = err.response.data.code;
      });
      console.log(err);
    }
  }

  async getFollowedPosts(userId) {
    try {
      const res = await userApi.followedPosts(userId);
      runInAction(() => {
        this.session.usersPosts = res;
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  }

  async getUserPosts(userId) {
    try {
      const res = await userApi.getUserPosts(userId);
      runInAction(() => {
        this.session.userPosts = res;
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  }

  async addPost(post, userId) {
    try {
      const res = await userApi.addPost(post, userId);
      console.log(res);
      runInAction(() => {
        this.session.userPosts.push(res.newPost);
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  }
}

const authStore = new AuthStore();
export default authStore;
