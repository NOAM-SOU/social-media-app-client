import FormSignUp from "../../Components/SignUp/FormSignUp";
import { observer } from "mobx-react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="social-signup-media">
      <div className="signup-div-well">Wellcome to Dimelo</div>
      <div className="social-signup-form-media">
        <FormSignUp />
      </div>
    </div>
  );
}

export default observer(SignUp);
