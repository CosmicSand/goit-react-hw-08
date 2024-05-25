import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameID = useId();
  const numberID = useId();
  const passwordID = useId();
  const initialInfo = {
    name: "",
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

  function handleSubmit(values, actions) {
    const newUser = { ...values };
    newUser.name = newUser.name.trim();
    // Phone number formatting
    console.log("2");
    dispatch(register(newUser));
    console.log(newUser);

    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialInfo}
      onSubmit={handleSubmit}
      // validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameID}>Name</label>
        <ErrorMessage name="name" component="span" />
        <Field
          className={css.input}
          id={nameID}
          name="name"
          placeholder="Elizabeth Bor"
        />

        <label htmlFor={numberID}>E-mail</label>
        <ErrorMessage name="mail" component="span" />
        <Field
          className={css.input}
          id={numberID}
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
          Register
        </button>
      </Form>
    </Formik>
  );
}
