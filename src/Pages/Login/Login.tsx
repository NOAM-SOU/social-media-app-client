import FormLogin from "../../Components/Login/FormLogin";
import { observer } from "mobx-react";
import "./Login.css";
import React from "react";

function Login() {
  return (
    <div className="social-login-media">
      <div className="social-login-well-media">Wellcome to Dimelo</div>
      <div className="social-login-form-media">
        <FormLogin />
      </div>
    </div>
  );
}

export default observer(Login);
