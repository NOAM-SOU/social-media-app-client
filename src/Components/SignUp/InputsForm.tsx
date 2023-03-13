import React from "react";
import { observer } from "mobx-react";
import { Formik, Form } from "formik";
import CustomInput from "../FormTools/CustomInput/CustomInput";

import "./FormSignUp.css";
import { rootStores } from "../../Stores/main";

const { authStore } = rootStores;

function InputsForm(props: any) {
  return (
    <div className="div-form-register-container">
      <div className="image-upload">
        <img src={props.profileImg} className="social-profileimg-media" />
        <CustomInput
          id="input-upload-signupform"
          name="profileIng"
          type="file"
          accept="image/*"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.handleChange(e);
            props.handleSelectFile(e);
            props.setFieldValue("profileImg", props.file);
            //   imageHandler(file);
            // console.log("img", e.target.files);
          }}
        />
      </div>
      <div className="div-inputs-formsignup">
        <CustomInput
          className="signupform-input"
          name="name"
          placeholder="Name"
          onChange={props.handleChange}
        />
        <CustomInput
          name="email"
          placeholder="email"
          className="signupform-input"
          onChange={props.handleChange}
        />
        <CustomInput
          name="biography"
          placeholder="Biography"
          className="signupform-input"
          onChange={props.handleChange}
        />
        <CustomInput
          name="password"
          type="password"
          placeholder="Password"
          className="signupform-input"
          onChange={props.handleChange}
        />
        <CustomInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          className="signupform-input"
          onChange={props.handleChange}
        />

        {/* <AuthError status={errorStatus} /> */}
        <button
          type="submit"
          id="button-sub-register-form"
          disabled={!props.dirty || !props.isValid}
        >
          {props.isSubmitting ? "loading..." : "sign up"}
        </button>
      </div>
    </div>
  );
}

export default observer(InputsForm);
