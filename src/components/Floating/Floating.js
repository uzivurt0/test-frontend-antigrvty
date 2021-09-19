import React, {Component} from 'react';

import WhatsApp from '../../assets/Image/WA Icon.png';
import Price from '../../assets/Image/Group 70.png';
import Service from '../../assets/Image/Group 69.png';
import Credit from '../../assets/Image/Group 68.png';

import './Floating.scss';

export default class Floating extends Component{
    render(){
        return(
            <>
                <div className="floating-wrapper">
                    <div className="floating-item-wrapper">
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
                        <a className="floating-button">
                            <div className="floating-image">
                                <img src={Service}/>
                            </div>
                            <span>Pesan Servis</span>
                        </a>
                        <a className="floating-button">
                            <div className="floating-image">
                                <img src={Credit}/>
                            </div>
                            <span>Simulasi Kredit</span>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}