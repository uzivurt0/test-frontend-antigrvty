import React, { Component } from 'react';
import './Footer.scss';
import Hotline from '../../assets/Image/image 12.png';
import MySuzuki from '../../assets/Image/image 13.png';
import Ecstar from '../../assets/Image/image 14.png'
import MapPin from '../../assets/Icon/map-pin.svg';
import Phone from '../../assets/Icon/phone.svg';


export default class Footer extends Component{
    render(){
        return(
            <>
            <footer className="footer">
                <div className="footer__nav">
                    <a>Beranda</a>
                    <a>Tentang Kami</a>
                    <a>Outlet</a>
                    <a>Promo</a>
                </div>
                <div className="footer__address">
                    <h1>ALAMAT</h1>
                    <p><span>SUZUKI Nusantara Jaya Sentosa</span><br/>Jl. Soekarno - Hatta no. 289, Bojongloa Kidul Bandung 40234</p>
                    <div className="footer__address__button">
                        <a className="maps"><span><img src={MapPin}/></span><span>CEK GOOGLE MAPS</span></a>
                        <a className="phone"><span><img src={Phone}/></span>(022) 5204645</a>
                    </div>
                </div>
                <div className="footer__text">
                    <h3>HOTLINE 24 JAM (Bebas Pulsa)</h3>
                    <a><img src={Hotline}/></a>
                </div>
                <div className="footer__text">
                    <h3>DOWNLOAD MY SUZUKI</h3>
                    <a><img src={MySuzuki}/></a>
                    <a><img src={Ecstar}/></a>
                </div>
            </footer>
            <div className="copyright">
                <p>&copy; 2020 Suzuki Indonesia.<br/>All rights reserved.</p>
                <div className="divide"></div>
            </div>
            
            </>
        )
    }
}