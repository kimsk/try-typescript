import * as React from "react";
import * as ReactDOM from "react-dom";

import * as $ from 'jquery';
require('jquery-ui/draggable');


interface IPaneProps {
  height: number,
  width: number
}


let wrap = (C:__React.ComponentClass<IPaneProps>) => class Pane extends React.Component<IPaneProps, any>{
  componentDidMount(){
    let pane = $(this.refs['pane']);
    pane.draggable({
      cursor: 'move'
    });
  }
  
  mouseOver = () => {
    let pane = this.refs['pane'] as HTMLDivElement;
    pane.style.cursor = 'move';
  } 
  
  render(){
    return(
      <div ref='pane'
            onMouseOver={this.mouseOver}>
        <C {...this.props}/>
      </div>
    );
  }
}

class c1 extends React.Component<any, any>{
  render(){
    const style = {
      height: this.props.height,
      width: this.props.width,
      background: 'red',
      color: 'white'
    };
    return (      
      <div style={style}>C1</div>
    );
  }
}

class c2 extends React.Component<any, any>{
  render(){
    return (
      <svg>
        <circle cx={20} cy={20} r={10} fill='blue'/>
      </svg>
    );
  }
}

let C1 = wrap(c1);
let C2 = wrap(c2);

class Container extends React.Component<any, any>{  
  render(){
    console.log('Container');
    return (
      <div>
        <C1 height={200} width={200}/>
        <C2 height={400} width={400}/>
      </div>
    );
  }
}

ReactDOM.render(<Container/>, document.getElementById('react'));