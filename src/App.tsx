import "./App.css";
import SignUp from "./Pages/SignUp/SignUp.js";
// import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";
// import NewPost from "./Pages/NewPost/NewPost";
// import Search from "./Pages/Search/Search";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { rootStores } from "./Stores/main";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
// import MyContext from "./Context/MyContext";
// import { useState } from "react";
// import ProfilePage from "./Pages/ProfilePage/ProfilePage";
// import PopUpOut from "./Components/PopUp/PopUpOut";
// import UserPage from "./Pages/UserPage/UserPage";
// import PostPage from "./Pages/PostPage/PostPage";

function App() {
  const { authStore, postStore } = rootStores;
  const { getUser, user, userProfile, img, isUserLoggedIn } = authStore;
  const { getPost, post } = postStore;
  // const [show, setShow] = useState(false);

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
      {/* <button onClick={async () => await getUser(user?.id!)}>getUser</button> */}
      {/* <button onClick={() => getPost()}>getPost</button>

      <img src={post.img} alt="img"></img>

      <div>{post.title}</div>
      <div>{post.content}</div>
      <div>{post.numberOfComments}</div> */}

      {/* {show && <PopUpOut set={setShow} />} */}

      {/* <MyContext.Provider value={{ show, setShow }}> */}
      <BrowserRouter>
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
          {/* <Route
            path="/addnew"
            element={isUserLoggedIn ? <NewPost /> : <Navigate to="login" />}
          /> */}
          <Route
            path="/profilepage"
            element={isUserLoggedIn ? <ProfilePage /> : <Navigate to="login" />}
          />
          {/* <Route
            path="/search"
            element={isUserLoggedIn ? <Search /> : <Navigate to="login" />}
          /> */}

          {/* <Route path="/:userId" element={<UserPage />} />
          <Route path="/postpage/:postId" element={<PostPage />} />

          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
      {/* </MyContext.Provider> */}
    </div>
  );
}

export default observer(App);