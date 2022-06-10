import api, { loginApi } from "./api";

class AuthApi {
  /**
   * @param {object} user
   */
  signUp = async (user) => {
    const res = await loginApi.post("authuser/register", user);
    return res.data;
  };

  login = async (user) => {
    const res = await loginApi.post("authuser/login", user);
    return res.data;
  };

  getUser = async (userId) => {
    const res = await api.get(`follow/getuser/${userId}`);
    return res.data;
  };
}

export default new AuthApi();
