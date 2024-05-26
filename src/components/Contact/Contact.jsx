import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

function Contact({ contactInfo: { id, name, number }, openner, idSetter }) {
  const dispatch = useDispatch();

  function handleClick(e) {
    const id = e.target.dataset.id;
    openner(true);
    idSetter(id);
  }

  return (
    <>
      <div>
        <IoPersonSharp className={css.dude} size="18" />

        <p className={css.text}>{name}</p>
        <br />

        <FaPhone className={css.phone} size="18" />

        <p className={css.text}>{number}</p>
      </div>
      <div className={css.container}>
        <button
          className={css.btn}
          type="button"
          data-id={id}
          onClick={(e) => handleClick(e)}
        >
          Edit
        </button>
        <button
          className={css.btn}
          type="button"
          data-id={id}
          onClick={(e) => {
            dispatch(deleteContact(e.target.dataset.id));
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default Contact;
