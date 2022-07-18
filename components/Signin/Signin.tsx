import { Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import Input from "../FormikComponents/Input";
import s from "./Signin.module.scss";

interface SigninFormType {
  email: string;
  password: string;
}

const initialValues: SigninFormType = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("This field is required."),
  password: Yup.string().required("This field is required."),
});

export default function Signin() {
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
        <button type="submit" className={s.submitBtn}>
          Submit
        </button>

        <div className={s.register}>
          <span>New Customer?</span>
          <Link href="/register">
            <a className={s.link}>Register for an account</a>
          </Link>
        </div>
      </Form>
    </Formik>
  );
}
