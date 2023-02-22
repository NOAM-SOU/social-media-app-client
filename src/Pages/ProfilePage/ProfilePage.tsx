import React, { useEffect } from "react";
import "./ProfilePage.css";
import { rootStores } from "../../Stores/main";
import { observer } from "mobx-react";
import Layout from "../../Components/Layout/Layout";

const { authStore, postStore } = rootStores;

function Profile() {
  const { user, userProfile, getUser } = authStore;
  const { getUserPosts, userPosts } = postStore;
  useEffect(() => {
    getUser(user?.id!);
  }, []);

  useEffect(() => {
    getUserPosts(user?.id!);
  }, []);
  console.log("userPosts", userPosts);
  //   console.log(userProfile);

  //   const [follow, setFollow] = useState(false);

  return (
    <Layout>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar-container">
            <img
              className="profile-avatar"
              src={userProfile.profileImg}
              alt="Profile Avatar"
            />
          </div>
          <div className="profile-info-container">
            <div className="profile-username-container">
              <h1 className="profile-username">{userProfile.name}</h1>
              <button className="profile-edit-button">Edit Profile</button>
              <i className="fas fa-cog"></i>
            </div>
            <div className="profile-stats-container">
              <div className="profile-stat-container">
                <span className="profile-stat-count">
                  {userProfile.numberOfPosts}
                </span>{" "}
                posts
              </div>
              <div className="profile-stat-container">
                <span className="profile-stat-count">
                  {userProfile.numberOfFollowers}
                </span>{" "}
                followers
              </div>
              <div className="profile-stat-container">
                <span className="profile-stat-count">
                  {userProfile.numberOfFollowed}
                </span>
                following
              </div>
            </div>
            <div className="profile-bio-container">
              <h2 className="profile-name">{userProfile.email}</h2>
              <p className="profile-bio">{userProfile.biography}</p>
            </div>
          </div>
        </div>
        <div className="profile-posts-container">
          {userPosts.map((post) => (
            <div key={post._id} className="profile-post-container">
              <img className="profile-post-image" src={post.img} alt="" />
              <div className="profile-post-stats">
                <div className="profile-post-stat">
                  <i className="far fa-heart"></i>
                  <span>{post.likes}</span>
                </div>
                <div className="profile-post-stat">
                  <i className="far fa-comment"></i>
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default observer(Profile);

// import { observer } from "mobx-react";
// import { useEffect, useState } from "react";
// import Layout from "../../Components/Layout/Layout";
// import { rootStores } from "../../Stores/main";
// import "./ProfilePage.css";
// import { Link } from "react-router-dom";
// import React from "react";

// const { authStore, postStore } = rootStores;

// function ProfilePage() {
//   const { user, userProfile, getUser } = authStore;
//   const { getUserPosts, userPosts } = postStore;
//   useEffect(() => {
//     getUser(user?.id!);
//   }, []);

//   useEffect(() => {
//     getUserPosts(user?.id!);
//   }, []);
//   console.log("userPosts", userPosts);
//   //   console.log(userProfile);

//   //   const [follow, setFollow] = useState(false);
//   return (
//     <>
//       {/* <Layout> */}
//       {/* <button onClick={() => getUserPosts(user?.id!)}>gettt</button> */}
//       <div className="first-div-profile-page">
//         <div className="profile-page-header">
//           <div className="profile-page-header-img">
//             <img
//               src={userProfile.profileImg}
//               alt="profileImg"
//               id="img-profile-page"
//             />
//           </div>
//           <div className="profile-page-header-postnumber">
//             <div>{userProfile.numberOfPosts}</div>
//             <p>Posts</p>
//           </div>
//           <div className="profile-page-header-followersnumber">
//             <div>{userProfile.numberOfFollowers}</div>
//             <p>Followers</p>
//           </div>
//           <div className="profile-page-header-followednumber">
//             <div>{userProfile.numberOfFollowed}</div>
//             <p>Followed</p>
//           </div>
//         </div>
//         <div className="profile-page-username">{userProfile.name}</div>

//         <div className="div-info-sobre">
//           <div className="profile-page-name">{userProfile.biography}</div>
//         </div>
//         <div className="profile-page-posts">
//           {userPosts.length === 0
//             ? "No posts"
//             : userPosts.map((p) => {
//                 return (
//                   <Link
//                     to={`/postpage/${p._id}`}
//                     key={p._id}
//                     className="link-profilePage-post"
//                   >
//                     <div className="posts-img-profilepage">
//                       <img src={p.img} alt="img" className="img-post-profile" />
//                     </div>
//                   </Link>
//                 );
//               })}
//         </div>
//       </div>
//       {/* </Layout> */}
//     </>
//   );
// }

// export default observer(ProfilePage);
