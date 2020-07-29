import React, { Component } from 'react';
import { Item } from './Item';

export class Shop extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((value, index) => { return <Item key={index} content={value} onPurchase={this.props.onPurchase} /> })
                }
            </div>
        );
    }
}

export default Shop;