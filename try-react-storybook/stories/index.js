import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Test } from '../components/Test'

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ))
  .add('Test', () => (
    <Test />
  ))
