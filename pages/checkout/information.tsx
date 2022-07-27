import { NextPage } from "next";
import CheckoutInfoForm from "../../components/CheckoutInfoForm/CheckoutInfoForm";

const Information: NextPage & { checkout: boolean } = () => {
  return <CheckoutInfoForm />;
};

Information.checkout = true;
export default Information;
