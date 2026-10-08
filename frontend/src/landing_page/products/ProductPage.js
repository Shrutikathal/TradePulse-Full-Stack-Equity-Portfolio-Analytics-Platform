import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Footer from '../Footer';
function ProductPage() {
    return ( 
        <>
        {/* <Navbar/> */}
        <Hero/>
        <LeftSection imageURL="media/images/kite.png" 
        productName="TradePulse Dashboard" 
        productDescription="A centralized dashboard for tracking your portfolio, holdings, positions, orders, and investment performance through an intuitive interface." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>
        <RightSection  imageURL="media/images/console.png"
        productName="Portfolio Analytics" 
        productDescription="Analyze your investment performance with organized portfolio data, performance insights, and visualizations designed to help you understand your equity positions." 
        learnMore="" 
        LearnMore="Portfolio Analytics"          
        />
        <LeftSection imageURL="media/images/coin.png" 
        productName="Watchlist" 
        productDescription="Keep track of selected stocks and monitor the securities you are interested in through an organized and easy-to-use watchlist." 
        tryDemo="Watchlist" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>
        <RightSection imageURL="media/images/kiteconnect.png"
        productName="Data Integration" 
        productDescription="TradePulse brings financial and portfolio data together in a structured interface, making it easier to view holdings, positions, orders, and investment information in one place." 
        learnMore="" 
        LearnMore="Data Integration"        
        />
        <LeftSection imageURL="media/images/Varsity.png" 
        productName="Market Insights" 
        productDescription="Explore organized market and equity information through a clean interface designed to help users understand investment performance and make informed decisions." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>
        
        <Universe/>
        {/* <Footer/> */}
        </>
     );
}

export default ProductPage;