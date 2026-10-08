import React from 'react';
function Stats() {
    return (
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trade Smarter with TradePulse</h1>
                    <h3 className='fs-4'>Track your investments</h3>
                    <p className='text-muted'>Monitor your holdings, positions, and portfolio performance
                        from a centralized and easy-to-use dashboard.</p>
                    <h3 className='fs-4'>Manage your portfolio</h3>
                    <p className='text-muted'>Keep track of your orders, holdings, and positions while
                        managing your investment portfolio efficiently.</p>
                    <h3 className='fs-4'>Analyze market data</h3>
                    <p className='text-muted'>Use interactive charts and portfolio analytics to understand
                        equity performance and make informed decisions.</p>
                    <h3 className='fs-4'>Built for a better experience</h3>
                    <p className='text-muted'>TradePulse brings essential stock trading and portfolio
                        management features together in one intuitive platform.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' style={{ width: "90%" }} alt='TradePulse Platform' />
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{ textDecoration:"none" }}>Explore TradePulse <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{ textDecoration:"none" }}>View Dashboard <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;