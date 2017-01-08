import * as React from 'react'
import * as Immutable from 'immutable'

import { A } from './A'
import { B } from './B'
import { C } from './C'

const aProps = {
  obj: Immutable.fromJS({ text: 'Hello', text2: 'A' })
}

const cProps = aProps
cProps.obj = aProps.obj.setIn(['text2'], () => 'C')

interface MainState {
  count: number
}

export default class Main extends React.Component<{}, MainState>{
  constructor(){
    super()
    this.state = { count: 0 }
  }

  render(){
    return (<div>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>Press</button>
      <div>Test {this.state.count}</div>
      <A { ...aProps }/>
      <B text={`World ${this.state.count}`}/>
      <C { ...cProps }/>
    </div>)
  }
}
