import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">

        <div className="row text-muted">

          {/* TradePulse */}
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="TradePulse Logo"
              style={{ width: "50%" }}
            />

            <p className="mt-3">
              © 2026 TradePulse. All rights reserved.
            </p>

            <p>
              TradePulse is a modern stock trading and portfolio analytics
              platform designed to provide users with a centralized interface
              for monitoring investments, managing portfolios, tracking
              holdings and positions, and analyzing market information.
            </p>
          </div>

          {/* Platform */}
          <div className="col">
            <p>Platform</p>

            <a href="#">Dashboard</a>
            <br />

            <a href="#">Watchlist</a>
            <br />

            <a href="#">Holdings</a>
            <br />

            <a href="#">Positions</a>
            <br />

            <a href="#">Orders</a>
            <br />

            <a href="#">Portfolio</a>
            <br />

            <a href="#">Portfolio Analytics</a>
            <br />

            <a href="#">Market Data</a>
            <br />
          </div>

          {/* Support */}
          <div className="col">
            <p>Support</p>

            <a href="#">Support Portal</a>
            <br />

            <a href="#">Getting Started</a>
            <br />

            <a href="#">Account & Profile</a>
            <br />

            <a href="#">Portfolio & Holdings</a>
            <br />

            <a href="#">Orders & Trading</a>
            <br />

            <a href="#">Frequently Asked Questions</a>
            <br />

            <a href="#">Contact Support</a>
            <br />
          </div>

          {/* Company */}
          <div className="col">
            <p>TradePulse</p>

            <a href="#">About TradePulse</a>
            <br />

            <a href="#">Features</a>
            <br />

            <a href="#">Technology</a>
            <br />

            <a href="#">Product Overview</a>
            <br />

            <a href="#">Portfolio Analytics</a>
            <br />

            <a href="#">Trading Tools</a>
            <br />

            <a href="#">Project Information</a>
            <br />
          </div>

          {/* Quick Links */}
          <div className="col">
            <p>Quick Links</p>

            <a href="#">Dashboard</a>
            <br />

            <a href="#">Watchlist</a>
            <br />

            <a href="#">Holdings</a>
            <br />

            <a href="#">Positions</a>
            <br />

            <a href="#">Orders</a>
            <br />

            <a href="#">Market Insights</a>
            <br />

            <a href="#">Analytics</a>
            <br />
          </div>

        </div>

        {/* Detailed Information */}
        <div className="mt-5 text-muted" style={{ fontSize: "15px" }}>

          <p>
            <strong>About TradePulse:</strong> TradePulse is a stock trading
            and portfolio management project developed to demonstrate how
            modern financial technology platforms can provide an organized
            interface for tracking investments and analyzing equity
            portfolios. The platform brings together important portfolio
            features such as holdings, positions, orders, watchlists,
            dashboard insights, and interactive analytics in a single
            application.
          </p>

          <p>
            <strong>Portfolio Management:</strong> TradePulse provides a
            centralized view of portfolio information, allowing users to
            monitor holdings, review positions, track orders, and understand
            overall investment performance through structured data and
            visual representations.
          </p>

          <p>
            <strong>Market & Investment Insights:</strong> The platform is
            designed to organize market and equity information in a simple,
            easy-to-understand interface. Interactive charts and portfolio
            analytics help users explore performance information and gain a
            clearer understanding of their investments.
          </p>

          <p>
            <strong>Technology:</strong> The TradePulse interface is developed
            using React.js and follows a component-based frontend architecture.
            Reusable components are used across dashboards, portfolio
            sections, watchlists, holdings, positions, orders, and other
            application interfaces to create a consistent and responsive user
            experience.
          </p>

          <p>
            <strong>Security & Privacy:</strong> Users should avoid entering
            real financial credentials, banking information, payment details,
            or other sensitive personal information into this demonstration
            application. Any information displayed within the project should
            be treated as sample or demonstration data.
          </p>

          <p>
            <strong>Important Information:</strong> TradePulse is an
            independent software development project created for educational,
            demonstration, and portfolio purposes. It is not a registered
            stock broker, investment adviser, financial institution, or
            securities exchange and does not provide actual brokerage or
            investment advisory services.
          </p>

          <p>
            <strong>Investment Disclaimer:</strong> Information, charts,
            analytics, market data, portfolio values, or other financial
            information displayed through this application are intended only
            to demonstrate software functionality. Nothing presented through
            TradePulse should be interpreted as financial, investment, trading,
            tax, or legal advice.
          </p>

          <p>
            <strong>Risk Disclosure:</strong> Investments in financial markets
            involve risk, and historical performance does not guarantee future
            results. Users should conduct their own research and consult a
            qualified financial professional before making actual investment
            decisions.
          </p>

          <p>
            <strong>Project Scope:</strong> TradePulse demonstrates concepts
            commonly found in modern digital investment platforms, including
            portfolio monitoring, order management, watchlists, holdings
            tracking, position tracking, market insights, and performance
            analytics. The project is intended to showcase frontend
            development, responsive interface design, component-based
            architecture, and practical software engineering concepts.
          </p>

          <p>
            TradePulse is an independent project and is not affiliated with,
            sponsored by, endorsed by, or associated with any brokerage,
            financial institution, or third-party financial service provider.
          </p>

          <p>
            © 2026 TradePulse. Built as a software development and portfolio
            project.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;