import { api } from "./api";

class LikeApi {
  async addLike(userId: string, postId: string) {
    return await api.get(`like/addlike/${userId}/${postId}`);
  }

  async removeLike(userId: string, postId: string) {
    return await api.get(`like/removelike/${userId}/${postId}`);
  }

  async getLikes(postId: string) {
    console.log("api idpost", postId);

    return await api.get(`like/getlikes/${postId}`);
  }

  async checkLike(userId: string, postId: string) {
    return await api.get(`like/checklike/${userId}/${postId}`);
  }
}

const likeApi = new LikeApi();
export default likeApi;
