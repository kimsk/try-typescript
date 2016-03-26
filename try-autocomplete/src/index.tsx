import * as React from "react";
import * as ReactDOM from "react-dom";

import * as fs from 'fs';
// import * as http from 'http';
var Autocomplete = require('react-autocomplete');

//import * as Autocomplete from 'react-autocomplete';

function renderItems (items:any[]) {
    console.log(items)
    return items.map((item, index) => {
      var text = item.props.children
      if (index === 0 || items[index - 1].props.children.charAt(0) !== text.charAt(0)) {
        var style = {
          background: '#eee',
          color: '#454545',
          padding: '2px 6px',
          fontWeight: 'bold'
        }
        return [<div style={style}>{text.charAt(0)}</div>, item]
      }
      else {
        return item
      }
    })
  }

ReactDOM.render(
    <Autocomplete
          initialValue=""
          labelText="test"
          inputProps={{name: "test"}}
          items={['test', 'abc', 'abcdef', 'test123']}
          getItemValue={(item:string) => {
              console.log('getItemValue', item);
              return item; 
            }}
          shouldItemRender={(item:string, value:string) => {
              console.log('shouldItemRender', item, value, item.indexOf(value));
              return item.indexOf(value) >= 0;
            }}
          /*sortItems={sortStates}*/
          renderItem={(item:string, isHighlighted:boolean) => {
            console.log('renderItem', item, isHighlighted);
            return (
            <div
              style={isHighlighted ? { color: 'red' } : { color: 'black' }}
              key={item}
            >{item}</div>
          )}
          }
          renderMenu={(items:any[], value:string, style:any) =>{
            console.log('renderMenu', items, value, style);
            return (
                <div>
                    {renderItems(items)}
                </div>
            )              
          }              
          }
        />,
    document.getElementById("example")
);