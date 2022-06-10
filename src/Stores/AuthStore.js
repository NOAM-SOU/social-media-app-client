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
  /**
   * @private
   * @type {object}
   */
  session = {
    user: null,
    errorStatus: 0,
    profileUser: {},
  };

  get user() {
    return this.session.user;
  }

  get errorStatus() {
    return this.session.errorStatus;
  }

  get profileUser() {
    return this.session.profileUser;
  }

  constructor() {
    makeObservable(this, {
      session: observable,
      user: computed,
      errorStatus: computed,
      isUserLoggedIn: computed,
      profileUser: computed,
      login: action.bound,
      logout: action.bound,
      setUser: action.bound,
      signUp: action.bound,
      getUser: action.bound,
    });

    this.setUser(localStorage.getItem("auth_token"));
  }

  get isUserLoggedIn() {
    return this.session.user != null;
  }

  /**
   * @private
   * @param {string} token
   */
  setUser(token) {
    runInAction(() => {
      if (token == null) {
        localStorage.removeItem("auth_token");
        this.session.user = null;
      } else {
        localStorage.setItem("auth_token", token);
        this.session.user = jwtDecode(token);
        this.session.errorStatus = 0;
      }
    });
  }

  async signUp(user) {
    try {
      const data = await AuthApi.signUp(user);
      this.setUser(data.auth_token);
      console.log(data);
    } catch (err) {
      runInAction(() => {
        this.session.errorStatus = err.response.data.code;
      });
      console.log(err);
    }
  }

  logout() {
    this.setUser(null);
  }

  async login(user) {
    try {
      const data = await AuthApi.login(user);
      this.setUser(data.auth_token);
    } catch (err) {
      runInAction(() => {
        this.session.errorStatus = err.response.data.code;
      });
      console.log(err);
    }
  }

  async getUser(userId) {
    try {
      const data = await AuthApi.getUser(userId);
      runInAction(() => {
        console.log("s", data);
        this.session.profileUser = data;
      });
    } catch (err) {
      runInAction(() => {
        this.session.errorStatus = err.response.data.code;
      });
      console.log(err);
    }
  }
}

const authStore = new AuthStore();
export default authStore;
