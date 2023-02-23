import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { RiUserFollowFill } from "react-icons/ri";
import { rootStores } from "../../Stores/main";
import { addFollow } from "../../tools/followFunctions";
import { IdProps } from "../../types/props";
import "./header.css";

const { authStore, postStore, userStore, followStore } = rootStores;

const Header = ({ id }: IdProps) => {
  const { user, userProfile, getUser } = authStore;
  const { getUserPosts, userPosts } = postStore;
  const { another } = userStore;
  const { follow, getFollowedUsers, followedUsers } = followStore;
  const [following, setFollowing] = useState<boolean>(false);

  useEffect(() => {
    getFollowedUsers(user?.id!);
  }, []);

  useEffect(() => {
    id === user?.id ? getUser(id!) : getUser(id!, false);
  }, [id, followedUsers]);

  useEffect(() => {
    const inclueds = followedUsers.find((u) => u._id === another._id);
    if (inclueds) setFollowing(true);
  }, [followedUsers, another._id]);

  console.log("followeddddd", followedUsers);
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
                addFollow(user?.id!, another._id);
                setFollowing(true);
              }}
              className="another-button"
            >
              {following ? <RiUserFollowFill /> : "Follow"}
            </button>
            <button className="another-button">Message</button>
          </>
        )}
      </div>
    </div>
  );
};

export default observer(Header);
