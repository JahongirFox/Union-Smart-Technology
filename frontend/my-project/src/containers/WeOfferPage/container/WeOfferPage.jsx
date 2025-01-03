import React from "react";
import "./WeOfferPage.css"
import Weoffer1 from '../components/Weoffer1/Weoffer1'
import Weoffer2 from '../components/Weoffer2/Weoffer2'
import Weoffer3 from '../components/Weoffer3/Weoffer3'
import Weoffer4 from '../components/Weoffer4/Weoffer4'
import Weoffer5 from '../components/Weoffer5/Weoffer5'

const WeOfferPage = () =>{
    return(
        <div className="WeOfferPage-container">

            <Weoffer1 />
            <Weoffer2 />
            <Weoffer3 />
            <Weoffer4 />
            <Weoffer5 />

        </div>
    )
}

export default WeOfferPage;