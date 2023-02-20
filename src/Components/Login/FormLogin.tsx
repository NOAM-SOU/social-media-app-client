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
  console.log("message", error, "code", code);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        console.log("values", values);

        await login(values);
        await resetForm();
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form className="first-div-form-formlogin">
          <div className="div-form-login-container">
            <CustomInput
              name="email"
              placeholder="email"
              onChange={props.handleChange}
            />
            <CustomInput
              name="password"
              type="password"
              placeholder="Password"
              onChange={props.handleChange}
            />
            <AuthError code={errorStatus.code} error={errorStatus.error} />

            <button
              type="submit"
              id="button-sub-login-form"
              disabled={!props.dirty || !props.isValid}
            >
              {props.isSubmitting ? "loading..." : "login"}
            </button>
            <div className="login-linkto-registr">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default observer(FormLogin);
