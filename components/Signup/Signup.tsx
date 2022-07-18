import { Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import Input from "../FormikComponents/Input";
import s from "./Signup.module.scss";

interface SignupFormType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: SignupFormType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("This field is required."),
  lastName: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Invalid email.")
    .required("This field is required."),
  password: Yup.string()
    .min(6, "Password must be between 6 and 18 characters.")
    .required("This field is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match.")
    .required("This field is required."),
});

export default function Signup() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={s.form}>
        <Input label="First Name" type="text" name="firstName" />
        <Input label="Last Name" type="text" name="lastName" />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="example@email.com"
        />
        <Input label="Password" type="password" name="password" />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
        />
        <button type="submit" className={s.submitBtn}>
          Submit
        </button>

        <div className={s.login}>
          <span>Already registered?</span>
          <Link href="/login">
            <a className={s.link}>Login here</a>
          </Link>
        </div>
      </Form>
    </Formik>
  );
}
