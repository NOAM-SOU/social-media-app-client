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
    <div className="formuserpage-first-div">
      <div className="formuserpage-header-div"></div>
      <div className="formuserpage-infomation-div">{another.name}</div>
      <div className="formuserpage-btn-follow"></div>
      <div className="formuserpage-posts-div"></div>
    </div>
  );
}

export default observer(FormUserPage);
