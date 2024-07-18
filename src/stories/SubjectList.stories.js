import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import SubjectList from '../Components/SubjectList/SubjectList'

export default {
  title: 'Components/SubjectList',
  component: SubjectList
}

const Template = (args) => {
  const [selectedSubject, setSelectedSubject] = useState(null)

  const handleSubjectClick = (subjectName) => {
    setSelectedSubject(subjectName)
  }

  return (
    <Router>
      <div>
        <h1>{selectedSubject || 'Select a Subject'}</h1>
        <SubjectList {...args} onSubjectClick={handleSubjectClick} />
      </div>
    </Router>
  )
}

export const Default = Template.bind({})
Default.args = {
  subjects: [
    { id: 1, name: 'Subject1' },
    { id: 2, name: 'Subject2' },
    { id: 3, name: 'Subject3' },
    { id: 4, name: 'Subject4' }
  ]
}
