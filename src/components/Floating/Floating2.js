import React, {Component} from 'react';

import WhatsApp from '../../assets/Image/WA Icon.png';
import Price from '../../assets/Image/Group 70.png';


import './Floating.scss';

const Floating2 = ({buttonRef, showModal}) => {

        return(
            <>
                <div className="floating-wrapper">
                    <div className="floating-item-wrapper">
                        <button className="booking-button" ref={buttonRef} onClick={showModal}>
                            Booking Mobil
                        </button>
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

export default Floating2;