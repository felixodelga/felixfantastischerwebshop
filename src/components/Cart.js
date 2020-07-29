import React, { Component } from 'react';
import { CartItem } from './CartItem';
import './item.css';

export class Cart extends Component {

    RenderEmptyCart() { return <p className="text">Der Einkaufswagen ist leer! Zeit etwas auszuwählen.</p> }

    render() {
        return (
            <div>{this.props.items.length === 0 ?
                this.RenderEmptyCart() :
                this.props.items.map((value, index) => { return <CartItem key={index} content={value} removeItem={this.props.removeItem} addItemAmount={this.props.addItemAmount} /> }
                )}
            </div>
        );
    }
}

export default Cart;