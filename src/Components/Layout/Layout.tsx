import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { ChildrenProps } from "../../types/props";
import { FaHome, FaPlusSquare, FaSearch, FaUser } from "react-icons/fa";
import "./Layout.css";
console.log(FaUser);
import { rootStores } from "../../Stores/main";

const { authStore } = rootStores;

function Layout({ children }: ChildrenProps) {
  const { user } = authStore;
  const navigate = useNavigate();
  return (
    <div className="firstdiv-layout">
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

        <Link className="link-layout-router" to={`/profilepage/${user?.id}`}>
          <FaUser />
        </Link>
      </nav>
    </div>
  );
}

export default observer(Layout);
