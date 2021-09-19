import React, {Component, useState} from "react";
import { Carlist } from "..";

import XL7 from '../../assets/Image/image 10.png';
import Ertiga from '../../assets/Image/image 7.png';
import ErtigaSport from '../../assets/Image/image 11.png';
import Ignis from '../../assets/Image/image 9.png';

import Carry1 from '../../assets/Image/losbak.png';
import Carry2 from '../../assets/Image/losbak 2.png';


    const CarTab =()=>{
        const [toggleState, setToggleState] = useState(1);

        const toggleTab = (index) => {
            setToggleState(index);
        };
        return(
            <>
                <div className="tab-nav">
                    <div className={toggleState === 1 ? "nav active" : "nav"} onClick={() => toggleTab(1)}>
                        <a>Passenger Car</a>
                    </div>
                    <div className={toggleState === 2 ? "nav active" : "nav"} onClick={() => toggleTab(2)}>
                        <a>Commercial Car</a>
                    </div>
                </div>
                <div className={toggleState === 1 ? "car-list" : "car-list-hide"}>
                    <Carlist 
                        gambarMobil={XL7}
                        namaMobil="XL7"
                        hargaMobil="232.000.000"
                    />
                    <Carlist 
                        gambarMobil={Ertiga}
                        namaMobil="All New Ertiga"
                        hargaMobil="207.000.000"
                    />
                    <Carlist 
                        gambarMobil={ErtigaSport}
                        namaMobil="All New Ertiga Sport"
                        hargaMobil="252.000.000"
                    />
                    <Carlist 
                        gambarMobil={Ignis}
                        namaMobil="New Ignis"
                        hargaMobil="171.000.000"
                    />
                    <div className="divide"></div>
                    <div className="catalog-btn">
                        <a>Lihat Semua Mobil</a>
                    </div>
                </div>

                <div className={toggleState === 2 ? "car-list" : "car-list-hide"}>
                    <Carlist 
                        gambarMobil={Carry1}
                        namaMobil="New Carry Pickup"
                        hargaMobil="145.600.000"
                    />
                    <Carlist 
                        gambarMobil={Carry2}
                        namaMobil="New Carry Luxury"
                        hargaMobil="159.100.000"
                    />
                </div>
                </>
        )
    }

    export default CarTab;