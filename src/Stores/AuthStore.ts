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

class AuthStore {
  user: UserInfo | null = {
    name: "",
    email: "",
    id: "",
  };
  userProfile: any = {};
  token: Token = "";
  errorStatus: Error | {} = {
    message: "",
    code: 0,
  };
  img: any;

  // get isUserLoggedIn() {
  //   return this.session.user != null;
  // }

  setUser(token: Token) {
    console.log(token);

    runInAction(() => {
      if (token == null) {
        localStorage.removeItem("token");
        this.user = null;
      } else {
        localStorage.setItem("token", token);
        this.user = jwtDecode(token);
        console.log(this.user);

        this.errorStatus = {};
      }
    });
  }

  async signUp(user: UserI | FormData) {
    try {
      console.log("user", user);

      const data = await AuthApi.signUp(user);
      this.setUser(data.token);
      console.log(data);
    } catch (err: any) {
      // runInAction(() => {
      //   this.errorStatus = err;
      // });
      console.log(err);
    }
  }

  async getUser(userId: string) {
    try {
      const data = await AuthApi.getUser(userId);
      console.log("data", data.data);
      this.userProfile = data.data;
      // runInAction(() => {
      //   if (boolean) this.session.userProfile = data;
      //   else this.session.another = data;
      // });
    } catch (err: any) {
      // runInAction(() => {
      //   this.errorStatus = err;
      // });
      console.log(err);
    }
  }

  //   logout() {
  //     this.setUser(null);
  //   }

  //   async login(user) {
  //     try {
  //       const data = await AuthApi.login(user);
  //       this.setUser(data.token);
  //     } catch (err) {
  //       runInAction(() => {
  //         this.session.errorStatus = err.response.data.code;
  //       });
  //       console.log(err);
  //     }
  //   }

  constructor() {
    makeObservable(this, {
      user: observable,
      errorStatus: observable,
      userProfile: observable,
      // isUserLoggedIn: computed,
      // login: action.bound,
      // logout: action.bound,
      getUser: action.bound,
      setUser: action.bound,
      signUp: action.bound,
    });

    this.setUser(localStorage.getItem("token"));
  }
}

const authStore = new AuthStore();
export default authStore;
