import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    console.log(this.props.index);
    console.log(this.props.selectFlat);
    if (this.props.selectFlat) {
      this.props.selectFlat(this.props.index);
    }
  }

  render () {
    const url = `background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}';);`;
    const background = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`,
      linearGradient: `(rgba(0, 0, 0, 0.3)`,

    };
    return (
      <div className={`card${this.props.selected ? ' active' : ''}`} style={ {...background} } onClick={this.handleClick}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
