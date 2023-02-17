import { UserI } from "../interfaces/user";
import { loginApi } from "./api";
class AuthApi {
  signUp = async (user: UserI | FormData) => {
    const res = await loginApi.post("/register", user);
    return res.data;
  };

  getUser = async (userId: string) => {
    const res = await loginApi.get(`/getuser/${userId}`);
    return res;
  };

  login = async (user: UserI) => {
    const res = await loginApi.post("/login", user);
    return res;
  };
}

export default new AuthApi();
