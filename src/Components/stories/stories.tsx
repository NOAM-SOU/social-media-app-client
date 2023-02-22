import { observer } from "mobx-react";
import React from "react";

import "./stories.css";

const Stories = () => {
  return (
    <section className="stories">
      <ul>
        <li>
          <a href="/">
            <img src="https://via.placeholder.com/150" alt="Story" />
            <span>Username</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://via.placeholder.com/150" alt="Story" />
            <span>Username</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://via.placeholder.com/150" alt="Story" />
            <span>Username</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://via.placeholder.com/150" alt="Story" />
            <span>Username</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://via.placeholder.com/150" alt="Story" />
            <span>Username</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default observer(Stories);
