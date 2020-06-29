import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render () {
    // console.log(this.props.flats);
    return (
      <div className="flat-list">
        {this.props.flats.map((flat, index) => {
          return <Flat flat={flat}
            key={flat.lat}
            selectFlat={this.props.selectFlat}
            selected={flat.name === this.props.selectedFlat.name}
            index={index}
          />;
        })}
      </div>
    );
  }
}


export default FlatList;
