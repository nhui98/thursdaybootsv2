import { NextPage } from "next";
import Signin from "../components/Signin/Signin";
import s from "../styles/pages/login.module.scss";

const Login: NextPage = () => {
  return (
    <div className={s.login}>
      <h2 className={s.title}>Login</h2>
      <Signin />
    </div>
  );
};

export default Login;
