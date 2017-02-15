import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Hello from '../components/Hello'

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));

storiesOf('Hello', module)
  .add('hello world!', () => (
      <Hello text='World!' />
  ))