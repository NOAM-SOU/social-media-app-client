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
import { useState } from "react";
import imageHandler from "../FormTools/ValidationLogic";
import AuthError from "../FormTools/Errors";

const { AUTH_STORE } = rootStores;

function FormSignUp() {
  const { signUp, errorStatus } = AUTH_STORE;
  const [profileImg, setProfileImg] = useState(
    initialValuesRegister.profileImg
  );
  return (
    <Formik
      initialValues={initialValuesRegister}
      validationSchema={validationSchemaRegister}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await signUp(values);
        setProfileImg(initialValuesRegister.profileImg);
        await resetForm();
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form className="div-form-principal-signup">
          <div className="div-form-register-container">
            <div className="image-upload">
              <img src={profileImg} className="social-profileimg-media" />
              <CustomInput
                id="input-upload-signupform"
                name="profileIng"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  props.setFieldValue("profileImg", e.target.value);
                  imageHandler(e, setProfileImg);
                  console.log("img", profileImg);
                }}
              />
            </div>
            <div className="div-inputs-formsignup">
              <CustomInput
                name="name"
                placeholder="Name"
                className="signupform-input"
              />
              <CustomInput
                name="email"
                placeholder="email"
                className="signupform-input"
              />
              <CustomInput
                name="biography"
                placeholder="Biography"
                className="signupform-input"
              />
              <CustomInput
                name="password"
                type="password"
                placeholder="Password"
                className="signupform-input"
              />
              <CustomInput
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="signupform-input"
              />

              <AuthError status={errorStatus} />
              <button
                type="submit"
                id="button-sub-register-form"
                disabled={!props.dirty || !props.isValid}
              >
                {props.isSubmitting ? "loading..." : "sign up"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default observer(FormSignUp);
