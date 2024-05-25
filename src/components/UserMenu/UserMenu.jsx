import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors";

import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const username = useSelector(selectName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    const token = localStorage.getItem("token");
    dispatch(logout(token));
    // navigate("/", { replace: false });
  }

  return (
    <div className={css.container}>
      <p className={css.greeting}>Hi, {username}</p>
      <button className={css.btn} onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
}
