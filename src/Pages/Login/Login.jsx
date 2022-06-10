import FormLogin from "../../Components/Login/FormLogin";
import { observer } from "mobx-react";

function Login() {
  return (
    <div className="social-login-media">
      <div className="social-login-img-media"></div>
      <div className="social-login-form-media">
        <FormLogin />
      </div>
    </div>
  );
}

export default observer(Login);
