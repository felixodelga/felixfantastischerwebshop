import React, { Component } from 'react';
import './total.css';

export class Total extends Component {

    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.props.items.length; i++) {
            total += this.props.items[i].price * this.props.items[i].count;
        }
        return total;
    }

    render() {
        return (
            <div id="total" >
                <br />
                Total: {this.calculateTotal()} &euro;
            </div>
        );
    }
}

export default Total;