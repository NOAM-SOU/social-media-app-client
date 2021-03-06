import { observer } from "mobx-react";
import { Formik, Form } from "formik";
import CustomInput from "../FormTools/CustomInput";
import {
  initialValuesLogin,
  validationSchemaLogin,
} from "../FormTools/FormValidation";
import rootStores from "../../Stores/main";
import { AuthError } from "../FormTools/Errors";
import "./FormLogin.css";
import { Link } from "react-router-dom";

const { AUTH_STORE } = rootStores;
function FormLogin() {
  const { login, errorStatus } = AUTH_STORE;
  return (
    <Formik
      initialValues={initialValuesLogin}
      validationSchema={validationSchemaLogin}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await login(values);
        await resetForm();
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form className="first-div-form-formlogin">
          <div className="div-form-login-container">
            <CustomInput name="email" placeholder="email" />
            <CustomInput
              name="password"
              type="password"
              placeholder="Password"
            />
            <AuthError status={errorStatus} />

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
