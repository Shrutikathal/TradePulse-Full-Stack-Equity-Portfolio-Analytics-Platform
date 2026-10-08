import React from 'react';

function OpenAccount() {
    return (
        <div className='container p-5 mt-5 mb-5'>
            <div className='row text-center'>

                <h1 className='mt-5'>Open your TradePulse account</h1>

                <p>
                    Create your account to access your dashboard, manage your
                    watchlist, track holdings and positions, place orders, and
                    monitor your portfolio performance in one place.
                </p>

                <p className='text-muted'>
                    Set up your profile and start exploring the TradePulse
                    trading and portfolio management experience.
                </p>

                <a
                    href="/signup"
                    className="btn btn-primary p-2 fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Open Account
                </a>

            </div>
        </div>
    );
}

export default OpenAccount;