import React from "react";

const Pricing = ({name, price}) => { return(<div className="pricing-container">
        <div className="card-name">
            <p>{name}</p>
        </div>
        <div className="card-price">
            <p>{price}</p>
        </div>
    </div>
    )
}

export default Pricing;