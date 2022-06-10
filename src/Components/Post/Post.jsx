import { observer } from "mobx-react";
import { CgHeart } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { CgBookmark } from "react-icons/cg";
import { AiOutlineDelete } from "react-icons/ai";
import rootStore from "../../Stores/main";
import "./Post.css";
import PopUpDelete from "../PopUp/PopUpDelete";
import { useState } from "react";

const { AUTH_STORE } = rootStore;

function Post(props) {
  const [showDel, setShowDel] = useState(false);

  const { user } = AUTH_STORE;

  return (
    <>
      {showDel && <PopUpDelete setShowDel={setShowDel} p={props.p} />}
      <div className="first-post-div">
        <div className="img-post-div">
          <img className="img-post-app" src={props.p.img} alt="post" />
        </div>
        <div className="icons">
          <CgHeart className="heart-icon" />
          <FaRegComment className="comment-icon" />
          <CgBookmark className="bookmark-icon" />
          <AiOutlineDelete
            className="delete-icon"
            onClick={() => {
              setShowDel(true);
            }}
          />
        </div>
        <div className="post-description-div">
          {user.name} {props.p.content}
        </div>
      </div>
    </>
  );
}

export default observer(Post);
