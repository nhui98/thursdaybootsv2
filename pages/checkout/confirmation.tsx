import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { useAppState } from "../../context/appContext";
import s from "../../styles/pages/confirmation.module.scss";

const Confirmation: NextPage & { noLayout: boolean } = () => {
  const { dispatch } = useAppState();

  useEffect(() => {
    dispatch({ type: "CLEAR_BASKET" });

    // send order (user details, basket, address, payment details to server)
  }, [dispatch]);

  return (
    <div className={s.confirmation}>
      <h1 className={s.success}>Order Successful!</h1>
      <Link href="/">
        <a className={s.link}>Return to home page</a>
      </Link>
    </div>
  );
};

Confirmation.noLayout = true;
export default Confirmation;
