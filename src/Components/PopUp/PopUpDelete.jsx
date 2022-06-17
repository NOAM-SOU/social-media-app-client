import { observer } from "mobx-react";
import rootStore from "../../Stores/main";

const { USER_STORE, AUTH_STORE } = rootStore;

function PopUpDelete(props) {
  const { deletePost } = USER_STORE;
  const { user } = AUTH_STORE;
  return (
    <div className="popup-div-logout">
      <div className="popup-div-question">
        Are you sure you want to delete this post?
      </div>
      <button
        onClick={() => {
          deletePost(user._id, props.p._id);
          props.setShowDel(false);
        }}
        className="popup-btn-yes"
      >
        Yes
      </button>
      <button onClick={() => props.set(false)} className="popup-btn-no">
        No
      </button>
    </div>
  );
}

export default observer(PopUpDelete);
