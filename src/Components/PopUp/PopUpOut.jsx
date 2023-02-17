// import { observer } from "mobx-react";
// import rootStore from "../../Stores/main";
// import "./PopUpOut.css";

// const { AUTH_STORE } = rootStore;

// function PopUpOut(props) {
//   const { logout } = AUTH_STORE;
//   return (
//     <div className="popup-div-logout">
//       <div className="popup-div-question">
//         Are you sure you want to log out?
//       </div>
//       <button
//         onClick={() => {
//           logout();
//           props.set(false);
//         }}
//         className="popup-btn-yes"
//       >
//         Yes
//       </button>
//       <button onClick={() => props.set(false)} className="popup-btn-no">
//         No
//       </button>
//     </div>
//   );
// }

// export default observer(PopUpOut);
