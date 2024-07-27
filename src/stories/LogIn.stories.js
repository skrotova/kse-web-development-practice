import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from '../Components/Login/Login'

export default {
  title: 'Components/Login',
  component: Login
}

const Template = (args) => (
  <Router>
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <Login {...args} />
    </div>
  </Router>
)

export const Default = Template.bind({})
Default.args = {}
