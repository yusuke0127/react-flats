import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyMarker from './my_marker';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

class MyMap extends Component {
  // static defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33
  //   },
  //   zoom: 12
  // };
  center () {
    return {
      lat: this.props.lat,
      lng : this.props.lng
    }
  }
  render() {
    console.log(this.props);
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.center()}
          defaultZoom={12}
        >
          <MyMarker
            lat={this.props.lat}
            lng={this.props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MyMap;
