import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import Login from './Components/Login/Login'
// import Login from './Components/Login/Login.jsx'
import styles from './Components/Login/Login.css'
import SubjectList from './Components/SubjectList/SubjectList'

const App = () => {
  console.log('APP rendering')
  return (
    <BrowserRouter>
      {
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/login`}>Login</Link>
          </li>
          <li>
            <Link to={`/subjects`}>Subjects</Link>
          </li>
        </ul>
      }
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/subjects" Component={SubjectList} />
        {/* <Route path="/options-list" Component={OptionsList} /> */}
      </Routes>
    </BrowserRouter>
  )
}

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

const Home = () => {
  console.log('Home rendering')
  return <p>Home</p>
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)
