import React, { useRef } from "react";
import { observer } from "mobx-react";
import { Formik, Form } from "formik";
import CustomInput from "../FormTools/CustomInput/CustomInput";
import {
  initialValuesRegister,
  validationSchemaRegister,
} from "../FormTools/formValidation/registerValidation";
import "./FormSignUp.css";
import { rootStores } from "../../Stores/main";
import { useState } from "react";
import {
  fileSelected,
  imageHandler,
  readerFile,
} from "../FormTools/ValidationLogic";
import _ from "lodash";
import { AuthError } from "../FormTools/Errors";
import { Link } from "react-router-dom";
// import AuthError from "../FormTools/Errors";

const { authStore } = rootStores;

function FormSignUp() {
  const [file, setFile] = React.useState<File>();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAddPhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // console.log(file);

  // const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const file = e.target.files[0];
  //     setProfileImg(e.target.files[0]);

  //     setFile(file);
  //   }
  // };

  const { signUp, errorStatus } = authStore;
  const [profileImg, setProfileImg] = useState<string>(
    initialValuesRegister.profileImg
  );

  return (
    <Formik
      initialValues={initialValuesRegister}
      validationSchema={validationSchemaRegister}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        // console.log("values", values);

        if (file) {
          const formData = new FormData();
          formData.append("profileImg", file);
          const dataToSend = _.omit(values, "confirmPassword", "profileImg1"); // exclude the confirmPassword field
          Object.entries(dataToSend).forEach(([key, value]) => {
            if (key !== "profileImg") {
              formData.append(key, value);
            }
          });
          await signUp(formData);
        } else {
          await signUp(values);
        }
        setProfileImg(initialValuesRegister.profileImg);
        await resetForm();
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <div className="signup-form">
            <div className="image-upload" onClick={handleAddPhotoClick}>
              <img src={profileImg} className="social-profileimg-media" />
              <input
                id="input-upload-signupform"
                name="profileImg1"
                type="file"
                accept="image/*"
                onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                  await props.handleChange(e);
                  await readerFile(e, setProfileImg);

                  await fileSelected(e, setFile);
                  // props.setFieldValue("profileImg", e.target.value);

                  // console.log("img", profileImg);
                }}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
            </div>
            <div className="div-inputs-formsignup">
              <input
                className="signupform-input"
                name="name"
                placeholder="Name"
                onChange={props.handleChange}
              />
              <input
                name="email"
                placeholder="email"
                className="signupform-input"
                onChange={props.handleChange}
              />
              <input
                name="biography"
                placeholder="Biography"
                className="signupform-input"
                onChange={props.handleChange}
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="signupform-input"
                onChange={props.handleChange}
              />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="signupform-input"
                onChange={props.handleChange}
              />

              <AuthError code={errorStatus.code} error={errorStatus.error} />
              <button
                type="submit"
                className="button-sub-signup-form"
                disabled={!props.dirty || !props.isValid}
              >
                {props.isSubmitting ? "loading..." : "sign up"}
              </button>
              <div>
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default observer(FormSignUp);
