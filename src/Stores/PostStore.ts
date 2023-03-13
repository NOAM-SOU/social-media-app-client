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
  anotherPosts: Post[] = [];
  followedPosts: Post[] = [];

  addPost = async (post: Post | FormData, userId: string) => {
    try {
      const res = await postApi.addPost(post, userId);
      // console.log(res);
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
      // console.log(postId, "POST ID FROM THE POSTPAGE FUNCt");

      const res = await postApi.getPost(postId);
      // console.log(res);

      runInAction(() => {
        this.post = res.data;
        console.log(this.post, "LOG OF THIS>POST");
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };

  getUserPosts = async (userId: string, otherPosts: boolean = true) => {
    try {
      const res = await postApi.getUserPosts(userId);
      // this.userPosts = res.data;
      runInAction(() => {
        if (otherPosts) {
          this.userPosts = res.data;
        }
        this.anotherPosts = res.data;
      });
      runInAction(() => {
        // this.post.img = res.data.dataUrl;
        // console.log(res.data);
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };

  getFollowedPosts = async (userId: string) => {
    try {
      const res = await postApi.followedPosts(userId);
      // console.log(res.data);

      runInAction(() => {
        this.followedPosts = res.data;

        // this.followedPosts = res.data;
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };

  constructor() {
    makeObservable(this, {
      userPosts: observable,
      followedPosts: observable,
      anotherPosts: observable,
      post: observable,
      getFollowedPosts: action.bound,
      getUserPosts: action.bound,
      addPost: action.bound,
    });
  }
}

const postStore = new PostStore();
export default postStore;
