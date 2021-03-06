import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import rootStore from "../../Stores/main";
import "./ProfilePage.css";
import { Link } from "react-router-dom";

const { AUTH_STORE, USER_STORE } = rootStore;

function ProfilePage() {
  const { user } = AUTH_STORE;
  const { userProfile, getUser, userPosts, getUserPosts } = USER_STORE;
  useEffect(() => {
    getUser(user._id, true);
  }, []);

  useEffect(() => {
    getUserPosts(user._id);
  }, []);
  console.log(userPosts);

  const [follow, setFollow] = useState(false);
  return (
    <>
      <Layout>
        <div className="first-div-profile-page">
          <div className="profile-page-header">
            <div className="profile-page-header-img">
              <img
                src={userProfile.profileImg}
                alt="profileImg"
                id="img-profile-page"
              />
            </div>
            <div className="profile-page-header-postnumber">
              <div>{userProfile.numberOfPosts}</div>
              <p>Posts</p>
            </div>
            <div className="profile-page-header-followersnumber">
              <div>{userProfile.numberOfFollowers}</div>
              <p>Followers</p>
            </div>
            <div className="profile-page-header-followednumber">
              <div>{userProfile.numberOfFollowed}</div>
              <p>Followed</p>
            </div>
          </div>
          <div className="profile-page-username">{userProfile.name}</div>

          <div className="div-info-sobre">
            <div className="profile-page-name">{userProfile.biography}</div>
          </div>
          <div className="profile-page-posts">
            {userPosts.length === 0
              ? "No posts"
              : userPosts.map((p) => {
                  return (
                    <Link
                      to={`/postpage/${p._id}`}
                      key={p._id}
                      className="link-profilePage-post"
                    >
                      <div className="posts-img-profilepage">
                        <img
                          src={p.img}
                          alt="img"
                          className="img-post-profile"
                        />
                      </div>
                    </Link>
                  );
                })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default observer(ProfilePage);
