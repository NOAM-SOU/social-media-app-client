import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import postApi from "../Apis/PostApi";
import { Post } from "../interfaces/post";

class PostStore {
  userPosts: Post[] = [];
  post: Post = {
    title: "",
    content: "",
    img: "",
  };
  newPost: Post = {
    _id: "",
    title: "",
    content: "",
    img: "",
  };

  addPost = async (post: Post | FormData, userId: string) => {
    try {
      const res = await postApi.addPost(post, userId);
      console.log(res);
      runInAction(() => {
        this.newPost = res.data.newPost;
        // this.userPosts.push(res);
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };

  getPost = async (postId: string) => {
    try {
      const res = await postApi.getPost(postId);
      console.log(res);

      runInAction(() => {
        this.post = res.data.data;
        this.post.img = res.data.dataUrl;
        console.log(res.data);
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };

  getUserPosts = async (userId: string) => {
    try {
      const res = await postApi.getUserPosts(userId);
      this.userPosts = res.data;

      runInAction(() => {
        // this.post.img = res.data.dataUrl;
        console.log(res.data);
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };

  constructor() {
    makeObservable(this, {
      // session: observable,
      // errorStatus: computed,
      userPosts: observable,
      // usersPosts: computed,
      // allUsers: computed,
      // another: computed,
      // anotherPosts: computed,
      post: observable,
      // getUser: action.bound,
      // getFollowedPosts: action.bound,
      // getAllUsers: action.bound,
      getUserPosts: action.bound,
      // getAnotherPosts: action.bound,
      addPost: action.bound,
      // getPost: action.bound,
      // deletePost: action.bound,
    });
  }
}

const postStore = new PostStore();
export default postStore;
