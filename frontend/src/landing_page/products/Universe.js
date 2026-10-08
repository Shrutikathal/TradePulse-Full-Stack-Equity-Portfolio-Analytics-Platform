import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="text-center">
        <div className="mb-5">
          <h5 className="">
            Explore the technology and ideas behind modern trading platforms.
          </h5>
        </div>
        <div className="mt-5">
          <h4 className=" mb-3">Trading & Investment Ecosystem</h4>
          <p>
            Explore platforms and services that have influenced the modern digital investing ecosystem.
          </p>
        </div>
      </div>
      <div className="row   fs-6 text-muted" style={{ fontSize: "0.1 rem" }}>
        <div className="col-4 p-5 text-center">
          <img
            src="media/images/zerodhafundhouse.png"
            style={{ width: "60%" }}
          />
          <p className="mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/sensibullLogo.svg" style={{ width: "60%" }} />
          <p className="mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/tijori.svg" style={{ width: "40%" }} />
          <p className="mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div
        className="row   fs-6 text-muted"
        style={{ fontSize: "0.1 rem" }}
      >
        <div className="col-4 p-5 text-center">
          <img src="media/images/streakLogo.png" style={{ width: "60%" }} />
          <p className="mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/smallcaseLogo.png" style={{ width: "60%" }} />
          <p className="mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/dittoLogo.png" style={{width: "40%" }} />
          <p className="mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <p className="text-muted text-center mt-4">
    TradePulse is an independent project inspired by modern trading and
    investment platforms. The brands shown are for reference only and are
    not affiliated with or endorsed by TradePulse.
</p>
      </div>
      <div className="text-center">
        <button className='p-2 text-center btn btn-primary fs-5 mb-5'style={{width:"20%",margin:"0 auto"}}>Sign Up for Free</button>  
      </div>
      
    </div>
  );
}

export default Universe;
