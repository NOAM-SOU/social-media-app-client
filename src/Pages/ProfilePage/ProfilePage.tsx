import React, { useEffect } from "react";
import "./ProfilePage.css";
import { rootStores } from "../../Stores/main";
import { observer } from "mobx-react";
import Layout from "../../Components/Layout/Layout";
import Gallery from "../../Components/gallery/gallery";
import Header from "../../Components/header/header";

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
    // <Layout>
    <div className="profile-container">
      <Header />
      <Gallery />
    </div>
    // </Layout>
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
