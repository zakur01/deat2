import React from 'react';
import { Link } from "react-router-dom"



function contacts() {
    
    return (
        <div  className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <Link to="/2">
                <img src={require('../img/ufo.gif')} alt="" width="550px" height="550px" />
                        
                    </Link>

        </div>
            </div>
            </div>
    )
}

export default contacts
