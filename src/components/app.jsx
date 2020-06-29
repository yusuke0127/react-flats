import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats.js';
import MyMap from './my_map';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat} />
        <MyMap lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
      </div>
    );
  }
}


export default App;
