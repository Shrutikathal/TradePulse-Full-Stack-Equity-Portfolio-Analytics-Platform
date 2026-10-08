import React from 'react';

function Team() {
  return (
    <div className="container">

      {/* Heading */}
      <div className="row p-5 mb-4 mt-5 border-top">
        <h1 className="text-center mt-5">
          About TradePulse
        </h1>
      </div>

      {/* Project Description */}
      <div
        className="row p-5 fs-6 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <div className="col-6 p-5">
          <h3 className="mb-4">
            TradePulse
          </h3>

          <p>
            TradePulse is a full-stack equity and portfolio analytics
            platform designed to provide users with a centralized
            interface for managing and monitoring their investment
            portfolio.
          </p>

          <p>
            The platform allows users to track holdings, positions,
            orders, portfolio performance, and key financial metrics
            through a responsive and interactive dashboard.
          </p>
        </div>

        <div className="col-6 p-5">
          <h3 className="mb-4">
            What We Built
          </h3>

          <p>
            TradePulse combines a React.js frontend with a modular
            RESTful backend to provide a seamless user experience
            for portfolio management and financial analytics.
          </p>

          <p>
            Interactive charts and data visualizations powered by
            Chart.js help users understand portfolio performance
            and financial trends.
          </p>
        </div>
      </div>

      {/* Technology Section */}
      <div
        className="row p-5 fs-6 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <div className="col-12 p-5 text-center">
          <h3 className="mb-4">
            Technology Stack
          </h3>

          <p>
            React.js &nbsp; | &nbsp;
            Node.js &nbsp; | &nbsp;
            Express.js &nbsp; | &nbsp;
            MongoDB &nbsp; | &nbsp;
            REST APIs &nbsp; | &nbsp;
            Chart.js
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div
        className="row p-5 fs-6 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <div className="col-12 p-5 text-center">
          <h3 className="mb-4">
            Project Team
          </h3>

          <p>
            TradePulse was developed as a team-based software
            development project, focusing on frontend development,
            backend integration, database management, and financial
            data visualization.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Team;