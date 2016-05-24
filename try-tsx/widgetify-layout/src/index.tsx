import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from 'jquery';
import { Widgetify } from './Widget';
import { LeftRightPanelLayout } from './LeftRightPanelLayout';

class C extends React.Component<any, any>{
    render(){
        return (
          <div>Component</div>  
        );
    }
}

const C1 = Widgetify(C, 'c1');
const C2 = Widgetify(C, 'c2');

// initial size & positions
const height = $(window).innerHeight();
const width = $(window).innerWidth();
const leftWidth = width/2;
const rightWidth = width/2;

ReactDOM.render(<LeftRightPanelLayout
    height={height}
    width={width}
    left={C1}
    leftProps={{
        x:0,
        y:0,
        width:leftWidth,
        height:height
    }}
    right={C2}
    rightProps={{
        x:leftWidth,
        y:0,
        width:rightWidth,
        height:height
    }} 
    />  
    ,document.getElementById("react"));