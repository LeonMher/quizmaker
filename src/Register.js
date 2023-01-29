import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
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
      .post("http://localhost:8081/register", {
        email: data.email,
        password: data.password,
      })
      .then(() => setIsRegistered(true));
  };

  return (
    <>
      <h1>Register page</h1>
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
        <button type="submit">Register</button>
        <p>{isRegistered && "Sucess"}</p>
      </form>
    </>
  );
};
export default Register;
