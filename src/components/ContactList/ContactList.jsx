import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFiltersName } from "../../redux/filtersSlice";

function ContactList() {
  const contacts = useSelector(selectFiltersName);
  return (
    <ul className={css.list}>
      {contacts
        .toSorted((a, b) => a.name.localeCompare(b.name))
        .map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact contactInfo={contact} />
          </li>
        ))}
    </ul>
  );
}

export default ContactList;
