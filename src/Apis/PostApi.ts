import { Post } from "../interfaces/post";
import { api } from "./api";

class PostApi {
  async followedPosts(userId: string) {
    return await api.get(`/follow/getposts/${userId}`);
  }

  async getUserPosts(userId: string) {
    return await api.get(`/post/new/${userId}`);
  }

  async addPost(post: Post | FormData, userId: string) {
    console.log("post", post, "userId:", userId);

    return await api.post(`/post/addnewpost/${userId}`, post);
  }

  async deletePost(userId: string, postId: string) {
    return await api.delete(`/post/deletepost${userId}/${postId}`);
  }

  async getPost(postId: string) {
    return await api.get(`/post/getpost/${postId}`);
  }
}

const postApi = new PostApi();
export default postApi;
