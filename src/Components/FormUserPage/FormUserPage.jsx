import { observer } from "mobx-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import rootStores from "../../Stores/main";
import "./FormUserPage.css";

const { USER_STORE } = rootStores;

function FormUserPage() {
  const { getUser, another } = USER_STORE;

  const { userId } = useParams();

  useEffect(() => {
    getUser(userId, false);
  });

  return (
    <Layout>
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
        <div className="user-page-posts">
          {userPosts.length === 0
            ? "No posts"
            : userPosts.map((p) => {
                return (
                  <div key={p._id} className="posts-img-userpage">
                    <img src={p.img} alt="img" className="img-post-user" />
                  </div>
                );
              })}
        </div>
      </div>
    </Layout>

    // <div className="formuserpage-first-div">
    //   <div className="formuserpage-header-div"></div>
    //   <div className="formuserpage-infomation-div">{another.name}</div>
    //   <div className="formuserpage-btn-follow">{another.email}</div>
    //   <div className="formuserpage-posts-div"></div>
    // </div>
  );
}

export default observer(FormUserPage);
