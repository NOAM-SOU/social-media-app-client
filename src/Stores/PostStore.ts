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

  addPost = async (post: Post | FormData, userId: string) => {
    try {
      const res = await postApi.addPost(post, userId);
      console.log(res);
      runInAction(() => {
        // this.userPosts.push(res);
      });
    } catch (err) {
      runInAction(() => {
        console.log(err);
      });
    }
  };

  getPost = async () => {
    try {
      const res = await postApi.getPost();
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

  constructor() {
    makeObservable(this, {
      // session: observable,
      // userProfile: computed,
      // errorStatus: computed,
      // userPosts: computed,
      // usersPosts: computed,
      // allUsers: computed,
      // another: computed,
      // anotherPosts: computed,
      post: observable,
      // getUser: action.bound,
      // getFollowedPosts: action.bound,
      // getAllUsers: action.bound,
      // getUserPosts: action.bound,
      // getAnotherPosts: action.bound,
      addPost: action.bound,
      // getPost: action.bound,
      // deletePost: action.bound,
    });
  }
}

const postStore = new PostStore();
export default postStore;
