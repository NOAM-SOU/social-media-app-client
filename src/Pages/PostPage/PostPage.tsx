// import { observer } from "mobx-react";
import { observer } from "mobx-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../../Components/Post/Post";
import { rootStores } from "../../Stores/main";

import "./PostPage.css";

const { authStore, postStore, userStore, likeStore } = rootStores;

function PostPage() {
  const { postId } = useParams();
  const { getPost, post } = postStore;
  const { getUser } = authStore;
  const { getLikes, likes } = likeStore;
  const { user } = authStore;

  // console.log(post?._id!, "POST ID IN THE POST PAGE OF ALWAYS IS UNDEFIND");

  // console.log(user?.id, "THE OFICIAL USER ID IN POSTPAGE");

  useEffect(() => {
    async function fetchPost() {
      console.log(postId!, "POST IS IN THE GET POST FUNCTION IN THE POSTPAFGE");

      await getPost(postId!);

      // console.log("toooo");
    }
    fetchPost();
  }, [postId]);

  console.log(post!, "POST OBJ");

  return (
    <div className="postpage-container">
      <Post key={post._id!} post={post!} />
      <div>{post.numberOfLikes!}</div>
    </div>
  );
}

export default observer(PostPage);
