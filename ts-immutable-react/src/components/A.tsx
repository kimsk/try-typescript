import * as React from 'react'

export interface Aprops extends React.Props<A>{
  text: string
  text2: string
}

export class A extends React.Component<Aprops, {}>{
  shouldComponentUpdate(nextProps:Aprops, nextState: {}) {
    if(this.props === nextProps){
      return false
    }
    return true
  }

  render(){
    console.log('render A')
    return (<div>
      <div>A</div>
      <div>{this.props.text}</div>
      <div>{this.props.text2}</div>
    </div>)
  }
}