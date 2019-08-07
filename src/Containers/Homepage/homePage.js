import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./homePage.css";

import Header from "../../Components/header";
import Cards from "../../Components/home/cards";
import CardInfo from "../../Components/card_info/cardInfo";
import Cart from "../../Components/cart/cart";
import Footer from "../../Components/footer";

class HomePage extends Component {
  state = {
    data: [
      "hello",
      "world",
      "how",
      "hello",
      "world",
      "how",
      "hello",
      "world",
      "how",
      "hello",
      "world"
    ],
    cart: ["hello", "hello", "hello"]
  };
  onCardClick = () => {
    console.log("hello");
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Cards data={this.state.data} onClick={this.onCardClick} />
              )}
            />
            <Route path="/cardInfo" render={() => <CardInfo />} />
            <Route
              path="/cart"
              render={() => <Cart data={this.state.cart} />}
            />
            <Route render={() => <h1>not found</h1>} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default HomePage;
