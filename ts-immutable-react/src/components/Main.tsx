import * as React from 'react'
import { A } from './A'
import { B } from './B'

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
      <A text='Hello' text2='...'/>
      <B text={`World ${this.state.count}`}/>
    </div>)
  }
}
