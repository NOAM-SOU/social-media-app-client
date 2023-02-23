import { api } from "./api";

class LikeApi {
  async addLike(userId: string, postId: string) {
    return await api.get(`like/addlike/${userId}/${postId}`);
  }
}

const likeApi = new LikeApi();
export default likeApi;