// import { observer } from "mobx-react";
// import { CgHeart } from "react-icons/cg";
// import { FaRegComment } from "react-icons/fa";
// import { CgBookmark } from "react-icons/cg";
// import { AiOutlineDelete } from "react-icons/ai";
// import rootStore from "../../Stores/main";
// import "./Post.css";
// import PopUpDelete from "../PopUp/PopUpDelete";
// import { useState } from "react";

// const { AUTH_STORE } = rootStore;

// function Post(props) {
//   const [showDel, setShowDel] = useState(false);
//   const [id, setId] = useState("");
//   const { user } = AUTH_STORE;
//   return (
//     <>
//       <div className="first-post-div">
//         <div className="img-post-div">
//           <img className="img-post-app" src={props.p.img} alt="post" />
//         </div>
//         <div className="icons">
//           <CgHeart className="heart-icon" />
//           <FaRegComment className="comment-icon" />
//           <CgBookmark className="bookmark-icon" />
//           {user._id === props.p.userId && (
//             <AiOutlineDelete
//               className="delete-icon"
//               onClick={() => {
//                 setShowDel(true);
//                 setId(props.p._id);
//               }}
//             />
//           )}
//         </div>
//         <div className="post-description-div">{props.p.content}</div>
//         {showDel && <PopUpDelete setShowDel={setShowDel} pId={id} />}
//       </div>
//     </>
//   );
// }

// export default observer(Post);
