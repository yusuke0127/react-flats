import React, { Component } from 'react';
import FlatList from './flat_list';
import Flats from '../../data/flats.js';
import MyMap from './my_map';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: [Flats],
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 12
    };
  }

  selectFlat = (flat) => {
    this.setState({
      lat: flat.lat,
      lng: flat.lng
    });
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        <MyMap lat={this.state.lat} lng={this.state.lng} center={this.state.center} />
      </div>
    );
  }
}


export default App;
