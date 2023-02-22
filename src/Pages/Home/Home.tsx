import { observer } from "mobx-react";
import React, { useEffect } from "react";

import { rootStores } from "../../Stores/main";
import NewPost from "../NewPost/NewPost";
import Layout from "../../Components/Layout/Layout";
// import MyContext from "../../Context/MyContext";
import "./Home.css";
// import Posts from "../../Components/Posts";
// import { useContext } from "react";
import "./Home.css";
import Stories from "../../Components/stories/stories";
import { Link } from "react-router-dom";
import HeaderHome from "../../Components/HeaderHome/headerHome";
import Post from "../../Components/Post/Post";
import Posts from "../../Components/Posts/Posts";

const { authStore, postStore } = rootStores;

const Home = () => {
  //   const { setShow, show } = useContext(MyContext);
  const { followedPosts, getFollowedPosts } = postStore;
  const { user, logout, userProfile } = authStore;

  // useEffect(() => {
  //   getFollowedPosts(user?.id!);
  // }, []);

  console.log("followeddd", followedPosts);

  return (
    <Layout>
      <div className="container">
        <HeaderHome />
        <main>
          <Stories />
          <section className="posts">
            <Posts />
          </section>
        </main>
        <button onClick={logout}>logout</button>
      </div>
    </Layout>
  );
};

export default observer(Home);
