import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { setEdited } from "../../redux/contacts/slice";
import css from "./EditForm.module.css";

export default function EditForm({ id, openner }) {
  const dispatch = useDispatch();

  const nameID = useId();
  const numberID = useId();
  const initialInfo = {
    name: "",
    number: "",
  };
  //   const contactSchema = Yup.object().shape({
  //     name: Yup.string().min(2, " Too Short!").max(50, "Too Long!"),
  //     number: Yup.string().min(7, " Too Short!"),
  //   });

  function handleSubmit(values, actions) {
    const editedContact = { ...values, id };
    const arrayLikeNumber = [];

    if (!values.name && !values.number) return openner(false);
    // Phone number formatting

    editedContact.number
      .trim()
      .replace(/-/g, "")
      .split("")
      .map((num, i) => {
        if ((i % 2 !== 0 && i >= 5) || i === 3) {
          arrayLikeNumber.push("-");
        }
        arrayLikeNumber.push(num);
      });

    editedContact.name = editedContact.name
      .trim()
      .split(" ")
      .map(
        (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");

    editedContact.number = arrayLikeNumber.join("");
    console.log(editedContact);

    dispatch(editContact(editedContact));
    dispatch(setEdited(true));
    actions.resetForm();
    openner(false);
  }

  function handleClose() {
    openner(false);
  }

  return (
    <div className={css.backdrop}>
      <h2>Edit </h2>

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

          <label htmlFor={numberID}>Number</label>
          <ErrorMessage name="number" component="span" />
          <Field
            className={css.input}
            id={numberID}
            name="number"
            type="tel"
            placeholder="1234567"
          />
          <div className={css.btnContainer}>
            <button className={css.edit} type="submit">
              Edit
            </button>
            <button className={css.close} type="button" onClick={handleClose}>
              Close
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
