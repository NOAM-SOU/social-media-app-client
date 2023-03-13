import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import AuthApi from "../Apis/AuthApi";
import jwtDecode from "jwt-decode";
import { Token } from "../types/token";
import { UserI, UserInfo, UserProfile } from "../interfaces/user";
import { Error } from "../interfaces/error";
import userStore from "./userStore";
import { userProfile } from "../tools/userStoreTool";

class AuthStore {
  user: UserInfo | null = null;
  userProfile: UserProfile = userProfile;
  token: Token = "";
  errorStatus: Error = {
    error: "",
    code: 0,
  };

  get isUserLoggedIn() {
    return this.user != null;
  }

  setUser(token: Token) {
    // console.log(token);

    runInAction(() => {
      if (token == null) {
        localStorage.removeItem("token");
        this.user = null;
      } else {
        localStorage.setItem("token", token);
        this.user = jwtDecode(token);
        // console.log(this.user);

        // this.errorStatus = {};
      }
    });
  }

  async signUp(user: UserI | FormData) {
    try {
      // console.log("user", user);

      const data = await AuthApi.signUp(user);
      this.setUser(data.token);
      // console.log(data);
    } catch (err: any) {
      // runInAction(() => {
      //   this.errorStatus = err;
      // });
      console.log(err);
    }
  }

  async getUser(userId: string, otherUser: boolean = true) {
    try {
      const data = await AuthApi.getUser(userId);
      // console.log("data", data.data);
      // this.userProfile = data.data.data;
      // this.img = data.data.dataUrl;
      runInAction(() => {
        if (otherUser) {
          this.userProfile = data.data;
        }
        userStore.another = data.data;
      });
    } catch (err: any) {
      runInAction(() => {
        // this.errorStatus = data.response.data;
        // console.log(err.data.code);
      });
    }
  }

  logout() {
    this.setUser(null);
  }

  async login(user: UserI) {
    // console.log("user", user);

    try {
      const data = await AuthApi.login(user);
      // console.log("d", data);

      this.setUser(data.token);
    } catch (err: any) {
      runInAction(() => {
        this.errorStatus = err.response.data;
        console.log("err", err.response.data);
      });
    }
  }

  constructor() {
    makeObservable(this, {
      user: observable,
      errorStatus: observable,
      userProfile: observable,
      isUserLoggedIn: computed,
      login: action.bound,
      logout: action.bound,
      getUser: action.bound,
      setUser: action.bound,
      signUp: action.bound,
    });

    this.setUser(localStorage.getItem("token"));
  }
}

const authStore = new AuthStore();
export default authStore;
