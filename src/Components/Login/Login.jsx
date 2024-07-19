import React from 'react';
import styles from './Login.css';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form className={styles.loginForm}>
        <label htmlFor="username" className={styles.loginLabel}>Username:</label>
        <input type="text" id="username" name="username" className={styles.loginInput} />

        <label htmlFor="password" className={styles.loginLabel}>Password:</label>
        <input type="password" id="password" name="password" className={styles.loginInput} />

        <button type="submit" className={styles.loginButton}>Login</button>
      </form>
    </div>
  );
};

export default Login;
