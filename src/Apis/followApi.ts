import { api } from "./api";

class FollowApi {
  async getFollowedUsers(userId: string) {
    return await api.get(`follow/getfollowedusers/${userId}`);
  }

  async addFollow(userId: string, to: string) {
    return await api.get(`follow/addfollow/${userId}/${to}`);
  }

  async removeFollow(userId: string, from: string) {
    return await api.get(`follow/removefollow/${userId}/${from}`);
  }

  async followStatus(userId: string, other: string) {
    return await api.get(`follow/followstatus/${userId}/${other}`);
  }
}

const followApi = new FollowApi();
export default followApi;
