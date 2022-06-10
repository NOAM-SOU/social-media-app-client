// import "./Layout.css";
import { CgProfile } from "react-icons/cg";
import { VscDiffAdded } from "react-icons/vsc";
import { AiOutlineSearch, AiOutlineLogin, AiFillHome } from "react-icons/ai";
import { observer } from "mobx-react";
import MyContext from "../../Context/MyContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const { setShow } = useContext(MyContext);
  return (
    <>
      {children}
      <div className="auth-layout">
        <div className="home-div-icons">
          <Link className="link-authlayout-icon" to="/">
            <AiFillHome className="home-icon" />
          </Link>
          <Link className="link-authlayout-icon" to="/profilepage">
            <CgProfile className="profile-icon" />
          </Link>
          <Link className="link-authlayout-icon" to="/addnew">
            <VscDiffAdded className="add-icon" />
          </Link>
          <Link className="link-authlayout-icon" to="/search">
            <AiOutlineSearch className="search-icon" />
          </Link>
          <AiOutlineLogin
            className="logout-icon"
            onClick={() => setShow(true)}
          />
        </div>
      </div>
    </>
  );
}

export default observer(Layout);
