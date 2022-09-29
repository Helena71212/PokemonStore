import startCase from "lodash/startCase";

import styles from "./index.module.css";

const SignUp = ({
  handleCreate,
  handleSignIn,
  handleSubmit,
  handleFormChange,
  formValues,
  data,
  error,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.registerArea}>
      <h1>Create account.</h1>
      <form className={styles.formSignUp} onSubmit={handleSubmit}>
        {Object.entries(formValues).map(([fieldName, value]) => {
          return (
            <div className={styles.formArea}>
              <input
                className={styles.inputSignUp}
                key={fieldName}
                type="text"
                placeholder={startCase(fieldName)}
                value={value}
                name={fieldName}
                onChange={handleFormChange}
              />
            </div>
          );
        })}
        <div className={styles.buttonArea}>
          <button className={styles.btnRegistr} onClick = {handleCreate} role="submit">
            Create Account
          </button>

          <p className={styles.successMessage}>{data?.data?.message}</p>
          <p className={styles.failMessage}>{error?.message}</p>

          <p>Already have an account?</p>
          <button
            onClick={handleSignIn}
            className={styles.btnSignIn}
            type="primary"
          >
            Sign In
          </button>
        </div>
      </form>
      </div>
      
    </div>
  );
};

export default SignUp;
