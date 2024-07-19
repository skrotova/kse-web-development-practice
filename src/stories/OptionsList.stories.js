import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import OptionsList from '../Components/OptionsList/OptionsList'
import styles from '../Components/OptionsList/OptionsList.css'

export default {
  title: 'Components/OptionsList',
  component: OptionsList
}

const Template = (args) => (
  <Router>
    <div>
      <h1>{args.selectedSubject}</h1>
      <OptionsList {...args} />
      <button className={styles.addButton} onClick={() => alert('Add button clicked')}>
        Add
      </button>
    </div>
  </Router>
)

export const Default = Template.bind({})
Default.args = {
  options: [
    { id: 1, name: 'Lecture Notes' },
    { id: 2, name: 'Links' }
  ],
  selectedSubject: 'Subject Name'
}
