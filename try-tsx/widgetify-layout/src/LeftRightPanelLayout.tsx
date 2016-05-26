import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from 'jquery';
import * as _ from 'underscore';
import { SizeAndPosition } from './shared';
import { DragBar } from './DragBar';
export { LeftRightPanelLayout };

interface LeftRightPanelLayoutState {
    height: number,
    width: number,
    left: __React.ComponentClass<any>,
    right: __React.ComponentClass<any>,
    leftState: SizeAndPosition,
    rightState: SizeAndPosition,
    vDragBarState: SizeAndPosition
}

interface LeftRightPanelLayoutProps {
    height: number,
    width: number,
    left: __React.ComponentClass<any>,
    leftProps: any,
    right: __React.ComponentClass<any>,
    rightProps: any
}

class LeftRightPanelLayout extends React.Component<LeftRightPanelLayoutProps, LeftRightPanelLayoutState>{
       
    constructor(props){
        super(props);
        
        this.state = {
            height: this.props.height,
            width: this.props.width,
            left: this.props.left,
            right: this.props.right,
            leftState: {
                x: this.props.leftProps.x,
                y: this.props.leftProps.y,
                width: this.props.leftProps.width,
                height: this.props.leftProps.height
            },
            rightState: {
                x: this.props.rightProps.x,
                y: this.props.rightProps.y,
                width: this.props.rightProps.width,
                height: this.props.rightProps.height
            },
            vDragBarState: {
                x: this.props.leftProps.width,
                y: 0,
                height: this.props.height,
                width: 5
            }
        };
    }
    
    dragNDrop = (event, ui) => {        
        if(ui.draggable.context.className.indexOf('drag-bar') >= 0){
            console.log('drag-bar');
            return;
        }
        
        console.log('dragNDrop');        
        const { height, width
            , left, right
            , leftState, rightState, vDragBarState } = this.state;
        
        const leftX = leftState.x;
        const leftWidth = leftState.width;
        const rightX = rightState.x;
        const rightWidth = rightState.width;
        
        const newState = {
            height: height,
            width: width,
            left: left,
            right: right,
            leftState: $.extend(leftState, { x: rightX, width: rightWidth }),
            rightState: $.extend(rightState, { x: leftX, width: leftWidth }),
            vDragBarState: vDragBarState
        };
        this.setState(newState);        
    }
    
    resizing = _.debounce((x:number, y:number) => {
        const { height, width
            , left, right
            , leftState, rightState, vDragBarState } = this.state;
            
        const isNotSwapped = leftState.x < rightState.x;

        const newState = {
            height: height,
            width: width,
            left: left,
            right: right,
            leftState: $.extend(leftState, isNotSwapped?{ width: x }:{ x: x, width: width - x  }),
            rightState: $.extend(rightState, !isNotSwapped?{ width: x }:{ x: x, width: width - x  }),
            vDragBarState: $.extend(vDragBarState, { x: x })
        };
        this.setState(newState);
    }, 0)    
    
    render(){
        const { height, width, leftState, rightState, vDragBarState } = this.state;
        const Left = this.state.left;
        const Right = this.state.right;
        const leftProps = $.extend(this.props.leftProps, leftState, { dragNDrop: this.dragNDrop});
        const rightProps = $.extend(this.props.rightProps, rightState, { dragNDrop: this.dragNDrop});
        return(
          <div style={{
              height: height,
              width: width
          }}>
            <Left {...leftProps}/>
            <Right {...rightProps}/>
            <DragBar
                {...vDragBarState}
                axis='x'
                dragging={this.resizing}
            />
          </div>  
        );
    }
}