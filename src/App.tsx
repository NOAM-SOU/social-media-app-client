import "./App.css";
import SignUp from "./Pages/SignUp/SignUp.js";

import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { rootStores } from "./Stores/main";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import PostPage from "./Pages/PostPage/PostPage";
import NewPost from "./Pages/NewPost/NewPost";
import Search from "./Pages/Search/Search";
import UserPage from "./Pages/UserPage/UserPage";
import Profile from "./Pages/ProfilePage/ProfilePage";
import Layout from "./Components/Layout/Layout";
import { IsLoading } from "./Context/MyContext";

function App() {
  const { authStore, postStore } = rootStores;
  const { getUser, user, userProfile, isUserLoggedIn } = authStore;
  const { getPost, post, newPost } = postStore;
  // const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [like, setLike] = useState<boolean>(false);

  // console.log("pUser", user);
  // const url = `http://localhost:5000/api/getuser/${userProfile.profileImg}`;

  // useEffect(() => {
  //   getUser(user?.id!);
  // }, []);

  // console.log("pro", userProfile);

  return (
    <div className="App container">
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <button onClick={async () => await getUser(user?.id!)}>getUser</button>
      <button onClick={() => getPost(newPost._id!)}>getPost</button>

      <img src={post.img} alt="img"></img>

      <div>{post.title}</div>
      <div>{post.content}</div>
      <div>{post.numberOfComments}</div> */}

      {/* {show && <PopUpOut set={setShow} />} */}

      <IsLoading.Provider value={{ isLoading, setIsLoading, like, setLike }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={isUserLoggedIn ? <Home /> : <Navigate to="login" />}
              />
              <Route
                path="/login"
                element={isUserLoggedIn ? <Navigate to="/" /> : <Login />}
              />
              <Route
                path="/register"
                element={isUserLoggedIn ? <Navigate to="/" /> : <SignUp />}
              />
              <Route
                path="/addnew"
                element={isUserLoggedIn ? <NewPost /> : <Navigate to="login" />}
              />
              <Route
                path="/profilepage/:id"
                element={isUserLoggedIn ? <Profile /> : <Navigate to="login" />}
              />
              <Route
                path="/search"
                element={isUserLoggedIn ? <Search /> : <Navigate to="login" />}
              />

              {/* <Route path="/:userId" element={<UserPage />} /> */}
              <Route path="/postpage/:postId" element={<PostPage />} />

              {/* <Route path="*" element={<Navigate to="/" />} />  */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </IsLoading.Provider>
    </div>
  );
}

export default observer(App);
