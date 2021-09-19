import React, { useState } from "react";
import { Alpha, Beta, Zeta } from "..";
import './TabMobil.scss';

const TabMobil = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return(
        <>
        <div className="nav-type">
            <a className={toggleState === 1 ? "nav-item active" : "nav-item"}
            onClick={() => toggleTab(1)}>XL7 Alpha</a>
            <a className={toggleState === 2 ? "nav-item active" : "nav-item"}
            onClick={() => toggleTab(2)}>XL7 Beta</a>
            <a className={toggleState === 3 ? "nav-item active" : "nav-item"}
            onClick={() => toggleTab(3)}>XL7 Zeta</a>
        </div>

        <div className={toggleState === 1 ? "type-color-content" : "hide"}>
            <Alpha/>                
        </div>
        <div className={toggleState === 2 ? "type-color-content" : "hide"}>
             <Beta/>            
        </div>
        <div className={toggleState === 3 ? "type-color-content" : "hide"}>
               <Zeta/>             
        </div>
        </> 
    )
}

export default TabMobil;