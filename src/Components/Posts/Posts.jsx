import { observer } from "mobx-react";
import { useEffect } from "react";
import Post from "../../Components/Post/Post";
import rootStore from "../../Stores/main";
const { AUTH_STORE, USER_STORE } = rootStore;
// import "./Posts.css";

function Posts() {
  const { user } = AUTH_STORE;

  const { getFollowedPosts, usersPosts } = USER_STORE;

  useEffect(() => {
    getFollowedPosts(user._id);
  }, []);

  return (
    <div className="div-posts-home">
      {usersPosts.map((p) => (
        <Post key={p._id} p={p} />
      ))}
    </div>
  );
}

export default observer(Posts);
