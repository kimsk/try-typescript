import * as React from 'react'
import * as Immutable from 'immutable'

export interface Aprops extends React.Props<A>{
  obj: any
}

export class A extends React.Component<Aprops, {}>{
  shouldComponentUpdate(nextProps:any, nextState: {}) {
    if(this.props.obj === nextProps.obj){
      return false
    }
    return true
  }

  render(){
    console.log('render A', this.props)
    let { text, text2 } = this.props.obj.toJS()
    return (<div>
      <div>A</div>
      <div>{text}</div>
      <div>{text2}</div>
    </div>)
  }
}