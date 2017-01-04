import * as React from 'react'

export interface Bprops extends React.Props<B>{
  text: string
}

export class B extends React.Component<Bprops, {}>{
  render(){
    console.log('render B')
    return (<div>
      <div>B</div>
      <div>{this.props.text}</div>
    </div>)
  }
}