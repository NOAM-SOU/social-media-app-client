import React from "react";
import { observer } from "mobx-react";
import { Formik, Form } from "formik";
import CustomInput from "../FormTools/CustomInput/CustomInput";
import {
  initialValuesRegister,
  validationSchemaRegister,
} from "../FormTools/FormValidation";
import "./FormSignUp.css";
import rootStores from "../../Stores/main";

// import { useNavigate } from "react-router-dom";

const {AUTH_STORE} = rootStores;

function FormSignUp() {
  console.log("estoy aqui");
  const { signUp } = AUTH_STORE;
  // const navigate = useNavigate();


  return (
    <Formik
      initialValues={initialValuesRegister}
      validationSchema={validationSchemaRegister}      
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await signUp(values);
        await resetForm();
        // navigate("/");
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <div className="div-form-register-container">
            <CustomInput name="name" placeholder="Name" />
            <CustomInput name="email" placeholder="email" />
            <CustomInput name="biography" placeholder="Biography" />
            <CustomInput
              name="password"
              type="password"
              placeholder="Password"
            />
            <CustomInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            />
            <button
              type="submit"
              id="button-sub-register-form"
              disabled={!props.dirty || !props.isValid}
            >
              {props.isSubmitting ? "loading..." : "sign up"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default observer(FormSignUp);
