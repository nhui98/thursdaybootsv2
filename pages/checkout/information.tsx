import { NextPage } from "next";
import CheckoutCart from "../../components/CheckoutCart/CheckoutCart";
import CheckoutInfoForm from "../../components/CheckoutInfoForm/CheckoutInfoForm";
import CheckoutLayout from "../../components/Layouts/CheckoutLayout";

const Information: NextPage & { checkout: boolean } = () => {
  return (
    <CheckoutLayout left={<CheckoutInfoForm />} right={<CheckoutCart />} />
  );
};

Information.checkout = true;
export default Information;
