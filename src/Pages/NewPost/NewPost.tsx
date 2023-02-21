import { Form, Formik } from "formik";
import { observer } from "mobx-react";
import { useState } from "react";
import { rootStores } from "../../Stores/main";
// import imageHandler from "../../Components/FormTools/ValidationLogic";
import {
  initialValues,
  validationSchema,
} from "../../Components/FormTools/formValidation/postValidation";
import CustomInput from "../../Components/FormTools/CustomInput/CustomInput";
import { useNavigate } from "react-router-dom";
// import Layout from "../../Components/Layout";
import "./NewPost.css";
import _ from "lodash";

import React from "react";
import {
  fileSelected,
  readerFile,
} from "../../Components/FormTools/ValidationLogic";
import Layout from "../../Components/Layout/Layout";

const { authStore, postStore } = rootStores;

function NewPost() {
  const [file, setFile] = React.useState<File>();
  const [img, setImg] = useState<string>(initialValues.img);

  // const [img, setImg] = useState("");
  const { addPost } = postStore;
  const { user } = authStore;

  const navigate = useNavigate();

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log("values", values);

          if (file) {
            const formData = new FormData();
            formData.append("img", file);
            const dataToSend = _.omit(values, "img"); // exclude the confirmPassword field
            Object.entries(dataToSend).forEach(([key, value]) => {
              if (key !== "img") {
                formData.append(key, value);
              }
            });
            await addPost(formData, user?.id!);
          } else {
            await addPost(values, user?.id!);
          }
          setImg(initialValues.img);
          await resetForm();
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <div className="div-form-newpost-container">
              <label className="label-newpost" htmlFor="file-input">
                <img src={img} className="social-postimg-media" />
                <CustomInput
                  name="img"
                  type="file"
                  accept="image/*"
                  id="input-img-newstyle"
                  onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                    await props.handleChange(e);
                    await readerFile(e, setImg);

                    await fileSelected(e, setFile);
                    // props.setFieldValue("profileImg", e.target.value);

                    // console.log("img", profileImg);
                  }}
                />
              </label>
              <div className="inputs-newpost-social">
                <CustomInput
                  onChange={props.handleChange}
                  id="newpost-social-newstyle"
                  name="title"
                  placeholder="Title"
                />
                <CustomInput
                  name="content"
                  placeholder="Content"
                  onChange={props.handleChange}
                />
              </div>
              <button
                type="submit"
                id="button-sub-post-form"
                disabled={!props.dirty || !props.isValid}
              >
                {props.isSubmitting ? "loading..." : "Add post"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export default observer(NewPost);
