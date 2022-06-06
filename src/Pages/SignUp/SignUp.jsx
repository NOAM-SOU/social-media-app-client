import FormSignUp from "../../Components/SignUp/FormSignUp";
import { observer } from "mobx-react";
import "./SignUp.css";
import profileimg from "../SignUp/profileimg.png";

function SignUp() {
  return (
    <div className="social-signup-media">
      <div className="social-signup-img-media">
        <img
          src={profileimg}
          alt="profile img"
          className="social-profileimg-media"
        />
      </div>
      <div className="social-signup-form-media">
        <FormSignUp />
      </div>
    </div>
  );
}

export default observer(SignUp);
