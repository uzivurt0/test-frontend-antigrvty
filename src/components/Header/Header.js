import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/Image/logo.png';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <Link to="/">
                    <a className="header-logo">
                        <div className="header-logo-img">
                            <img alt="logo" src={Logo} />
                        </div>
                        <div className="header-text">
                            <h3>PT. Nusantara Jaya Sentosa</h3>
                            <p>Main Dealer Suzuki Jawa Barat</p>
                        </div>
                    </a>
                </Link>

                <div className="header-burger">
                    <div className="strip-wrapper">  
                        <div className="strip"></div>
                        <div className="strip"></div>
                        <div className="strip"></div>
                    </div>
                </div>
            </header>
        )
    }
}