import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import AuthApi from "../Apis/AuthApi";
import jwtDecode from "jwt-decode";

class AuthStore {
  constructor() {
    makeObservable(this, {
      user: observable,
      errorStatus: observable,
      setUser: action.bound,
      isLoggedIn: computed,
      signUp: action.bound,
    });
    this.setUser(localStorage.getItem("auth_token"));
  }

  /**@type {user} */
  user = {};

  errorStatus = 0;

  get isLoggedIn() {
    console.log(this.user);
    return !!this.user.email;
  }

  /**@param {string} token */

  setUser(token) {
    runInAction(() => {
      if (token === null) {
        localStorage.removeItem("auth_token");
        this.user = {};
      } else {
        try {
        localStorage.setItem("auth_token", token);
        this.user = jwtDecode(token).user;
        this.errorStatus = 0;
        } catch (e) {
          localStorage.removeItem("auth_token");
          this.user = {};
        }
      }
    });
  }

  /**@param {object} user */
  signUp = async (user) => {
    try {
      const data = await AuthApi.signUp(user);
      this.setUser(data.auth_token);
      console.log(data);
      console.log("intenta");
    } catch (err) {
      console.log(err);
      console.log("error mio");
      
      // this.errorStatus = err.response;
      // console.log(errorStatus);
    }
  };

  login = async (user) => {
    try {
      const data = await AuthApi.login(user);
      this.setUser(data.auth_token);
      console.log(data);
    } catch (err) {
      console.log(err);
      // this.errorStatus = err.response;
      // console.log(errorStatus);
    }
  };
}

export default AuthStore;
