import api from "./api";

class PostApi {
  /**
   * @param {string} userId
   * @returns {Promise<object>}
   **/
  async followedPosts(userId) {
    const res = await api.get(`/follow/getposts/${userId}`);
    return res.data;
  }

  /**
   * @param {string} userId
   *
   */

  async getUserPosts(userId) {
    const res = await api.get(`post/new/${userId}`);
    return res.data;
  }

  /**
   *
   * @param {object} post
   * @param {string} userId
   * @returns {Promise<object>}
   */

  async addPost(post, userId) {
    const res = await api.post(`post/addnewpost/${userId}`, post);
    return res.data;
  }

  /**
   *
   * @param {string} userId
   * @param {string} postId
   * @returns
   */

  async deletePost(userId, postId) {
    const res = await api.delete(`post/deletepost/${userId}/${postId}`);
    return res.data;
  }
}

const postApi = new PostApi();
export default postApi;
