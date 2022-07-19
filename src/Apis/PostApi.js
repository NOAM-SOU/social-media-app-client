import {
  deleteFunction,
  getFunction,
  postFunction,
} from "../Common/GlobalFunction";

class PostApi {
  async followedPosts(userId) {
    return await getFunction("follow/getposts", userId);
  }

  async getUserPosts(userId) {
    return await getFunction("post/new", userId);
  }

  async addPost(post, userId) {
    return await postFunction(`post/addnewpost`, userId, post);
  }

  async deletePost(userId, postId) {
    return await deleteFunction("post/deletepost", `${userId}/${postId}`);
  }

  async getPost(postId) {
    return await getFunction("post/getpost", postId);
  }
}

const postApi = new PostApi();
export default postApi;
