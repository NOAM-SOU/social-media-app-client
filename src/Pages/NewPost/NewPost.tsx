import { Form, Formik } from "formik";
import { observer } from "mobx-react";
import { useRef, useState } from "react";
import { rootStores } from "../../Stores/main";
import {
  initialValues,
  validationSchema,
} from "../../Components/FormTools/formValidation/postValidation";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";
import _ from "lodash";

import React from "react";
import {
  fileSelected,
  readerFile,
} from "../../Components/FormTools/ValidationLogic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const { authStore, postStore } = rootStores;

function NewPost() {
  const [file, setFile] = React.useState<File>();
  const [img, setImg] = useState<string>(initialValues.img);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAddPhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const { addPost } = postStore;
  const { user } = authStore;

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
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
        navigate(`/profilepage/${user?.id}`);
      }}
    >
      {(props) => (
        <Form>
          <div className="new-post-container">
            <div className="new-post-header">
              <h2>New Post</h2>
            </div>
            <div className="new-post-content">
              <div className="new-post-photo">
                {img ? (
                  <img
                    src={img}
                    alt="Selected file"
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <>
                    <div onClick={handleAddPhotoClick}>
                      <FontAwesomeIcon icon={faCamera as IconProp} size="3x" />
                      <span>Add Photo</span>
                    </div>
                    <input
                      name="img"
                      type="file"
                      accept="image/*"
                      onChange={async (
                        e: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        await props.handleChange(e);
                        await readerFile(e, setImg);

                        await fileSelected(e, setFile);
                        // props.setFieldValue("profileImg", e.target.value);

                        // console.log("img", profileImg);
                      }}
                      style={{ display: "none" }}
                      ref={fileInputRef}
                    />
                  </>
                )}
              </div>

              <div className="new-post-description">
                <textarea
                  name="content"
                  placeholder="Write a caption..."
                  value={props.values.content}
                  onChange={props.handleChange}
                />
              </div>

              <div className="new-post-share">
                <button type="submit" disabled={!props.dirty || !props.isValid}>
                  {props.isSubmitting ? "loading..." : "Add post"}
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default observer(NewPost);
