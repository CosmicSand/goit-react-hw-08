import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import storage from "redux-persist/lib/storage";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.hero}>Your contacts</h1>
      <ContactForm />
      <SearchBox />
      <div className={css.contacts}>
        {isError && !isLoading && <ErrorMessage />}
        {isLoading && !isError && <Loader />}
        {!isLoading && !isError && <ContactList />}
      </div>
    </div>
  );
}
