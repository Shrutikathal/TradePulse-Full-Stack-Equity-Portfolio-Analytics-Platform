import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <h3>No Orders Yet</h3>

        <p>
          You haven't placed any orders yet. Start exploring your portfolio
          and manage your orders through TradePulse.
        </p>

        <Link to={"/"} className="btn">
          Explore Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Orders;
