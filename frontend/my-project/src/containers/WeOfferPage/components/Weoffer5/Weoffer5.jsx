import React from "react";
import "./Weoffer5.css"
import group1 from '../../components/Weoffer5/group1.png'
import group2 from '../../components/Weoffer5/group2.png'
import group3 from '../../components/Weoffer5/group3.png'
import group4 from '../../components/Weoffer5/group4.png'
import group5 from '../../components/Weoffer5/group5.png'
import group6 from '../../components/Weoffer5/group6.png'
import back from '../../components/Weoffer5/back.png'

const Weoffer5 = () =>{
    return(
        <div className="Weoffer5">

                <h1>Дополнительные <br /> услуги</h1>

        <div className="flex-group-fles">

            <img src={group1} alt="" />
            <img src={group2} alt="" />
            <img src={group3} alt="" />

        </div>
        <div className="flex-group-fles">

            <img src={group4} alt="" />
            <img src={group5} alt="" />
            <img src={group6} alt="" />

        </div>


                <div className="back-img-size">
                    <img src={back} alt="" />
                </div>


        </div>
    )
}

export default Weoffer5;    