import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NewPost from "./Pages/NewPost/NewPost";
import Search from "./Pages/Search/Search";
import { observer } from "mobx-react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import rootStores from "./Stores/main";
const { AUTH_STORE } = rootStores;
import MyContext from "./Context/MyContext";
import { useState } from "react";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import PopUpOut from "./Components/PopUp/PopUpOut";
import UserPage from "./Pages/UserPage/UserPage";
import PostPage from "./Pages/PostPage/PostPage";

function App() {
  const { isUserLoggedIn } = AUTH_STORE;
  const [show, setShow] = useState(false);

  return (
    <div className="App container">
      {show && <PopUpOut set={setShow} />}

      <MyContext.Provider value={{ show, setShow }}>
        <BrowserRouter>
          <Routes>
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
              path="/profilepage"
              element={
                isUserLoggedIn ? <ProfilePage /> : <Navigate to="login" />
              }
            />
            <Route
              path="/search"
              element={isUserLoggedIn ? <Search /> : <Navigate to="login" />}
            />

            <Route
              path="/"
              element={isUserLoggedIn ? <Home /> : <Navigate to="login" />}
            />
            <Route path="/:userId" element={<UserPage />} />
            <Route path="/postpage/:postId" element={<PostPage />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default observer(App);
