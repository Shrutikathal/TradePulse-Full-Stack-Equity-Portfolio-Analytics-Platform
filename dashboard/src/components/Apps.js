import React from "react";

const Apps = () => {
  return (
    <div className="apps">
      <div className="username">
        <h3 style={{ fontSize: "24px" }}>TradePulse Tools & Services</h3>
        <hr className="divider" />
      </div>

      <div className="row">
        <div className="col">
          <div className="commodity">
            <h4 style={{ fontSize: "20px" }}>Portfolio Analytics</h4>
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Analyze your investment performance using interactive charts
              and portfolio insights.
            </p>
            <button className="btn btn-blue" style={{ fontSize: "15px" }}>
              Explore Analytics
            </button>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <h4 style={{ fontSize: "20px" }}>Market Insights</h4>
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Explore market information and track securities through your
              TradePulse dashboard.
            </p>
            <button className="btn btn-blue" style={{ fontSize: "15px" }}>
              View Insights
            </button>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <h4 style={{ fontSize: "20px" }}>Watchlist</h4>
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Monitor stocks and securities you are interested in from one
              centralized watchlist.
            </p>
            <button className="btn btn-blue" style={{ fontSize: "15px" }}>
              View Watchlist
            </button>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <h4 style={{ fontSize: "20px" }}>Portfolio Management</h4>
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Manage your holdings, positions, orders, and overall portfolio
              information in one place.
            </p>
            <button className="btn btn-blue" style={{ fontSize: "15px" }}>
              Manage Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
