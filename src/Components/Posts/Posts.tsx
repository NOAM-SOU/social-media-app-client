import { observer } from "mobx-react";
import React from "react";
import { useEffect } from "react";
import { Post as PostI } from "../../interfaces/post";
import { rootStores } from "../../Stores/main";
import Post from "../Post/Post";

const { authStore, postStore } = rootStores;

function Posts() {
  const { getFollowedPosts, followedPosts } = postStore;
  const { user } = authStore;

  useEffect(() => {
    getFollowedPosts(user?.id!);
  }, []);

  return (
    <div className="div-posts-home">
      {followedPosts.map((p: PostI) => (
        <Post key={p._id!} post={p} />
      ))}
    </div>
  );
}

export default observer(Posts);
