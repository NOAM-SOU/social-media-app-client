import { observer } from "mobx-react";
import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { RiHeartFill } from "react-icons/ri";
import { MdExplore } from "react-icons/md";
import { rootStores } from "../../Stores/main";
import "./headerHome.css";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram"
          />
        </Link>
        <ul>
          <li>
            <Link to="/">
              <FiSend />
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdExplore />
            </Link>
          </li>
          <li>
            <Link to="/">
              <RiHeartFill />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default observer(HeaderHome);
