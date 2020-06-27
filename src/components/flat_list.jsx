import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render () {
    // console.log(this.props.flats);
    return (
      <div className="flat-list">
        {this.props.flats[0].map(flat => {
          return <Flat name={flat.name}
            imageUrl={flat.imageUrl}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            lat={flat.lat}
            long={flat.lng}
            selectFlat={this.props.selectFlat}
          />;
        })}
      </div>
    );
  }
}


export default FlatList;
