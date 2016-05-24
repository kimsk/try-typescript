import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as _ from 'underscore';
require('jquery-ui/draggable');

class DragBar extends React.Component<any, any> {
  componentDidMount() {
    let elem = $(this.refs['drag-bar']);
    elem
      .draggable({
        axis: this.props.axis,
        cursor: "move",
        start: this.props.dragStart,
        drag: (e) => {
          let position = elem.position();
          this.props.dragging(position);
        },
        stop: () => {
          let position = elem.position();
          this.props.dragging(position);
        }
      });
  }

  mouseOver = () => {
    let dragBarDiv = this.refs['drag-bar'] as HTMLDivElement;
    dragBarDiv.style.cursor = 'move';
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
        onMouseOver={this.mouseOver}
        style={dragBarStyle}></div>
    );
  }
}

export { DragBar };