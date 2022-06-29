import "./Layout.css";
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
    <div className="firstdiv-layout">
      <div className="header-layout">Dimelo</div>
      {children}
      <div className="home-div-icons">
        <Link className="link-layout-router" to="/">
          <AiFillHome className="icon-layout" />
        </Link>
        <Link className="link-layout-router" to="/profilepage">
          <CgProfile className="icon-layout" />
        </Link>
        <Link className="link-layout-router" to="/addnew">
          <VscDiffAdded className="icon-layout" />
        </Link>
        <Link className="link-layout-router" to="/search">
          <AiOutlineSearch className="icon-layout" />
        </Link>
        <AiOutlineLogin className="icon-layout" onClick={() => setShow(true)} />
      </div>
    </div>
  );
}

export default observer(Layout);
