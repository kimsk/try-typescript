import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as _ from 'underscore';
require('jquery-ui/draggable');

interface IDragBarProps {
    dragging: any,
    height: number,
    width: number,
    x: number,
    y: number,
    vertical: boolean
}

class DragBar extends React.Component<IDragBarProps, any> {
  getCursor = (vertical: boolean) => vertical ? 'col-resize' : 'row-resize'
  componentDidMount() {
    let elem = $(this.refs['drag-bar']);
    elem
      .draggable({
        axis: this.props.vertical ? 'x' : 'y',
        cursor: this.getCursor(this.props.vertical),
        drag: () => {
          let position = elem.position();
          this.props.dragging(position.left, position.top);
        },
        stop: () => {
          let position = elem.position();
          this.props.dragging(position.left, position.top);
        }
      });
  }

  mouseOver = () => {
    let dragBarDiv = this.refs['drag-bar'] as HTMLDivElement;
    dragBarDiv.style.cursor = this.getCursor(this.props.vertical);
  }

  render() {
    const dragBarStyle = {
      width: this.props.width,
      height: this.props.height,
      background: 'gray',
      position: 'absolute',
      top: this.props.y,
      left: this.props.x,
      opacity: 0.5,
      zIndex: 1000
    };
    return (
      <div
        ref='drag-bar'
        className='drag-bar'
        onMouseOver={this.mouseOver}
        style={dragBarStyle}></div>
    );
  }
}

export { DragBar };