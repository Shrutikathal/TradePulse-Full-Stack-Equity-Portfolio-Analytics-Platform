import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>TradePulse Support</h4>
        <a href="">Track Support Requests</a>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics
          </h1>

          <input placeholder="Eg. how do I view my holdings?" />
          <br />

          <a href="">Account & Profile</a>
          <a href="">Portfolio & Holdings</a>
          <a href="">Orders & Trading</a>
          <a href="">Portfolio Analytics</a>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>

          <ol>
            <li>
              <a href="">Getting Started with TradePulse</a>
            </li>
            <li>
              <a href="">Understanding Portfolio Analytics</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;