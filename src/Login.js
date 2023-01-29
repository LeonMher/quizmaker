import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const cookies = new Cookies();

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const val = e.target.value;
    setData({
      ...data,
      [e.target.name]: val,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) =>
        cookies.set("TOKEN", res.data.token, {
          path: "/",
        })
      )
      .then(() => {
        setIsLoggedIn(true);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/quiz");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          onChange={handleOnChange}
          placeholder="email"
        />
        <input
          name="password"
          type="password"
          onChange={handleOnChange}
          placeholder="password"
        />
        <button type="submit">Login</button>
        <p>{isLoggedIn && "Sucess"}</p>
      </form>
    </>
  );
};

export default Login;
