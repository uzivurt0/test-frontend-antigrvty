import React from "react";
import { Link } from 'react-router-dom';

import Call from '../../assets/Icon/call.svg';
import Pin from '../../assets/Icon/pin.svg';

const Card = ({namaOutlet, telfonOutlet, alamatOutlet, tag, gambarOutlet, }) =>{
    return(
        <Link to="/test-frontend-antigrvty/outlet">
            <a className="content">
                <div className="content__img">
                    <img src={gambarOutlet}/>
                </div>
                <div className="content__text">
                    <div class="card-tag">
                        <p>{tag}</p>
                    </div>
                    <div className="card-outletName">
                        <h4>{namaOutlet}</h4>
                    </div>
                    <div className="card-outletInfo">
                        <span><img src={Call}/></span><p>{telfonOutlet}</p>
                    </div>
                    <div className="card-outletInfo">
                        <span><img src={Pin}/></span><p>{alamatOutlet}</p>
                    </div>
                    <button className="outlet-btn">Kunjungi Website Outlet</button>
                </div>       
            </a>
        </Link>
    )
}

export default Card;