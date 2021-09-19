import React, { useState } from "react";
import RisingOrange from '../../assets/Image/image 19.png';
import BraveKhaki from '../../assets/Image/khaki.png';
import PrimeBlack from '../../assets/Image/black.png';
import PrimeWhite from '../../assets/Image/white.png';


const Alpha = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return(
        <>
        <div className={toggleState === 1 ? "car-image" : "hide"}>
            <img src={RisingOrange}/>
        </div>
        <div className={toggleState === 2 ? "car-image" : "hide"}>
            <img src={BraveKhaki}/>
        </div>
        <div className={toggleState === 3 ? "car-image" : "hide"}>
            <img src={PrimeBlack}/>
        </div>
        <div className={toggleState === 4 ? "car-image" : "hide"}>
            <img src={PrimeWhite}/>
        </div>
        <div className={toggleState === 1 ? "color-name" : "hide"}>RISING ORANGE + BLACK</div>
        <div className={toggleState === 2 ? "color-name" : "hide"}>BRAVE KHAKI + BLACK</div>
        <div className={toggleState === 3 ? "color-name" : "hide"}>PRIME COOL BLACK</div>
        <div className={toggleState === 4 ? "color-name" : "hide"}>PRIME SNOW WHITE</div>
        <div className="nav-type">
            <div className={toggleState === 1 ? "color active" : "color"} onClick={()=>toggleTab(1)} style={{backgroundColor:'#C04C3C'}}></div>
            <div className={toggleState === 2 ? "color active" : "color"} onClick={()=>toggleTab(2)} style={{backgroundColor:'#AE923D'}}></div>
            <div className={toggleState === 3 ? "color active" : "color"} onClick={()=>toggleTab(3)} style={{backgroundColor:'black'}}></div>
            <div className={toggleState === 4 ? "color active" : "color"} onClick={()=>toggleTab(4)} style={{backgroundColor:'white'}}></div>
        </div>
        </>
    )
}

export default Alpha;