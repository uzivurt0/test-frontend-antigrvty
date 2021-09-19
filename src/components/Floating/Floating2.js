import React, {Component} from 'react';

import WhatsApp from '../../assets/Image/WA Icon.png';
import Price from '../../assets/Image/Group 70.png';


import './Floating.scss';

export default class Floating2 extends Component{
    render(){
        return(
            <>
                <div className="floating-wrapper">
                    <div className="floating-item-wrapper">
                        <div className="booking-button">
                            Booking Mobil
                        </div>
                        <a className="floating-button">
                            <div className="floating-image">
                                <img src={WhatsApp}/>
                            </div>
                            <span>WhatsApp</span>
                        </a>
                        <a className="floating-button">
                            <div className="floating-image">
                                <img src={Price}/>
                            </div>
                            <span>Daftar Harga</span>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}