import { observer } from "mobx-react";
import React, { useContext } from "react";
import { useEffect } from "react";
import { IsLoading } from "../../Context/MyContext";
import { Post as PostI } from "../../interfaces/post";
import { rootStores } from "../../Stores/main";
import Post from "../Post/Post";

const { authStore, postStore } = rootStores;

// const { like, setLike } = useContext(IsLoading);

function Posts() {
  const { getFollowedPosts, followedPosts } = postStore;
  const { user } = authStore;

  useEffect(() => {
    getFollowedPosts(user?.id!);
  }, []);

  // console.log("herereee");
  // console.log(followedPosts, "FOLLOWED");

  return (
    <div className="div-posts-home">
      {followedPosts.map((p: PostI) => (
        <Post key={p._id!} post={p} />
      ))}
    </div>
  );
}

export default observer(Posts);
