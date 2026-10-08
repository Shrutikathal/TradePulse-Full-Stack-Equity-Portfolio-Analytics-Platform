import React from 'react';
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Awards Image' className='mb-5' />
                </div>
                <div className='col-6 p-5'>
                    <h1>Your Smart Stock Trading Platform</h1>
                    <p className='mb-5'>TradePulse is a stock trading platform designed to track
    investments, monitor portfolio performance, and analyze
    equity positions through an interactive dashboard.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Holdings Tracking</p>
                                </li>
                                <li>
                                    <p>Position Monitoring</p>
                                </li>
                                <li>
                                    <p>Order Management</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Portfolio Analytics</p>
                                </li>
                                <li>
                                    <p>Interactive Charts</p>
                                </li>
                                <li>
                                    <p>Market Data Insights</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{ width: '80%' }} />
                </div>
            </div>
        </div>
    );
}
export default Awards;