import React from "react";
import "./Footer.css";
import logo from '../Footer/logo.png'
import smart from '../Footer/smart.jpeg'


const Footer = ()=>{
    return(
        <div className="Footer">
           <div className="Flex-footer">
                <div>
                    <a href={'http://localhost:3000/home'}><img className="nawbar-img" src={logo} alt="" /></a>
                    </div>
                        
                    <div className="Footer-link">
                    <p className="Link-color">|</p>
                        <a href={'http://localhost:3000/home'} className="Link-color" >Главный</a> 
                        <p className="Link-color2">|</p>
                        <a href={'http://localhost:3000/comand'} className="Link-color" >Команда</a>
                        <p className="Link-color2">|</p>
                        <a href={'http://localhost:3000/weoffer'} className="Link-color" >Услуги</a>
                        <p className="Link-color2">|</p>
                        <a href={'http://localhost:3000/career'} className="Link-color" >карьера</a>
                        <p className="Link-color2">|</p>
                        <a href={'http://localhost:3000/portfolio'} className="Link-color" >Портфолио</a>
                        <p className="Link-color2">|</p>
                        <a href={'http://localhost:3000/contact'} className="Link-color" >Контакты</a>
                        <p className="Link-color2">|</p>
                    </div>
            </div>


            <div className="Footer-flex">
                <div className="Footer-p-h6">
                    <p>Российская команда</p>
                    <h6>contact@unionsmarttech.ru <br /> +7 911 932-90-29</h6>
                    <h6>24 Entuziastov street, <br />Saint Petersburg, 191 119</h6>
                </div>
                <div className="Footer-p-h6">
                    <p>Словакская команда</p>
                    <h6>contact@unionsmarttech.ru <br /> +421 494 539-852</h6>
                    <h6>24 Entuziastov street, <br />Saint Petersburg, 191 119</h6>
                </div>
                <img className="UST" src={smart} alt="" />
            </div>
        </div>
    )
}

export default Footer;