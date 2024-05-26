import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import EditForm from "../EditForm/EditForm";
import css from "./ContactList.module.css";
import { selectFiltersName } from "../../redux/filters/selectors";
import { useState } from "react";

function ContactList() {
  const contacts = useSelector(selectFiltersName);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);

  return (
    <div>
      <ul className={css.list}>
        {contacts
          .toSorted((a, b) => a.name.localeCompare(b.name))
          .map((contact) => (
            <li className={css.item} key={contact.id}>
              <Contact
                contactInfo={contact}
                openner={setIsOpen}
                idSetter={setId}
              />
            </li>
          ))}
      </ul>
      {isOpen && <EditForm id={id} openner={setIsOpen} />}
    </div>
  );
}

export default ContactList;
