import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/Login/Login'
import SubjectList from './Components/SubjectList/SubjectList'
import OptionsList from './Components/OptionsList/OptionsList'
import AddMaterialPage from './Components/AddMaterialPage/AddMaterialPage'

const App = () => {
  console.log('APP rendering')
  const subjects = [
    {
      id: 1,
      name: 'Subject1'
    },
    {
      id: 2,
      name: 'Subject2'
    },
    {
      id: 3,
      name: 'Subject3'
    },
    {
      id: 4,
      name: 'Subject4'
    }
  ]
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
        <Route path="/subjects" Component={() => <SubjectList subjects={subjects} />} />
        <Route path="/subjects/:id" Component={OptionsList} />
        <Route path="/materials/:id" Component={Mateiral} />
        <Route path="/materials/add" Component={AddMaterial} />
      </Routes>
    </BrowserRouter>
  )
}

export const Home = () => {
  console.log('Home rendering')
  return <p>Home</p>
}

export const Mateiral = () => {
  console.log('Rendering material?')
  return (
    <>
      <ul>
        <li>material 1</li>
        <li>material 2</li>
      </ul>
    </>
  )
}

export const AddMaterial = () => {
  console.log('Rendering add material?')

  const submitHandler = (formdata) => {
    console.log(formdata)
    alert('Thanks for adding material')
    return
  }
  return (
    <>
      <AddMaterialPage onAddMaterial={submitHandler}></AddMaterialPage>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)
