import { observer } from "mobx-react";
import { Formik, Form } from "formik";
import CustomInput from "../FormTools/CustomInput/CustomInput";
import {
  initialValues,
  validationSchema,
} from "../FormTools/formValidation/loginValidation";
import { rootStores } from "../../Stores/main";
import { AuthError } from "../FormTools/Errors";
import "./FormLogin.css";
import { Link } from "react-router-dom";
import React from "react";

const { authStore } = rootStores;
function FormLogin() {
  const { login, errorStatus } = authStore;
  const { error, code } = errorStatus;
  // console.log("message", error, "code", code);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        // console.log("values", values);

        await login(values);
        await resetForm();
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <div className="login-form">
            <input
              name="email"
              placeholder="email"
              onChange={props.handleChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={props.handleChange}
            />
            <AuthError code={errorStatus.code} error={errorStatus.error} />

            <button
              type="submit"
              className="button-sub-login-form"
              disabled={!props.dirty || !props.isValid}
            >
              {props.isSubmitting ? "loading..." : "login"}
            </button>
            <div className="or-divider">
              <span className="or-divider-text">or</span>
            </div>
            <button className="facebook-login">Log in with Facebook</button>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <div>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </div>
          {/* <div className="signup-link">
            <span>Don't have an account?</span>
            <Link to="/register">Sign up</Link>
          </div> */}
        </Form>
      )}
    </Formik>
  );
}

export default observer(FormLogin);
