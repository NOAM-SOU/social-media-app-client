import {
  deleteFunction,
  getFunction,
  postFunction,
} from "../Common/GlobalFunction";

class LikeApi {
  async addLike(userId, postId) {
    return await getFunction(`like/addlike`, userId, postId);
  }
}

const likeApi = new LikeApi();
export default likeApi;
