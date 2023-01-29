import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Home = () => {
  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={logout}>log out</button>
    </>
  );
};

export default Home;
