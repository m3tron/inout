import { useRouter } from "next/router";
import Link from "next/link";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../services/auth";
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
      <div>
        <Link href="/">Header</Link>
      </div>
      <div>
        <Link href="/dashboard">dashboard</Link>
        <Link href="/dashboard/customers/new">new customer</Link>
        <button onClick={!auth ? handleLogin : hangleLogout}>
          {!auth ? "login" : "logout"}
        </button>
      </div>
    </header>
  );
};

export default Header;
