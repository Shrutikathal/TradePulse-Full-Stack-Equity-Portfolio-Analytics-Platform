import React from "react";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Manage your funds and monitor your available balance</p>

        <button className="btn btn-green">Add Funds</button>
        <button className="btn btn-blue">Withdraw</button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Account Balance</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available Funds</p>
              <p className="imp colored">₹4,043.10</p>
            </div>

            <div className="data">
              <p>Used Funds</p>
              <p className="imp">₹3,757.30</p>
            </div>

            <div className="data">
              <p>Available Cash</p>
              <p className="imp">₹4,043.10</p>
            </div>

            <hr />

            <div className="data">
              <p>Opening Balance</p>
              <p>₹4,043.10</p>
            </div>

            <div className="data">
              <p>Deposits</p>
              <p>₹4,064.00</p>
            </div>

            <div className="data">
              <p>Withdrawals</p>
              <p>₹0.00</p>
            </div>

            <div className="data">
              <p>Pending Amount</p>
              <p>₹0.00</p>
            </div>

            <div className="data">
              <p>Reserved Funds</p>
              <p>₹0.00</p>
            </div>

            <hr />

            <div className="data">
              <p>Portfolio Value</p>
              <p>₹31,428.95</p>
            </div>

            <div className="data">
              <p>Total Investment</p>
              <p>₹29,875.55</p>
            </div>

            <div className="data">
              <p>Available Balance</p>
              <p>₹4,043.10</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>Manage your TradePulse account and portfolio funds</p>

            <button className="btn btn-blue">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
