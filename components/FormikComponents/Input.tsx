import { ErrorMessage, Field } from "formik";
import s from "./Input.module.scss";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const Input = ({ label, name, ...rest }: InputProps) => (
  <div className={s.formControl}>
    <div className={s.labelError}>
      <label htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component={"div"} className={s.error} />
    </div>
    <Field id={name} name={name} {...rest} />
  </div>
);

export default Input;
