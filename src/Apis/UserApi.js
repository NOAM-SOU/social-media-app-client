import {
  deleteFunction,
  getFunction,
  postFunction,
} from "../Common/GlobalFunction";

class UserApi {
  async getUser(userId) {
    return await getFunction("follow/getuser", userId);
  }

  async getAllUsers() {
    return await getFunction("follow/getall");
  }

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
  async addLike(userId, postId) {
    return await getFunction(`like/addlike`, `${userId}/${postId}`);
  }
}

const userApi = new UserApi();
export default userApi;
