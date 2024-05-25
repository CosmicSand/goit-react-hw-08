import { NavLink } from "react-router-dom";

import clsx from "clsx";

import css from "./AuthNav.module.css";

export default function AuthNav() {
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="/register" className={activeLink}>
            Register
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/login" className={activeLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
