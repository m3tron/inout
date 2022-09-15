import { useRouter } from "next/router";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/auth";
import { NextComponentType } from "next";

const Header: NextComponentType = () => {
  const auth = useSelector((state: RootState) => state.auth.loggedIn);

  const dispatch = useDispatch();

  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch(login());
    router.push("/dashboard");
  };

  const hangleLogout = (e: any) => {
    e.preventDefault();
    dispatch(logout());
    router.push("/");
  };

  return (
    <header
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>Header</div>
      <button onClick={!auth ? handleLogin : hangleLogout}>
        {!auth ? "login" : "logout"}
      </button>
    </header>
  );
};

export default Header;
