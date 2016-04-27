import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from 'underscore';

interface ISize {
  height: number,
  width: number
}

interface IWidgetProps extends ISize {
  render: () => JSX.Element
}

interface IContainerProps extends ISize {
  widgets: __React.ReactElement<IWidgetProps>[]
}

interface IContainerState extends ISize {
  widgets: __React.ReactElement<IWidgetProps>[]
}

const blockStyle = {
      height: 100,
      width: 200,
      background: 'red',
      border: '1px solid orange',
      borderRadius: '4px'
    };

class Container extends React.Component<IContainerProps, IContainerState> {
  constructor(props:IContainerProps){
    super(props);

    const { widgets, height, width } = props;

    this.state = {
      widgets: widgets,
      height: height,
      width: width
    };
  }

  private updateStateFromProps = (props:IContainerProps) => {
    const { height, width } = props;
    this.setState({
      widgets: this.state.widgets,
      height: height,
      width: width
    });
  }

  drop = (e:DragEvent) => {
    e.preventDefault();
    console.log(`container drop ${e.dataTransfer.getData('render')}`);
    console.log(`container drop ${e.dataTransfer.getData('children')}`);

    let render = new Function('return ' + e.dataTransfer.getData('render'))();
    let children = JSON.parse(e.dataTransfer.getData('children'));
    let childrenElement = React.createElement<any, any>(children.type, children.props);
    const newElem = React.createElement(Widget, {height: 200, width: 200, render: render}, childrenElement);
    this.state.widgets.push(newElem);
    console.log(this.state.widgets);
    this.setState({
      widgets: this.state.widgets,
      height: this.state.height,
      width: this.state.width
    });
  }

  dragOver = (e:DragEvent) =>{
    e.preventDefault();
  }


  componentWillReceiveProps(nextProps:IContainerProps) {
    this.updateStateFromProps(nextProps);
  }

  render(){
    const { widgets, height, width } = this.props;

    const containerStyle = {
      display: 'flex',
      height: height,
      width: width,
      border: '1px solid black'
    };

    return (
      <div style={containerStyle}
           onDrop={this.drop}
           onDragOver={this.dragOver}>
        {widgets}
      </div>
    );
  }
}

interface IDataTransfer extends DataTransfer {
  setDragImage: (img: HTMLImageElement, xOffset: number, yOffset: number) => void
}

class Widget extends React.Component<IWidgetProps, any> {

  dragStart = (e:DragEvent) => {
    console.log('Widget drag start');

    let dt = e.dataTransfer as IDataTransfer;

    const img = document.createElement("img");
    img.src = "http://lorempixel.com/image_output/sports-q-c-200-100-8.jpg";
    dt.setDragImage(img, 0, 0);
    dt.setData('render', this.props.render.toString());
    dt.setData('children', JSON.stringify(this.props.children));
  }

  dragEnd = (e:DragEvent) => {
    console.log('Widget drag end');
  }

  drag = (e:DragEvent) => {
    e.preventDefault();
  }

  render(){
    console.log('Widget:', this.props.children);
    return (
      <div
          style={blockStyle}
          draggable="true"
          onDrag={this.drag}
          onDragStart={this.dragStart}
          onDragEnd={this.dragEnd}>
          {this.props.render()}
          {this.props.children}
          </div>
    );
  }
}

let dragify = (c:__React.Component<any, any>) => {
  return c;
}


class PC extends React.Component<any, any>{
  render(){
    return (<div style={blockStyle}>PC</div>);
  }
}

const PF = () => {
    return (<div style={blockStyle}>PF</div>);
}


let widgets:__React.ReactElement<IWidgetProps>[] = [];

ReactDOM.render(
                  <div>
                      <Container height={500} width={800} widgets={widgets}/>
                      <Widget height={200} width={200} render={() => <div>C1</div>}><span>TEST</span></Widget>
                      <Widget height={200} width={200} render={() => <div>C2</div>}/>
                      <PC/>
                      <PF/>
                  </div>
                 , document.getElementById('react'));