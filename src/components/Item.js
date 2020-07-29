import React, { Component } from 'react';
import './item.css';

export class Item extends Component {

  onPurchase() {
    this.props.onPurchase({ title: this.props.content.title, price: this.props.content.price, count: 1 })
  }


  render() {
    return (
      <div className="ItemContainer">

        <div className="ItemHeader">
          <p>{this.props.content.title}</p>
        </div>
        <div className="ItemBody">
          <div className="ItemPrice">
            <p>Preis: {this.props.content.price}&euro;</p>
          </div>

          <div className="ItemButton">
            <button onClick={this.onPurchase.bind(this)}>Kaufen</button>
          </div>
        </div>

      </div>);
  }
}

export default Item;
