import { NextPage } from "next";
import Signup from "../components/Signup/Signup";
import s from "../styles/pages/register.module.scss";

const Register: NextPage = () => {
  return (
    <div className={s.register}>
      <h2 className={s.title}>Sign Up</h2>
      <Signup />
    </div>
  );
};

export default Register;
