import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/quiz"}>
          <li>Quiz</li>
        </Link>

        <Link to={"/admin"}>
          <li>Admin</li>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
