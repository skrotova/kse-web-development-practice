import React from 'react'
import Subject from '../Components/Subject/subject'

export default {
  title: 'Example/Subject',
  component: Subject
}

const Template = (args) => <Subject {...args} />

export const Default = Template.bind({})
Default.args = {}
