import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    console.log(this.props);
    console.log(this.props.selectFlat);
    if (this.props.selectFlat) {
      this.props.selectFlat(this.props);
    }
  }

  render () {
    const url = `background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.imageUrl}';);`;
    const background = {
      backgroundImage: `url('${this.props.imageUrl}')`,
      linearGradient: `(rgba(0, 0, 0, 0.3)`,

    };
    return (
      <div className="card" style={ {...background} } onClick={this.handleClick}>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
