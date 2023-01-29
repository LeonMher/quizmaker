import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Nav from "./Nav";
import Login from "./Login";
const cookies = new Cookies();

const useAuth = () => {
  const token = cookies.get("TOKEN");

  return token;
};

const SuperRoute = () => {
  const isAuth = useAuth();

  return (
    <>
      <Nav />
      {/* {isAuth && <Login />} */}
      {isAuth ? <Outlet /> : <Navigate to="/log" />}
    </>
  );
};

export default SuperRoute;
