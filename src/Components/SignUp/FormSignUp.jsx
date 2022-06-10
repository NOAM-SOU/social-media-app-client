import React from "react";
import { observer } from "mobx-react";
import { Formik, Form } from "formik";
import CustomInput from "../FormTools/CustomInput/CustomInput";
import {
  initialValuesRegister,
  validationSchemaRegister,
} from "../FormTools/FormValidation";
// import "./FormSignUp.css";
import rootStores from "../../Stores/main";
import { useState } from "react";
import imageHandler from "../FormTools/ValidationLogic";
import AuthError from "../FormTools/Errors";

const { AUTH_STORE } = rootStores;

function FormSignUp() {
  const { signUp, errorStatus } = AUTH_STORE;
  const [img, setImg] = useState(initialValuesRegister.profileImg);
  return (
    <Formik
      initialValues={initialValuesRegister}
      validationSchema={validationSchemaRegister}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await signUp(values);
        setImg(initialValuesRegister.profileImg);
        await resetForm();
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <div className="div-form-register-container">
            <div className="image-upload">
              <label htmlFor="file-input">
                <img src={img} className="social-profileimg-media" />
                <CustomInput
                  name="profileIng"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    props.setFieldValue("profileImg", e.target.value);
                    imageHandler(e);
                    console.log("img", img);
                  }}
                />
              </label>
            </div>
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

            <AuthError status={errorStatus} />
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
