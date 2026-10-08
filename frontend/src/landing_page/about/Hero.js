import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5">
        <h1 className="text-center  fs-3">
         Simplifying the way you track, manage, and understand your investments.
          <br />
          TradePulse brings your portfolio closer to you.
        </h1>
      </div>
      <div className="row p-5 mt-5 border-top fs-6 text-muted" style={{lineHeight:"1.8",fontSize:"1.2rem"}}>
        <div className="col-6 p-5">
          <p>
            TradePulse is a modern stock trading and portfolio management
            platform built to give investors a clear and organized view of
            their equity investments. It brings essential portfolio
            information together through an intuitive and responsive
            interface.
          </p>

          <p>
            From monitoring holdings and positions to managing orders and
            maintaining a personalized watchlist, TradePulse is designed to
            simplify everyday portfolio tracking and investment management.
          </p>

          <p>
            The platform also provides portfolio analytics and interactive
            visualizations that help users understand their investment
            performance and make better-informed decisions.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            TradePulse is built with a focus on simplicity, performance, and
            usability. Its component-based frontend architecture makes the
            platform modular, responsive, and easier to maintain as new
            features are introduced.
          </p>

          <p>
            The frontend is developed using <strong>React.js</strong> and
            integrates with <strong>REST APIs</strong> to retrieve and display
            portfolio, holdings, positions, and trading-related data.
          </p>

          <p>
            By combining portfolio management, market insights, and data
            visualization in one platform, TradePulse aims to provide a
            practical digital experience for tracking and analyzing equity
            investments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
