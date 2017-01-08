import * as React from 'react'
import * as Immutable from 'immutable'

import { A } from './A'
import { B } from './B'
import { C } from './C'

interface Props {
  obj: any
}

const aProps = {
  obj: Immutable.fromJS({ text: 'Hello', text2: 'A' })
}


interface MainState {
  count?: number
  cProps?: Props
}

export default class Main extends React.Component<{}, MainState>{
  constructor(){
    super()
    this.state = {
      count: 0,
      cProps: { obj: aProps.obj.setIn(['text2'], 'C') }
    }
  }

  buttonPress = () => {
    let count = this.state.count + 1
    let cProps = this.state.cProps

    if(count % 2 === 0){
      cProps.obj = cProps.obj.setIn(['text2'], `C-${count}`)
    }

    this.setState({
      count,
      cProps
    })
  }

  render(){
    let { count, cProps } = this.state
    return (<div>
      <button onClick={this.buttonPress}>Press</button>
      <div>Test {count}</div>
      <A { ...aProps }/>
      <B text={`World ${count}`}/>
      <C { ...cProps }/>
    </div>)
  }
}
