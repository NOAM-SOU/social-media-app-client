import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { rootStores } from "../../Stores/main";
import "./header.css";

const { authStore, postStore } = rootStores;

const Header = () => {
  const { user, userProfile, getUser } = authStore;
  const { getUserPosts, userPosts } = postStore;
  useEffect(() => {
    getUser(user?.id!);
  }, []);

  useEffect(() => {
    getUserPosts(user?.id!);
  }, []);
  console.log("userPosts", userPosts);
  return (
    <div className="header-container">
      <div className="header-part1">
        <h1 className="profile-username">{userProfile.name}</h1>
      </div>
      <div className="header-part2">
        <img
          src={userProfile.profileImg}
          alt="profile picture"
          className="profile-picture"
        />
        <div className="profile-details">
          <ul className="profile-stats">
            <li>
              <span className="stat-count">{userProfile.numberOfPosts}</span>
              <span className="stat-title">posts</span>
            </li>
            <li>
              <span className="stat-count">
                {userProfile.numberOfFollowers}
              </span>
              <span className="stat-title">followers</span>
            </li>
            <li>
              <span className="stat-count">{userProfile.numberOfFollowed}</span>
              <span className="stat-title">following</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-part3">
        <h2 className="profile-email">{userProfile.email}</h2>
      </div>
      <div className="header-part4">
        <p className="profile-bio">{userProfile.biography}</p>
      </div>
      <div className="header-part5">
        <button className="edit-profile-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default observer(Header);
