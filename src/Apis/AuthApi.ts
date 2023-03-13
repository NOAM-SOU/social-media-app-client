import { UserI } from "../interfaces/user";
import { loginApi, registerApi } from "./api";
class AuthApi {
  signUp = async (user: UserI | FormData) => {
    const res = await registerApi.post("/register", user);
    return res.data;
  };

  getUser = async (userId: string) => {
    const res = await loginApi.get(`/getuser/${userId}`);
    return res;
  };

  login = async (user: UserI) => {
    // console.log(user);

    const res = await loginApi.post("/login", user);
    return res.data;
  };
}

export default new AuthApi();
