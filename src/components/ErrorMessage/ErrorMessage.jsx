import css from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <>
      <p className={css.error}>Ooops! Something went wrong... </p>
    </>
  );
}

export default ErrorMessage;
