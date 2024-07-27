import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Login.css';

const Login = () => {
  const navigate = useNavigate();
  
  const submit = () => {
    event.preventDefault();
    navigate('/subjects')
  }

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form className={styles.loginForm} method='POST' onSubmit={submit}>
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
