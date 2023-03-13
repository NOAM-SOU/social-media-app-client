import { observer } from "mobx-react";
import "./Post.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { RiBookmarkLine, RiHeart3Line } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { RiHeartFill } from "react-icons/ri";
import { rootStores } from "../../Stores/main";
import { addLike, removeLike } from "../../tools/likesFunctions";
import { PostProps } from "../../types/props";
import { IsLoading } from "../../Context/MyContext";
import { ClipLoader } from "react-spinners";

function Post(props: PostProps) {
  const { authStore, userStore, likeStore } = rootStores;

  const { user, getUser } = authStore;
  const { another } = userStore;
  const { checkLikeStatus } = likeStore;
  const [like, setLike] = useState<boolean | null>(false);
  const { isLoading, setIsLoading } = useContext(IsLoading);
  const [likeCount, setLikeCount] = useState<number | undefined>(
    props.post?.numberOfLikes
  );

  console.log(
    props.key!,
    "THE KEY IN POST COMPONENT",
    props.post?._id!,
    "THE POST ID IN POST COMPONENT"
  );

  useEffect(() => {
    async function fetchData() {
      // console.log("LLEGE");

      await getUser(props.post?.userId!, false);
      const likeSt = await checkLikeStatus(user?.id!, props.post?._id!);
      // console.log(likeSt, "LIKEST");

      setLike(likeSt);
      setIsLoading(false);
    }
    fetchData();
  }, [like, setLike]);

  const toggleLike = (userId: string, postId: string) => {
    if (like) {
      removeLike(userId, postId);
      console.log(props?.post, "POST OBEJCT AFTER REMOVED LIKE");
      setLikeCount(likeCount! - 1);
    } else {
      addLike(userId, postId);

      setLikeCount(likeCount! + 1);
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
                <h2 className="post-likes">{likeCount} Likes</h2>
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
