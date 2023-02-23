import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { rootStores } from "../../Stores/main";
import "./gallery.css";

const { authStore, postStore } = rootStores;

const Gallery = () => {
  const { user, userProfile, getUser } = authStore;
  const { getUserPosts, userPosts } = postStore;

  useEffect(() => {
    getUserPosts(user?.id!);
  }, []);
  console.log("userPosts", userPosts);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {userPosts.map((image, index) => (
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

export default Gallery;
