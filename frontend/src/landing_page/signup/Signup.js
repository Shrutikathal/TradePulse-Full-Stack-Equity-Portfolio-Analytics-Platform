import React from "react";

function Signup() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "90vh",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">

          {/* Left Side */}
          <div className="col-md-5 p-5">

            <h1 className="fw-bold mb-3">
              Start your TradePulse journey
            </h1>

            <p className="text-muted fs-5">
              Create your account and get a centralized view of your
              investments, holdings, positions, orders, and portfolio
              performance.
            </p>

            <div className="mt-4">

              <p>
                ✓ Track your holdings and positions
              </p>

              <p>
                ✓ Manage your stock watchlist
              </p>

              <p>
                ✓ Monitor orders and portfolio activity
              </p>

              <p>
                ✓ Analyze investment performance
              </p>

            </div>

            <p
              className="text-muted mt-4"
              style={{ fontSize: "14px" }}
            >
              TradePulse is an independent stock trading and portfolio
              analytics project designed for demonstration and learning.
            </p>

          </div>

          {/* Signup Form */}
          <div className="col-md-6 col-lg-5">

            <div
              className="bg-white border rounded-3 p-4 p-md-5"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >

              {/* Account Setup */}
              <div className="mb-4">

                <span
                  className="text-primary fw-semibold"
                  style={{ fontSize: "13px" }}
                >
                  Account Setup
                </span>

                <div
                  className="progress mt-2"
                  style={{ height: "4px" }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: "100%" }}
                  ></div>
                </div>

              </div>

              {/* Heading */}
              <div className="mb-4">

                <h2 className="fw-bold mb-2">
                  Create your TradePulse account
                </h2>

                <p className="text-muted mb-0">
                  Enter your details to create your TradePulse account.
                </p>

              </div>

              {/* Full Name */}
              <div className="mb-3">

                <label className="form-label fw-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Enter your full name"
                />

              </div>

              {/* Email */}
              <div className="mb-3">

                <label className="form-label fw-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control p-2"
                  placeholder="Enter your email address"
                />

              </div>

              {/* Mobile Number */}
              <div className="mb-3">

                <label className="form-label fw-semibold">
                  Mobile Number
                </label>

                <div className="input-group">

                  <span className="input-group-text">
                    +91
                  </span>

                  <input
                    type="tel"
                    className="form-control p-2"
                    placeholder="Enter your mobile number"
                  />

                </div>

              </div>

              {/* Date of Birth */}
              <div className="mb-3">

                <label className="form-label fw-semibold">
                  Date of Birth
                </label>

                <input
                  type="date"
                  className="form-control p-2"
                />

              </div>

              {/* Password */}
              <div className="mb-3">

                <label className="form-label fw-semibold">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control p-2"
                  placeholder="Create a password"
                />

                <small className="text-muted">
                  Use at least 8 characters with a mix of letters and
                  numbers.
                </small>

                <div
                  className="progress mt-2"
                  style={{ height: "5px" }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: "60%" }}
                  ></div>
                </div>

                <small className="text-muted">
                  Password strength: Good
                </small>

              </div>

              {/* Confirm Password */}
              <div className="mb-3">

                <label className="form-label fw-semibold">
                  Confirm Password
                </label>

                <input
                  type="password"
                  className="form-control p-2"
                  placeholder="Confirm your password"
                />

              </div>

              {/* Terms */}
              <div className="form-check mb-4">

                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                />

                <label
                  className="form-check-label text-muted"
                  htmlFor="terms"
                  style={{ fontSize: "14px" }}
                >
                  I agree to the TradePulse terms and privacy policy.
                </label>

              </div>

              {/* Create Account */}
              <button
                className="btn btn-primary w-100 p-2 fs-5"
              >
                Create Account
              </button>

              {/* Login */}
              <p className="text-center text-muted mt-4 mb-0">

                Already have an account?{" "}

                <a
                  href="/login"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </a>

              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;