import FormLogin from "../../Components/Login/FormLogin";
import { observer } from "mobx-react";
import "./Login.css";
import React from "react";

function Login() {
  return (
    // <div className="social-login-media">
    //   <div className="social-login-well-media">Wellcome to Dimelo</div>
    //   <div className="social-login-form-media">
    //     <FormLogin />
    //   </div>
    // </div>

    <div className="login-page">
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="Instagram Logo"
        className="login-page-img"
      />
      <FormLogin />
    </div>
  );
}

export default observer(Login);
