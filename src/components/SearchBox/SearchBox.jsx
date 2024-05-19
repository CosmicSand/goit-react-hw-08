import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  const searchId = useId();

  return (
    <>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id={searchId}
        value={value}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
      />
    </>
  );
}
export default SearchBox;
