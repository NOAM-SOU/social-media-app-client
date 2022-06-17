import { getFunction, postFunction } from "../Common/GlobalFunction";

class UserApi {
  async getUser(userId) {
    return await getFunction("follow/getuser", userId);
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

  async deletePost(postId, userId) {
    return await getFunction("post/deletepost", `${userId}/${postId}`);
  }
}

const userApi = new UserApi();
export default userApi;
