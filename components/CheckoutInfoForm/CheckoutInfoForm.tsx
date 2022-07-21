import { Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import Input, { SelectInput } from "../FormikComponents/Input";
import s from "./CheckoutInfoForm.module.scss";

const countryOptions = [{ key: "United Kingdom", value: "uk" }];

interface InformationFormtype {}

const initialValues: InformationFormtype = {};

const validationSchema = Yup.object({});

export default function CheckoutInfoForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
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
          <Input label="Phone" name="phone" type="text" />
        </div>

        <div className={s.footer}>
          <button type="submit" className={s.nextStepBtn}>
            Continue To Shipping
          </button>
        </div>
      </Form>
    </Formik>
  );
}
