import * as React from "react";
import * as ReactDOM from "react-dom";
import * as d3 from 'd3';

class D3React extends React.Component<any, any> {
  componentDidMount(){
    let d3test = d3.select('#react')
      .append('svg')
      .attr('width', 100)
      .attr('height', 100);
      
    d3test.append("circle")
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("r", 40)
        .attr("cx", 50)
        .attr("cy", 50)
        .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
        .on("mouseout", function(){d3.select(this).style("fill", "white");});
  }
    
  render(){
    return (
      <h1>d3 with React</h1>
    );
  }
}

ReactDOM.render(<D3React/>, document.getElementById('react'));