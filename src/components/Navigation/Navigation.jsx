import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={activeLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={activeLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
