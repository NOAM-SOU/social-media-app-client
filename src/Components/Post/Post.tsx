import { observer } from "mobx-react";
import "./Post.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { RiBookmarkLine, RiHeart3Line } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { RiHeartFill } from "react-icons/ri";
import { rootStores } from "../../Stores/main";
import { addLike } from "../../tools/likesFunctions";
import { PostProps } from "../../types/props";
import { IsLoading } from "../../Context/MyContext";
import { ClipLoader } from "react-spinners";

function Post(props: PostProps) {
  const { authStore, postStore, userStore, likeStore } = rootStores;

  const { getFollowedPosts, post, getPost } = postStore;
  const { user, getUser } = authStore;
  const { another } = userStore;
  const { likes, getLikes, checkLikeStatus, likeStatus, removeLike } =
    likeStore;
  const [like, setLike] = useState<boolean | null>(false);
  const { isLoading, setIsLoading } = useContext(IsLoading);

  // useEffect(() => {
  //   // setLike(likeStatus);
  // }, []);

  // console.log(like, "LIKE STATEEEEEE");

  useEffect(() => {
    async function fetchData() {
      console.log("LLEGE");

      await getUser(props.post?.userId!, false);
      const likeSt = await checkLikeStatus(user?.id!, props.post?._id!);
      setLike(likeSt);
      setIsLoading(false);
    }
    fetchData();
  }, [like, setLike]);

  const toggleLike = (userId: string, postId: string) => {
    if (like) {
      removeLike(userId, postId);
    } else {
      addLike(userId, postId);
    }
    setLike(!like);
  };

  return (
    <>
      {isLoading ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <>
          <li>
            <div className="post-header">
              <img
                className="post--img-src-user"
                src={another.profileImg}
                alt="Profile"
              />
              <h2>{another.name}</h2>
            </div>
            <div className="img-post">
              <Link to="/">
                <img
                  className="post--img-src"
                  src={props.post?.img}
                  alt="Post"
                />
              </Link>
            </div>
            <div className="post-footer">
              <div className="post-icons">
                <div>
                  <RiHeartFill
                    onClick={() => {
                      toggleLike(user?.id!, props.post?._id!);
                    }}
                    className={like ? "heart-icon-like" : "heart-icon-postpage"}
                  />
                  <FiSend />
                  <FaRegComment />
                </div>
                <div className="post-save">
                  <RiBookmarkLine />
                </div>
              </div>
              <div className="div-likes">
                <h2 className="post-likes">
                  {props.post?.numberOfLikes} Likes
                </h2>
              </div>
              <div className="post-details">
                <h2 className="post-username">{another.name}</h2>
                <h2 className="content-post">{props.post?.content}</h2>
              </div>
            </div>
          </li>
        </>
      )}
    </>
  );
}

export default observer(Post);
