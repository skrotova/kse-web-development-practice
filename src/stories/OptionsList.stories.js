import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import OptionsList from '../Components/OptionsList/OptionsList'

export default {
  title: 'Components/OptionsList',
  component: OptionsList
}

const Template = (args) => (
  <Router>
    <div>
      <h1>{args.selectedSubject}</h1>
      <OptionsList {...args} />
    </div>
  </Router>
)

export const Default = Template.bind({})
Default.args = {
  options: [
    { id: 1, name: 'Lecture Notes' },
    { id: 2, name: 'Assignments' },
    { id: 3, name: 'Exams' },
    { id: 4, name: 'Projects' }
  ],
  selectedSubject: 'Subject Name'
}
