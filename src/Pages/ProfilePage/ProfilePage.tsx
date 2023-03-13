import React, { useContext, useEffect, useState } from "react";
import "./ProfilePage.css";
import { rootStores } from "../../Stores/main";
import { observer } from "mobx-react";
import Gallery from "../../Components/gallery/gallery";
import Header from "../../Components/header/header";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { IsLoading } from "../../Context/MyContext";

const { authStore, postStore, followStore, userStore } = rootStores;

function Profile() {
  const { id } = useParams();
  const { isLoading, setIsLoading } = useContext(IsLoading);

  const { user, getUser } = authStore;
  const { getUserPosts } = postStore;
  const { another } = userStore;
  const { getFollowedUsers, followedUsers, checkFollowStatus } = followStore;
  const [following, setFollowing] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUser() {
      if (id === user?.id) {
        await getUser(id!);
        await getUserPosts(id!);
      } else {
        await getUser(id!, false);
        await getFollowedUsers(user?.id!);
        const followSt = await checkFollowStatus(user?.id!, another._id!);
        // console.log(followSt, "THE FUNCTION CHECK");

        setFollowing(followSt);
        await getUserPosts(id!, false);
      }
      setIsLoading(false);
    }

    fetchUser();
  }, [id, followedUsers]);

  return (
    <div className="profile-container">
      {isLoading ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <>
          <Header id={id!} state={following} setState={setFollowing} />
          <Gallery id={id!} />
        </>
      )}
    </div>
  );
}

export default observer(Profile);
