import { observer } from "mobx-react";
import { useEffect } from "react";
import { CgBookmark, CgHeart } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import rootStore from "../../Stores/main";
import "./PostPage.css";

const { AUTH_STORE, USER_STORE } = rootStore;

function PostPage() {
  const { postId } = useParams();
  const { getPost, post, getUser, another } = USER_STORE;
  console.log(postId);

  useEffect(() => {
    getUser(post.userId);
  }, []);

  useEffect(() => {
    getPost(postId);
  }, []);

  return (
    <>
      <Layout>
        <div className="first-div-postpage">
          <Link to={`/${another._id}`} id="postpage-link-to">
            <div className="div-postpage-userlink">
              <img
                src={another.profileImg}
                alt="img"
                id="postpage-imguser-link"
              />
              <div id="postpage-nameuser-link">{another.name}</div>
            </div>
          </Link>
          <div className="div-postpage-imgpost">
            <img src={post.img} alt="img" id="img-postpage" />
          </div>
          <div className="div-icons-postpage">
            <div className="postpage-icons-rest">
              <CgHeart className="heart-icon-postpage" />
              <FaRegComment className="comment-icon-postpage" />
            </div>

            <div id="div-postpage-save">
              <CgBookmark className="bookmark-icon-postpage" />
            </div>
          </div>
          <div className="div-num-likes">{post.numberOfLikes} Likes</div>
          <div className="div-info-postpage">
            <div className="div-info-postpage-name">{another.name}</div>
            <div className="div-info-postpage-content">{post.content}</div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default observer(PostPage);
