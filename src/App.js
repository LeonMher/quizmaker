import "./App.css";
import React, { useEffect } from "react";
import Quiz from "./Quiz";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import Home from "./Home";
import SuperRoute from "./SuperRoute";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const App = () => {
  const useAuth = () => {
    const token = cookies.get("TOKEN");

    return token;
  };
  const isAuth = useAuth();

  return (
    <div className="App">
      {!isAuth && <Login />}

      {/* <Nav /> */}
      <Routes>
        <Route element={<SuperRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
