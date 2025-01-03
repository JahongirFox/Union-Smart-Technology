import React from "react";
import "./Comand2.css"
import pic1 from '../ComandPage2/Comand2.Img/pic1.png'
import pic2 from '../ComandPage2/Comand2.Img/pic2.png'
import pic3 from '../ComandPage2/Comand2.Img/pic3.png'
import pic4 from '../ComandPage2/Comand2.Img/pic4.png'
import pic5 from '../ComandPage2/Comand2.Img/pic5.png'
import pic6 from '../ComandPage2/Comand2.Img/pic6.png'
import pic7 from '../ComandPage2/Comand2.Img/pic7.png'
import pic8 from '../ComandPage2/Comand2.Img/pic8.png'


const Comand2 = () =>{
    return(
        <div className="Comand2-container">
                <h1>Команда, <br /> ориентированнаяна людей</h1>
                <p>В команде нашей компании работают высококвалифицированные <br /> IT-специалисты, которые обладают не только качественными <br /> знаниями, но и бесценным опытом в разработке инновационных <br /> продуктов. Самое главное - каждый из них влюблен в то, что <br /> делает. Вы можете познакомиться с каждым участником нашей <br /> команды чуть ближе. </p>
                <div className="Card-top">
                    <div className="Comand-flex">
                        <div className="Comand-Card">
                            <img src={pic1} alt="" />
                            <h3>Николай шпаков</h3>
                            <p>Исполнительный директор</p>
                        </div>
                            <div className="Comand-Card">
                                <img src={pic2} alt="" />
                                <h3>Олег Науменко</h3>
                                <p>СТО</p>
                            </div>
                            <div className="Comand-Card">
                                <img src={pic3} alt="" />
                                <h3>Дмитрий Ершов</h3>
                                <p>Руководитель группы IOS</p>
                            </div>
                            <div className="Comand-Card">
                                <img src={pic4} alt="" />
                                <h3>Ярослав фомин</h3>
                                <p>Специалист талантов</p>
                        </div>
                </div>
                <div className="Comand-flex">
                        <div className="Comand-Card">
                            <img src={pic5} alt="" />
                            <h3>Елена горюнова</h3>
                            <p>Руководитель дизайнеров</p>
                        </div>
                            <div className="Comand-Card">
                                <img src={pic6} alt="" />
                                <h3>Ярослав фомин</h3>
                                <p>Руководитель группы</p>
                            </div>
                            <div className="Comand-Card">
                                <img src={pic7} alt="" />
                                <h3>Николай шпаков</h3>
                                <p>Управляющий делами</p>
                            </div>
                            <div className="Comand-Card">
                                <img src={pic8} alt="" />
                                <h3>Ольга науменко</h3>
                                <p>Руководитель группы</p>
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default Comand2;