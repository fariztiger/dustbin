import React, { Component, Suspense, useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import '../../App.css';

import TopBar from '../topBar/TopBar';
import Footer from '../footer/Footer';

import cosmostationLogo from "../../assets/images/cosmostationlogo.svg";
import linkIcon from "../../assets/images/official_ic.svg";

const About = observer(() => {
    const history = useHistory();

    function openWindow(path) {
        window.open(path);
    }

    function movePage(path) {
        history.push(path);
    }

    return (
        <>
            <div className="wrapper">
                <TopBar />
                {/* <div className="navBox noDrag"><span className="navHome" onClick={() => movePage("/")}>PolybeesWatch</span> &gt; <span className="navDefiName">About</span></div> */}
                
                
                <div>
                    <ul className="tvlTitleBox">
                        <li>
                            <span className="subPageTitle">About</span>
                        </li>
                        <li>
                            <div className="navBox noDrag"><span className="navHome" onClick={() => movePage("/")}>PolybeesWatch</span> &gt; <span className="navDefiName">About</span></div>
                        </li>
                    </ul>
                </div>
                
                
                
                
                
                
                <div className="aboutBox">
                    <span className="defiOverviewTitle">What is PolybeesWatch?</span><br /><div className="defiOverviewBr"></div>
                    <span className="defiOverviewContent">
                    PolybeesWatch is a DeFi leaderboard and analytics website for decentralized finance projects building and operating on Binance Smart Chain. This project is developed 
and maintained by PolybeesNetwork Developer and funded by Dev Team. Discover and track the total value locked into DeFi projects on Binance Smart Chain in real-time. 
The metrics and charts displayed on PolybeesWatch allows you to gain insight into the growing trends and movements in decentralized finance.
                    </span><br /><br /><br />

                    <span className="defiOverviewTitle">What is Binance Smart Chain?</span><br /><div className="defiOverviewBr"></div>
                    <span className="defiOverviewContent">
                    Binance Smart Chain is an Ethereum Virtual Machine (EVM) compatible Proof-of-Stake network built by Binance. Users can build decentralized applications and digital 
assets on Binance Smart Chain to take advantage of its fast transaction speed and robust security. Applications originally built on Ethereum can easily be migrated to 
Binance Smart Chain, allowing for an inclusive ecosystem with a platitude of use-cases to flourish on. Decentralized finance projects built on Binance Smart Chain can 
enjoy a fast block time of ~5 seconds and make use of the vibrant ecosystem tools built by Binance such as the Panama cross-chain transfer feature and more.
                    </span><br /><br /><br />

                    <span className="defiOverviewTitle">How do I get listed on PolybeesWatch?</span><br /><div className="defiOverviewBr"></div>
                    <span className="defiOverviewContent">
                        If you are a DeFi project operating on Binance Smart Chain, please fill out this <span className="formLinkOnAbout" onClick={() => window.open(".\src\components\form\form.html", "_blank")}>form</span> to go
through our initial screening process. PolybeesWatch will reach out to projects individually after assessing each application. For any questions or inquiries,
please contact our bot at https://t.me/polybeesbot
                    </span><br /><br /><br />

                    <span className="defiOverviewTitle">How is "Change 24h" calculated?</span><br /><div className="defiOverviewBr"></div>
                    <span className="defiOverviewContent">
                        PolybeesWatch calculates the 24 hour change in TVL by counting the change in Total Value Locked in the past 24 hours from the time you are visiting the website.
                        For example, if you visit PolybeesWatch at 7 PM, the “Change 24h” will represent the change in TVL between 7:00 PM the day before and 7:00 PM today.
                    </span><br /><br /><br />

                    <span className="defiOverviewTitle">What does “Verified” mean?</span><br /><div className="defiOverviewBr"></div>
                    <span className="defiOverviewContent">
                        All DeFi projects listed on PolybeesWatch go through an initial screening process, followed by strict due diligence and communication to confirm the validity of
                        information we display. Projects that have a “Verified” badge next to their name are projects that have confirmed that the list of contracts included in 
                        TVL calculation is up-to-date and accurate.
                    </span><br /><br /><br />

                    <span className="defiOverviewTitle">How is Total Value Locked (TVL) calculated on PolybeesWatch?</span><br /><div className="defiOverviewBr"></div>
                    <span className="defiOverviewContent">
                        PolybeesWatch collects the list of contracts and contract ABIs of each project to monitor their balance on Binance Smart Chain. We pull the total balance of each
                        smart contract by aggregating the total amount of BNB and BSC tokens every hour. The total value locked is displayed by taking this amount and multiplying them 
                        by the current USD value of each token.
                    </span><br /><br /><br />

                    <img className="cosmostationLogoOnAbout" src={cosmostationLogo} /><br /><div className="defiOverviewBr"></div>
                    <span className="defiOverviewContent">
                        PolybeesWatch utilize node infrastructure landscape, we specialized in application development, building non-custodial mobile wallet and 
web applications for various blockchain since 2018.<br /><br />

As a validator node operator, we secure various PoS networks including the EtherHub, Chainlink, CertiK Chain,  
and many more with over $50 million in assets staked collectively. PolybeesWatch also develops and maintains powerful end-user applications. The suite of products include  Block Explorer,  Web Wallet, 
and open-source contributions for JavaScript development in Polybees Protocol (Polybees.JS).<br /><br />

<br /><br />
                    </span>

                    <ul className="defiOverviewWebsiteLinkUl" onClick={() => window.open("https://polybeespresale.netlify.app/", "_blank")}>
                        <li><img src={linkIcon} /></li>
                        <li><span className="defiOverviewWebsiteLink">Official Website</span></li>
                    </ul>
                    <br />

                    <span className="productOnAbout">Product by Polybees </span><br /><br />

                  
                    



                </div>
                <Footer />
            </div>
        </>
    );
})

export default About;
