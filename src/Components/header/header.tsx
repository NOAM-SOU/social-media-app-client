import { observer } from "mobx-react";
import React from "react";
import { RiUserFollowFill } from "react-icons/ri";
import { rootStores } from "../../Stores/main";
import { addFollow, removeFollow } from "../../tools/followFunctions";
import { HeaderProps } from "../../types/props";
import "./header.css";

const { authStore, userStore } = rootStores;

const Header = ({ id, state, setState }: HeaderProps) => {
  const { user, userProfile } = authStore;
  const { another } = userStore;

  const toggleFollow = (userId: string, anotherId: string) => {
    if (state) {
      removeFollow(userId, anotherId);
    } else {
      addFollow(userId, anotherId);
    }
    setState!(!state);
  };

  console.log("state", state);
  return (
    <div className="header-container">
      <div className="header-part1">
        <h1 className="profile-username">
          {id === user?.id ? userProfile.name : another.name}
        </h1>
      </div>
      <div className="header-part2">
        <img
          src={id === user?.id ? userProfile.profileImg : another.profileImg}
          alt="profile picture"
          className="profile-picture"
        />
        <div className="profile-details">
          <ul className="profile-stats">
            <li>
              <span className="stat-count">
                {id === user?.id
                  ? userProfile.numberOfPosts
                  : another.numberOfPosts}
              </span>
              <span className="stat-title">posts</span>
            </li>
            <li>
              <span className="stat-count">
                {id === user?.id
                  ? userProfile.numberOfFollowers
                  : another.numberOfFollowers}
              </span>
              <span className="stat-title">followers</span>
            </li>
            <li>
              <span className="stat-count">
                {id === user?.id
                  ? userProfile.numberOfFollowed
                  : another.numberOfFollowed}
              </span>
              <span className="stat-title">following</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-part3">
        <h2 className="profile-email">
          {id === user?.id ? userProfile.email : another.email}
        </h2>
      </div>
      <div className="header-part4">
        <p className="profile-bio">
          {id === user?.id ? userProfile.biography : another.biography}
        </p>
      </div>
      <div className="header-part5">
        {id === user?.id ? (
          <button className="edit-profile-button">Edit Profile</button>
        ) : (
          <>
            <button
              onClick={() => {
                toggleFollow(user?.id!, another._id!);
              }}
              className="another-button"
            >
              {state ? <RiUserFollowFill /> : "Follow"}
            </button>
            <button className="another-button">Message</button>
          </>
        )}
      </div>
    </div>
  );
};

export default observer(Header);
