import React, { Fragment, Suspense, useState, useEffect } from "react";
import  ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import { useHistory, useLocation } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';    // https://github.com/jaketrent/react-social-icons

import '../../App.css';

const Footer = observer((props) => {

    useEffect(() => {

        return () => {

        };
    }, [])

    return (
        <div className="footer">
            <SocialIcon url="https://twitter.com/polybees" target="_blank" bgColor="#77808f" style={{ height: 25, width: 25, marginRight:"20px" }} />
            <SocialIcon url="https://github.com/polybees/git/sosial-logo.png" target="_blank" bgColor="#77808f" style={{ height: 25, width: 25, marginRight:"20px" }} />
            <SocialIcon url="https://medium.com/polybees" target="_blank" bgColor="#77808f" style={{ height: 25, width: 25 }} />

            <p>Powered By Polybees Network © 2021 Polybees.Network</p>
        </div>
    );
})

export default Footer;