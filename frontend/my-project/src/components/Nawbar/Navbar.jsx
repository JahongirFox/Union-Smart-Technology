import React from "react";
import "./Nawbar.css"
import { Link } from "react-router-dom";
import logo from '../Nawbar/logo.png'
const Navbar = () =>{
    return(
        <div className="Nawbar">
            <div className="Flex-nawbar">
                <div>
                <a href={'http://localhost:3000/home'}><img className="nawbar-img" src={logo} alt="" /></a>
                    </div>
                        
                    <div className="Nawbar-link">
                    <p className="Link-color">|</p>
                        <Link className="Link-color" to={"/home"}>Главный</Link> 
                        <p className="Link-color2">|</p>
                        <Link className="Link-color" to={"/comand"}>Команда</Link>
                        <p className="Link-color2">|</p>
                        <Link className="Link-color" to={"/weoffer"}>Услуги</Link>
                        <p className="Link-color2">|</p>
                        <Link className="Link-color" to={"/career"}>Карьера</Link>
                        <p className="Link-color2">|</p>
                        <Link className="Link-color" to={"/portfolio"}>Портфолио</Link>
                        <p className="Link-color2">|</p>
                        <Link className="Link-color" to={"/contact"}>Контакты</Link>
                        <p className="Link-color2">|</p>
                    </div>
            </div>
            
            

        </div>
    )
}

export default Navbar;