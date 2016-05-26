import * as React from "react";
import * as ReactDOM from "react-dom";

class Map extends React.Component<any, any>{
    componentDidMount(){
        L.mapbox.accessToken = 'pk.eyJ1Ijoia2FybGtpbSIsImEiOiJjaW9vazAxY2UwMDBydTdtOWltZWdqZGh5In0.c_7MVHQpPez5AVHlD_dfUg';
        const map = L.mapbox.map('map', 'mapbox.streets').setView([40, -74.50], 9);
    }
    
    render(){
        return (
          <div id='map' style={{
                    height: 500,
                    width: 500
                }}></div> 
        );
    }
}

export { Map };