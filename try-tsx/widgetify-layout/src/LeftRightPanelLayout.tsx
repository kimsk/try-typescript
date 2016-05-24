import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from 'jquery';
import { SizeAndPosition } from './shared';
import { Widgetify } from './Widget';
import { DragBar } from './DragBar';
export { LeftRightPanelLayout };

class C extends React.Component<any, any>{
    render(){
        return (
          <div>Component</div>  
        );
    }
}

const C1 = Widgetify(C, 'c1');
const C2 = Widgetify(C, 'c2');
const C3 = Widgetify(C, 'c3');

interface LeftRightPanelLayoutState {
    height: number,
    width: number,
    leftWidget: SizeAndPosition,
    rightWidget: SizeAndPosition,
    vDragBar: SizeAndPosition
}

class LeftRightPanelLayout extends React.Component<any, LeftRightPanelLayoutState>{
    constructor(props){
        super(props);
        
        const height = $(window).innerHeight();
        const width = $(window).innerWidth();
        const leftWidth = width/2;
        const rightWidth = width/2;
        
        this.state = {
            height: height,
            width: width,
            leftWidget: {
                x: 0,
                y: 0,
                width: leftWidth,
                height: height
            },
            rightWidget: {
                x: leftWidth,
                y: 0,
                width: rightWidth,
                height: height
            },
            vDragBar: {
                x: leftWidth,
                y: 0,
                height: height,
                width: 5
            }
        };
    }
    
    dragging = ({top, left}) => {
        const { height, width, leftWidget, rightWidget, vDragBar } = this.state;

        const newState = {
            height: height,
            width: width,
            leftWidget: $.extend(leftWidget, { width: left}),
            rightWidget: $.extend(rightWidget, { x: left, width: width - left  }),
            vDragBar: $.extend(vDragBar, { x: left })
        };
        this.setState(newState);
    }    
    
    render(){
        const { height, width, leftWidget, rightWidget, vDragBar } = this.state;
        return(
          <div style={{
              height: height,
              width: width
          }}>
            <div>
                <C1 x={leftWidget.x} y={leftWidget.y} width={leftWidget.width} height={leftWidget.height}/>
            </div>
            <DragBar 
                x={vDragBar.x} y={vDragBar.y} height={vDragBar.height} width={vDragBar.width}
                axis='x'
                dragging={this.dragging}
            />
            <div>
                <C2 x={rightWidget.x} y={rightWidget.y} width={rightWidget.width} height={rightWidget.height}/>
            </div>
          </div>  
        );
    }
}