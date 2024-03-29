import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import userApi from "../Apis/UserApi";

class UserStore {
  /**
   * @private
   * @type {object}
   */
  session = {
    userProfile: {},
    errorStatus: 0,
    userPosts: [],
    usersPosts: [],
    allUsers: [],
    another: {},
    anotherPosts: [],
    post: {},
  };

  get userProfile() {
    return this.session.userProfile;
  }
  get another() {
    return this.session.another;
  }

  get anotherPosts() {
    return this.session.anotherPosts;
  }

  get post() {
    return this.session.post;
  }

  get allUsers() {
    return this.session.allUsers;
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
      allUsers: computed,
      another: computed,
      anotherPosts: computed,
      post: computed,
      getUser: action.bound,
      getFollowedPosts: action.bound,
      getAllUsers: action.bound,
      getUserPosts: action.bound,
      getAnotherPosts: action.bound,
      addPost: action.bound,
      getPost: action.bound,
      deletePost: action.bound,
    });
  }

  async getUser(userId, boolean) {
    try {
      const data = await userApi.getUser(userId);
      console.log("store data", data);
      runInAction(() => {
        if (boolean) this.session.userProfile = data;
        else this.session.another = data;
      });
    } catch (err) {
      runInAction(() => {
        this.session.errorStatus = err.response.data.code;
      });
      console.log(err);
    }
  }

  getAllUsers = async () => {
    try {
      const data = await userApi.getAllUsers();
      runInAction(() => {
        this.session.allUsers = data;
      });
    } catch (err) {
      console.log(err);
    }
  };

  getFollowedPosts = async (userId) => {
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
  };

  getUserPosts = async (userId) => {
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
  };

  getAnotherPosts = async (userId) => {
    try {
      const res = await userApi.getUserPosts(userId);
      runInAction(() => {
        this.session.anotherPosts = res;
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };

  addPost = async (post, userId) => {
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
  };

  deletePost = async (userId, postId) => {
    try {
      const res = await userApi.deletePost(userId, postId);
      console.log("userId", userId, "postId", postId);
      console.log(res);
      runInAction(() => {
        this.session.userProfile = res;
        // this.session.userPosts.filter((post) => post._id !== postId);
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };
  getPost = async (postId) => {
    try {
      const res = await userApi.getPost(postId);
      runInAction(() => {
        this.session.post = res;
        console.log(res);
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };

  addLike = async (userId, postId) => {
    try {
      const res = await userApi.addLike(userId, postId);
      runInAction(() => {
        this.session.post = res;
        console.log(res);
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };
}

const userStore = new UserStore();
export default userStore;
