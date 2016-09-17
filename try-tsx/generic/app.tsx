import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props<T>{
  val:T
}
class Test<T> extends React.Component<Props<T>,{}>{
  render(){
    return (
      <div>{this.props.val}</div>
    );
  }
}

// let TestString: new() => React.Component<Test<string>, any> = Test;
type TestString = new() => Test<string>;
let TestString = Test as TestString;
ReactDOM.render(<TestString val='1'/>, document.getElementById('content'));