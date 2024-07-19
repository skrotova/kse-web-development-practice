import React from 'react'
import AddMaterialPage from '../Components/AddMaterialPage/AddMaterialPage'

export default {
  title: 'Components/AddMaterialPage',
  component: AddMaterialPage
}

const Template = (args) => <AddMaterialPage {...args} />

export const Default = Template.bind({})
Default.args = {
  onAddMaterial: (material) => alert(JSON.stringify(material, null, 2))
}
