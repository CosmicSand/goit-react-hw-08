import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <p>Simply LogIn </p>
      <LoginForm />
    </div>
  );
}
