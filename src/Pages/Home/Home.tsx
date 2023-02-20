import { observer } from "mobx-react";
import React from "react";
import Layout from "../../Components/Layout/Layout";
import { rootStores } from "../../Stores/main";
import NewPost from "../NewPost/NewPost";
// import Layout from "../../Components/Layout/Layout";
// import MyContext from "../../Context/MyContext";
import "./Home.css";
// import Posts from "../../Components/Posts";
// import { useContext } from "react";

const { authStore } = rootStores;

const Home = () => {
  //   const { setShow, show } = useContext(MyContext);

  const { user, logout, userProfile } = authStore;
  console.log("userP", userProfile.email);

  return (
    <>
      <Layout>
        <div className="first-div-home">
          <div className="div-home-wellcome">Wellcome {user?.name}</div>
          <button onClick={logout}>logout</button>
          <NewPost />
          {/* <Posts /> */}
        </div>
      </Layout>
    </>
  );
};

export default observer(Home);
