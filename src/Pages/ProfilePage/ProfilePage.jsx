import { observer } from "mobx-react";
import { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import rootStore from "../../Stores/main";
import Post from "../../Components/Post/Post";
import "./ProfilePage.css";

const { AUTH_STORE, POST_STORE } = rootStore;

function ProfilePage() {
  const { user, getUser, profileUser } = AUTH_STORE;
  const { getUserPosts, userPosts } = POST_STORE;

  useEffect(() => {
    getUserPosts(user._id);
  }, []);

  useEffect(() => {
    getUser(user._id);
  }, []);
  return (
    <>
      <Layout>
        <div className="profile-page">{profileUser.name}</div>
        <div className="first-div-profile-page">
          <div className="profile-page-header">
            <div className="profile-page-header-img">
              <img
                src={profileUser.profileImg}
                alt="profileImg"
                id="img-profile-page"
              />
            </div>
            <div className="profile-page-header-postnumber">
              <div>{profileUser.numberOfPosts}</div>
              <p>Posts</p>
            </div>
            <div className="profile-page-header-followersnumber">
              <div>{profileUser.numberOfFollowers}</div>
              <p>Followers</p>
            </div>
            <div className="profile-page-header-followednumber">
              <div>{profileUser.numberOfFollowed}</div>
              <p>Followed</p>
            </div>
          </div>
          <div className="div-info-sobre">
            <div className="profile-page-name">{profileUser.biography}</div>
          </div>
          <div className="profile-page-posts">
            {userPosts.length === 0
              ? "No posts"
              : userPosts.map((p) => {
                  return <Post p={p} key={p._id} />;
                })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default observer(ProfilePage);
