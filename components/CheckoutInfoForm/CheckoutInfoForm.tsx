import { Form, Formik } from "formik";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import * as Yup from "yup";
import { useAppState } from "../../context/appContext";
import { Dispatch } from "../../context/appTypes";
import Input, { SelectInput } from "../FormikComponents/Input";
import s from "./CheckoutInfoForm.module.scss";

const countryOptions = [
  { key: "select an option", value: "" },
  { key: "United States", value: "United States" },
  { key: "United Kingdom", value: "United Kingdom" },
];

interface InformationFormtype {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  address: string;
  city: string;
  postcode: string;
  phone: string;
}

const initialValues = ({
  address,
  city,
  country,
  email,
  firstName,
  lastName,
  phone,
  postcode,
}: InformationFormtype) => {
  return {
    address,
    city,
    country,
    email,
    firstName,
    lastName,
    phone,
    postcode,
  };
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Format invalid").required("Required"),
  country: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postcode: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
});

const onSubmit = (
  values: InformationFormtype,
  dispatch: Dispatch,
  router: NextRouter
) => {
  const {
    firstName,
    address,
    city,
    country,
    email,
    lastName,
    phone,
    postcode,
  } = values;

  dispatch({
    type: "UPDATE_USER",
    payload: {
      firstName,
      lastName,
      email,
    },
  });

  dispatch({
    type: "UPDATE_DELIVERY_ADDRESS",
    payload: {
      address,
      city,
      country,
      phone,
      postcode,
    },
  });

  router.push("/checkout/shipping");
};

export default function CheckoutInfoForm() {
  const { state, dispatch } = useAppState();
  const { basket, user, deliveryAddress } = state;
  const { products } = basket;
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues({ ...user, ...deliveryAddress })}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values, dispatch, router)}
    >
      <Form className={s.form}>
        <div className={s.contactinfo}>
          <div className={s.title}>
            <span>Contact information</span>
            <span>
              Already have an account?
              <Link href={"/login"}>
                <a className={s.login}>Log in</a>
              </Link>
            </span>
          </div>
          <Input label="Email" name="email" type="text" />
        </div>

        <div className={s.shippinginfo}>
          <div className={s.title}>Shipping address</div>
          <SelectInput
            label="Country/Region"
            name="country"
            options={countryOptions}
          />
          <div className={s.two}>
            <Input label="First name" name="firstName" type="text" />
            <Input label="Last name" name="lastName" type="text" />
          </div>
          <Input label="Address" name="address" type="text" />
          <div className={s.two}>
            <Input label="City" name="city" type="text" />
            <Input label="Postcode" name="postcode" type="text" />
          </div>
          <Input label="Phone" name="phone" type="number" />
        </div>

        <div className={s.footer}>
          <button
            type="submit"
            disabled={products.length === 0 ? true : false}
            className={s.nextStepBtn}
          >
            Continue To Shipping
          </button>
        </div>
      </Form>
    </Formik>
  );
}
