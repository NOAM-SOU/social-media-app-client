import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { ChildrenProps } from "../../types/props";
import { FaHome, FaPlusSquare, FaSearch, FaUser } from "react-icons/fa";
import "./Layout.css";
console.log(FaUser);

function Layout({ children }: ChildrenProps) {
  const navigate = useNavigate();
  return (
    <div className="firstdiv-layout">
      <div className="father-header-layout">
        <div className="header-layout">Dimelo</div>
      </div>

      {children}
      <nav className="navbar">
        <Link className="link-layout-router" to="/">
          <FaHome />
        </Link>

        <Link className="link-layout-router" to="/search">
          <FaSearch />
        </Link>

        <Link className="link-layout-router" to="/addnew">
          <FaPlusSquare />
        </Link>

        <Link className="link-layout-router" to="/profilepage">
          <FaUser />
        </Link>
      </nav>
    </div>
  );
}

export default observer(Layout);
