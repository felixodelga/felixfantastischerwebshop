import React, { Component } from 'react';

import { Shop } from './Shop';
import { Cart } from './Cart';
import { Total } from './Total';
import {Head} from './Head';

import './main.css';

export class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],

      shopItems: [
        {
          title: "Fahrrad",
          price: 150,
        },
        {
          title: "Helm",
          price: 30,
        },
        {
          title: "Fahrradschloss",
          price: 10,
        },
        {
          title: "Sessel",
          price: 79,
        },
        {
          title: "Tisch",
          price: 250,
        },
        {
          title: "Jausenbox",
          price: 6,
        },
        {
          title: "Computer-Maus",
          price: 12,
        },
        {
          title: "Schreibtischlampe",
          price: 19,
        },
        {
          title: "Federpenal",
          price: 14,
        },
        {
          title: "Oli's Laptop",
          price: 0,
        },
      ]
    };

    this.onPurchase = this.onPurchase.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItemAmount = this.addItemAmount.bind(this);
  }

  onPurchase(item) {
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].title === item.title) {
        let st = this.state;
        st.items[i].count++;
        this.setState(st);
        return;
      }
    }

    this.setState(previousState => (
      {
        items: [...previousState.items, item]
      }
    ));
  }

  removeItem(itemTitle) {
    let newItems = [];
    for (let i = 0; i < this.state.items.length; i++) {
      if (!(this.state.items[i].title === itemTitle)) {
        newItems.push(this.state.items[i]);
      }
    }
    this.setState({ items: newItems, });
  }

  addItemAmount(itemTitle, amount) {
    let newItems = this.state.items;

    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].title === itemTitle) {
        newItems[i].count += amount;
        if (newItems[i].count < 1) {
          this.removeItem(itemTitle);
          return 2;
        }
      }
    }

    this.setState({ items: newItems });
    return 1;
  }

  render() {
    return (
      <div className="main">
        <Head/>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div className="shop">
          <Shop onPurchase={this.onPurchase} items={this.state.shopItems}/>
          <p  className="border" />
          <Cart items={this.state.items} removeItem={this.removeItem} addItemAmount={this.addItemAmount}/>
        </div>
        <br /><br /><br /><br /><br /><br />
        <div className="total">
          <Total items={this.state.items} />
        </div>
      </div>

    )
  }
}

export default Main;