import React from "react";
import "./ComandPage.css"
import ComandPage1 from '../components/ComandPage1/Comand1'
import ComandPage2 from '../components/ComandPage2/Comand2'
import ComandPage3 from '../components/ComandPage3/Comand3'

const ComandPage = () =>{
    return(
        <div className="comandpage-container">

            <ComandPage1 />
            <ComandPage2 />
            <ComandPage3 />

        </div>
    )
}

export default ComandPage;