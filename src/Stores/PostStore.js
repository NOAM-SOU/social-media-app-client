import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import postApi from "../Apis/PostApi";

class PostStore {
  /**
   * @private
   * @type {object}
   */
  session = {
    userPosts: [],
    errorStatus: 0,
    usersPosts: [],
  };

  get userPosts() {
    return this.session.userPosts;
  }

  get errorStatus() {
    return this.session.errorStatus;
  }

  get usersPosts() {
    return this.session.usersPosts;
  }

  constructor() {
    makeObservable(this, {
      session: observable,
      userPosts: computed,
      errorStatus: computed,
      usersPosts: computed,
      getUserPosts: action.bound,
      getFollowedPosts: action.bound,
    });
  }

  /**
   *
   * @param {string} userId
   * @returns {Promise<[object]>}
   */

  async getUserPosts(userId) {
    try {
      const res = await postApi.getUserPosts(userId);
      runInAction(() => {
        this.session.userPosts = res;
      });
    } catch (err) {
      runInAction(() => {
        this.session.errorStatus = err.response.status;
      });
    }
  }

  async getFollowedPosts(userId) {
    try {
      const res = await postApi.followedPosts(userId);
      runInAction(() => {
        this.session.usersPosts = res;
      });
    } catch (err) {
      runInAction(() => {
        this.session.errorStatus = err.response.status;
      });
    }
  }

  async addPost(post, userId) {
    try {
      const res = await postApi.addPost(post, userId);
      console.log(res);
      runInAction(() => {
        this.session.userPosts.push(res);
      });
    } catch (err) {
      runInAction(() => {
        console.log(this.session.errorStatus);
        this.session.errorStatus = err.response.status;
      });
    }
  }

  async deletePost(userId, postId) {
    try {
      const res = await postApi.deletePost(userId, postId);
      runInAction(() => {
        this.session.userPosts;
      });
    } catch (err) {
      runInAction(() => {
        this.session.errorStatus = err.response.status;
      });
    }
  }
}

const postStore = new PostStore();
export default postStore;
