import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ contactInfo: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <IoPersonSharp className={css.dude} size="18" />

        <p className={css.text}>{name}</p>
        <br />

        <FaPhone className={css.phone} size="18" />

        <p className={css.text}>{number}</p>
      </div>
      <button
        className={css.btn}
        type="button"
        id={id}
        onClick={(e) => dispatch(deleteContact(e.target.id))}
      >
        Delete
      </button>
    </>
  );
}

export default Contact;
