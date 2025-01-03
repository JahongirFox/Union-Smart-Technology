import React from "react";
import "./Weoffer3.css"
import servis from "../../components/Weoffer3/servis.png"


const Weoffer3 = () =>{
    return(
        <div className="Weoffer3">
            
           <div className="weofffer-p-h1">
                <p>Полный спектр</p>
                <h1>Наших услуг</h1>
           </div>
           <img className="sev" src={servis} alt="" />

        </div>
    )
}

export default Weoffer3;