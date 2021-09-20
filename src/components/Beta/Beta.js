import React, { useState } from "react";
import RisingOrange from '../../assets/Image/burgundy.png';
import BraveKhaki from '../../assets/Image/grey.png';
import PrimeBlack from '../../assets/Image/black.png';
import PrimeWhite from '../../assets/Image/white.png';


const Beta = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return(
        <>
        <div className={toggleState === 1 ? "car-image" : "hide"}>
            <img alt="mobil" src={RisingOrange}/>
        </div>
        <div className={toggleState === 2 ? "car-image" : "hide"}>
            <img alt="mobil"  src={BraveKhaki}/>
        </div>
        <div className={toggleState === 3 ? "car-image" : "hide"}>
            <img alt="mobil"  src={PrimeWhite}/>
        </div>
        <div className={toggleState === 4 ? "car-image" : "hide"}>
            <img alt="mobil"  src={PrimeBlack}/>
        </div>
        <div className={toggleState === 1 ? "color-name" : "hide"}>BURGUNDY RED</div>
        <div className={toggleState === 2 ? "color-name" : "hide"}>METALLIC MAGMA GREY</div>
        <div className={toggleState === 3 ? "color-name" : "hide"}>PRIME SNOW WHITE</div>
        <div className={toggleState === 4 ? "color-name" : "hide"}>PRIME COOL BLACK</div>
        <div className="nav-type">
            <div className={toggleState === 1 ? "color active" : "color"} onClick={()=>toggleTab(1)} style={{backgroundColor:'#534050'}}></div>
            <div className={toggleState === 2 ? "color active" : "color"} onClick={()=>toggleTab(2)} style={{backgroundColor:'#797979'}}></div>
            <div className={toggleState === 3 ? "color active" : "color"} onClick={()=>toggleTab(3)} style={{backgroundColor:'white'}}></div>
            <div className={toggleState === 4 ? "color active" : "color"} onClick={()=>toggleTab(4)} style={{backgroundColor:'black'}}></div>
        </div>
        </>
    )
}

export default Beta;