import React from 'react'
import { action } from '@storybook/addon-actions'
import { LogIn } from '../Components/LogIn/login'

export default {
  title: 'Example/LogIn',
  component: LogIn
}

export const Default = () => <LogIn />

export const LoggedIn = () => (
  <LogIn user={{ name: 'Lana' }} onLogin={action('onLogin')} onSignUp={action('onSignUp')} />
)

export const LoggedOut = () => <LogIn onLogin={action('onLogin')} onSignUp={action('onSignUp')} />
