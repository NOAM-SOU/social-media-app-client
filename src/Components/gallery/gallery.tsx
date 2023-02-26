import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { rootStores } from "../../Stores/main";
import { IdProps } from "../../types/props";
import "./gallery.css";

const { authStore, postStore } = rootStores;

const Gallery = ({ id }: IdProps) => {
  const { user } = authStore;
  const { userPosts, anotherPosts } = postStore;

  // useEffect(() => {
  //   id === user?.id ? getUserPosts(id!) : getUserPosts(id!, false);
  // }, [id]);
  // console.log("idddd", id);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {id === user?.id
          ? userPosts.map((image, index) => (
              <Link to={`/postpage/${image._id}`}>
                <div className="gallery-item" key={index}>
                  <img src={image.img} alt="gallery item" />
                </div>
              </Link>
            ))
          : anotherPosts.map((image, index) => (
              <Link to={`/postpage/${image._id}`}>
                <div className="gallery-item" key={index}>
                  <img src={image.img} alt="gallery item" />
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default observer(Gallery);
