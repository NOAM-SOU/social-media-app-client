import { api } from "./api";

class FollowApi {
  async getFollowedUsers(userId: string) {
    return await api.get(`follow/getfollowedusers/${userId}`);
  }

  async addFollow(userId: string, to: string) {
    return await api.get(`follow/addfollow/${userId}/${to}`);
  }
}

const followApi = new FollowApi();
export default followApi;
