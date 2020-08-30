import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import reducers from "./reducers";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Shop from "./components/shop/shop";
import Review from "./components/order/review";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : (f) => f)(createStore)));

import "./style/main.scss";
import Account from "./components/account/account";

import history from "./history";
import Shipping from "./components/information/shipping";
import Payment from "./components/information/payment";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/account" exact component={Account} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/order/review" exact component={Review} />
            <Route path="/information/shipping" exact component={Shipping} />
            <Route path="/information/payment" exact component={Payment} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
