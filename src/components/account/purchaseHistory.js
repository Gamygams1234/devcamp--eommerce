import React, { Component } from "react";
import Purchases from "./purchases";
import PurchaseDetail from "./purchaseDetail";

import PageTitle from "../pageTitle";
class PurchaseHistory extends Component {
  render() {
    return (
      <div className="purchase-history">
        purchase history <PageTitle className="purchase-history__page-title" title="Purchase History" />
        <Purchases className="purchase-history__purchases" />
        <PurchaseDetail className="purchase-history__detail" />
        <div className="purchase-history__border-bottom"></div>
      </div>
    );
  }
}

export default PurchaseHistory;
