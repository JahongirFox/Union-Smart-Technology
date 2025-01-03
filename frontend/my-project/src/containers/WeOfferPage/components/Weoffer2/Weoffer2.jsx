import React from "react";
import "./Weoffer2.css"
import M1 from "../../components/Weoffer2/M1.png"
import M2 from "../../components/Weoffer2/M2.png"
import M3 from "../../components/Weoffer2/M3.png"

const Weoffer2 = () =>{
    return(
        <div className="Weoffer2">
                <div className="Offer-p-h1">
                    <p>Сотрудничество</p>
                    <h1>С учетом <br /> ваших потребностей</h1>
                </div>
            <div className="hover-cardss">
                <div className="Flex-img">
                    <img src={M1} alt="" />
                    <img src={M2} alt="" />
                    <img src={M3} alt="" />
                </div>
                <div className="Flex-text">
                    <p className="Wetextp">Быстрое масштабирование</p>
                    <p className="Wetextp">Прозрачное взаимодействие</p>
                    <p className="Wetextp">Смешанные команды</p>
                </div>
            </div>
        

        </div>
    )
}

export default Weoffer2;