import React, { Component } from 'react';
import './item.css';

export class CartItem extends Component {
  constructor(props) {
    super(props);

    this.removeItem = this.removeItem.bind(this);
    this.addOneItem = this.addOneItem.bind(this);
    this.subtractOneItem = this.subtractOneItem.bind(this);
  }

  removeItem() {
    this.props.removeItem(this.props.content.title);
  }

  addOneItem() {
    this.props.addItemAmount(this.props.content.title, 1);
  }

  subtractOneItem() {
    this.props.addItemAmount(this.props.content.title, -1);
  }
  render() {
    return (
      <div className="ItemContainer">

        <div className="ItemHeader">
          <p>{this.props.content.title}</p>
        </div>
        <div className="ItemBody">
          <div className="ItemCount">
            <p>Menge: {this.props.content.count}</p>
          </div>
          <div className="ItemPrice">
            <p>Preis: {this.props.content.price * this.props.content.count}&euro;</p>
          </div>
          <div className="ItemRemove">
            <button onClick={this.removeItem}>X</button>
          </div>
          <div className="ItemAmountChange">
            <button onClick={this.addOneItem}>+</button>
            <button onClick={this.subtractOneItem}>-</button>
          </div>
        </div>

      </div>);
  }
}

export default CartItem;
