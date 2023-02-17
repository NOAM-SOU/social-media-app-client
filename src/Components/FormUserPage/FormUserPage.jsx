import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { rootStores } from "../../Stores/main";
import "./FormUserPage.css";

const { USER_STORE } = rootStores;

function FormUserPage() {
  const { getUser, another, anotherPosts, getAnotherPosts } = USER_STORE;
  const [follow, setFollow] = useState(false);

  const { userId } = useParams();

  useEffect(() => {
    getUser(userId, false);
  });

  useEffect(() => {
    getAnotherPosts(another._id);
  });

  return (
    <div className="formuserpage-first-div">
      <div className="user-page-header">
        <div className="user-page-header-img">
          <img src={another.profileImg} alt="profileImg" id="img-user-page" />
        </div>
        <div className="user-page-header-postnumber">
          <div>{another.numberOfPosts}</div>
          <p>Posts</p>
        </div>
        <div className="user-page-header-followersnumber">
          <div>{another.numberOfFollowers}</div>
          <p>Followers</p>
        </div>
        <div className="user-page-header-followednumber">
          <div>{another.numberOfFollowed}</div>
          <p>Followed</p>
        </div>
      </div>

      <div className="user-page-username">{another.name}</div>

      <div className="div-info-sobre">
        <div className="user-page-name">{another.biography}</div>
      </div>
      <div className="btn-follow-anotherpage-div">
        <button className="btn-follow-anotherpage">Follow</button>
      </div>
      <div className="user-page-posts">
        {anotherPosts.length === 0
          ? "No posts"
          : anotherPosts.map((p) => {
              return (
                <Link
                  to={`/postpage/${p._id}`}
                  key={p._id}
                  className="link-profilePage-post"
                >
                  <div className="posts-img-userpage">
                    <img src={p.img} alt="img" className="img-post-user" />
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default observer(FormUserPage);
