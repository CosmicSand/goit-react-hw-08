import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";
// import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();

  const mailID = useId();
  const passwordID = useId();
  const initialInfo = {
    email: "",
    password: "",
  };
  // const contactSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .min(2, " Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Required"),
  //   number: Yup.string().min(7, " Too Short!").required("Required"),
  // });

  async function handleSubmit(values, actions) {
    const user = { ...values };
    dispatch(login(user));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialInfo}
      onSubmit={handleSubmit}
      // validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={mailID}>E-mail</label>
        <ErrorMessage name="mail" component="span" />
        <Field
          className={css.input}
          id={mailID}
          name="email"
          type="email"
          placeholder="bigSam@mail.com"
        />
        <label htmlFor={passwordID}>Password</label>
        <ErrorMessage name="password" component="span" />
        <Field
          className={css.input}
          id={passwordID}
          name="password"
          type="password"
          placeholder="mystery"
        />
        <button className={css.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
