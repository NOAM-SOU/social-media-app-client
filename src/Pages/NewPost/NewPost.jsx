import { Form, Formik } from "formik";
import { observer } from "mobx-react";
import { useState } from "react";
import rootStores from "../../Stores/main";
import imageHandler from "../../Components/FormTools/ValidationLogic";
import {
  initialValueszPost,
  validationSchemaPost,
} from "../../Components/FormTools/FormValidation";
import CustomInput from "../../Components/FormTools/CustomInput";
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";
import "./NewPost.css";

const { USER_STORE, AUTH_STORE } = rootStores;

function NewPost() {
  const [img, setImg] = useState("");
  const { addPost } = USER_STORE;
  const { user } = AUTH_STORE;

  const navigate = useNavigate();

  return (
    <Layout>
      <Formik
        initialValues={initialValueszPost}
        validationSchema={validationSchemaPost}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await addPost(values, user._id);
          await resetForm();
          navigate("/profilepage");

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
                  onChange={(e) => {
                    console.log(e.target.value);
                    props.setFieldValue("img", e.target.value);
                    imageHandler(e, setImg);
                    // console.log("img", img);
                  }}
                />
              </label>
              <div className="inputs-newpost-social">
                <CustomInput
                  id="newpost-social-newstyle"
                  name="title"
                  placeholder="Title"
                />
                <CustomInput name="content" placeholder="Content" />
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
