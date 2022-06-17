import FormLogin from "../../Components/Login/FormLogin";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="social-login-media">
      <div className="social-login-img-media"></div>
      <div className="social-login-form-media">
        <FormLogin />
      </div>
      <div>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
}

export default observer(Login);
