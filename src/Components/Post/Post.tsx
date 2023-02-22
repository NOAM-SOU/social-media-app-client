import { observer } from "mobx-react";
import "./Post.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { RiBookmarkLine, RiHeart3Line } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { PostProps } from "../../interfaces/PostProps";
import { rootStores } from "../../Stores/main";

function Post(props: PostProps) {
  const { authStore, postStore, userStore } = rootStores;

  const { getFollowedPosts } = postStore;
  const { user, getUser } = authStore;
  const { another } = userStore;

  useEffect(() => {
    getFollowedPosts(user?.id!);
  }, []);

  useEffect(() => {
    getUser(props.post.userId!, false);
  }, []);

  return (
    <li>
      <div className="post-header">
        <img src={another.profileImg} alt="Profile" />
        <h2>{another.name}</h2>
      </div>
      <div className="img-post">
        <Link to="/">
          <img className="post--img-src" src={props.post.img} alt="Post" />
        </Link>
      </div>
      <div className="post-footer">
        <div className="post-icons">
          <div>
            <RiHeart3Line />
            <FiSend />
            <FaRegComment />
          </div>
          <div className="post-save">
            <RiBookmarkLine />
          </div>
        </div>
        <div className="div-likes">
          <h2 className="post-likes">{props.post.numberOfLikes} Likes</h2>
        </div>
        <div className="post-details">
          <h2 className="post-username">{another.name}</h2>
          <h2 className="content-post">{props.post.content}</h2>
        </div>
      </div>
    </li>
  );
}

export default observer(Post);