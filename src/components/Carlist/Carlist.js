import React from "react";

import { Link } from "react-router-dom";

const Carlist = ({gambarMobil, namaMobil, hargaMobil}) => {
    return(
    <Link to="/XL7">
        <a className="car-item">
            <div className="item-image">
                <img src={gambarMobil}/>
            </div>
            <div className="item-desc">
                <h4>{namaMobil}</h4>
                <p>Mulai Dari</p>
                <h5><span>Rp. </span>{hargaMobil}</h5>
                <div className="car-tag"><p>Lihat Detail</p></div>
            </div>
        </a>
    </Link>
    )
}

export default Carlist;