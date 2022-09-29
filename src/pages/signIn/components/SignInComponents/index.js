import styles from "./index.module.css";

const SignIn = ({
  handleSubmit,
  handleFormChange,
  signInForm,
  handleSignUp,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.auth}>
        <h1>Login or create an account</h1>
        <form onSubmit={handleSubmit} className={styles.authForm}>
          <p>Already a customer? Login using your email address.</p>
          <input
            className={styles.inputSignIn}
            name="email"
            type="email"
            value={signInForm.email}
            onChange={handleFormChange}
            placeholder="Email"
          />

          <input
            className={styles.inputSignIn}
            name="password"
            type="password"
            value={signInForm.password}
            onChange={handleFormChange}
            placeholder="Password"
          />
          <div className={styles.buttonArea}>
            <button className={styles.btnSignIn} type="submit">
              SIGN IN
            </button>
            <p>
              Don’t have an account yet?
              <br />
              Creating an account is easy!
            </p>
            <button
              className={styles.btnSignUp}
              onClick={handleSignUp}
              type="primary"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
