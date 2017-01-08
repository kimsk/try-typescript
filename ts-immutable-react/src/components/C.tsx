import * as React from 'react'
import * as Immutable from 'immutable'

export interface Cprops extends React.Props<C>{
  obj: any
}

export class C extends React.PureComponent<Cprops, {}>{
  render(){
    console.log('render C', this.props)
    let { text, text2 } = this.props.obj.toJS()
    return (<div>
      <div>C</div>
      <div>{text}</div>
      <div>{text2}</div>
    </div>)
  }
}