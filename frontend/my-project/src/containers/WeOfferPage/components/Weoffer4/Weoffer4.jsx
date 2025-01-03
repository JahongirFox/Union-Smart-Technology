import React from "react";
import "./Weoffer4.css"
import labels from '../../components/Weoffer4/labels.png'
import logo from '../../components/Weoffer4/logo.png'
import logoo from '../../components/Weoffer4/logoo.png'
import logooo from '../../components/Weoffer4/logooo.png'


const Weoffer4 = () =>{
    return(
        <div className="Weoffer4">


        

                <div className="birinchi-flex">
                    <h1>Анализируем</h1>
                    <p>Пишем ТЗ для разработки, учитывая бизнес-процессы <br /> и технологии заказчика и потребности <br /> пользователей.</p>
                    <h4>Мы анализировали, когда делали проект для:</h4>
                    <img className="labal-img" src={labels} alt="" />
                    <h5>Можем пройти весь путь <br /> или выполнить только этот  этап.</h5>
                </div>


                <div className="ikinchi-flex">  
                    <h1>Прототипируем</h1>
                    <p>Прорабатываем пользовательские сценарии, <br /> проектируем логику приложения, скечируем <br /> основные экраны.</p>
                    <h4>Мы прототипировали, когда делали проект для:</h4>

                    <div className="img-flex">
                        <img className="logo-img" src={logo} alt="" />
                        <img className="labal2-img" src={labels} alt="" />
                    </div>

                    <h5>Можем пройти весь путь <br /> или выполнить только этот  этап.</h5>
                </div>




                <div className="ikinchi-flex">
                    <h1>Дизайним</h1>
                    <p>Адаптируем фирменный стиль заказчика к <br /> гайдлайнам платформ. Рисуем удобные и <br /> понятные интерфейсы.</p>
                    <h4>Мы создавали дизайн, когда делали проект для:</h4>

                    <div className="img-flex2">
                        <img className="logo-img2" src={logo} alt="" />
                        <img className="logo-img2" src={logoo} alt="" />
                        <img className="logo-img2" src={logooo} alt="" />
                    </div>

                    <h5>Можем пройти весь путь <br /> или выполнить только этот этап.</h5>
                </div>

                
                <div className="ikinchi-flex">
                    <h1>Программируем</h1>
                    <p>Создаём расширяемую архитектуру, пишем <br /> чистый и стабильный код. Интегрируемся с <br /> технологиями заказчика.</p>
                    <h4>Мы прогаммировали, когда делали проект для:</h4>

                    <div className="img-flex22">
                        <img className="logo-img22" src={logo} alt="" />
                        <img className="logo-img22" src={logooo} alt="" />
                        <img className="logo-img22" src={labels} alt="" />
                        <img className="logo-img22" src={logoo} alt="" />
                    </div>

                    <h5>Можем пройти весь путь <br /> или выполнить только этот  этап.</h5>
                </div>




                <div className="ikinchi-flex">
                    <h1>Тестируем</h1>
                    <p>Проводим ручное функциональное тестирование <br /> и пишем UI-автотесты. Готовим чек-листы и тест-кейсы.</p>
                    <h4>Мы тестировали, когда делали проект для:</h4>

                    <div className="img-flex22">
                        <img className="logo-img22" src={logo} alt="" />
                        <img className="logo-img22" src={logooo} alt="" />
                        <img className="logo-img22" src={labels} alt="" />
                        <img className="logo-img22" src={logoo} alt="" />
                    </div>

                    <h5>Можем пройти весь путь <br /> или выполнить только этот этап.</h5>
                </div>
                
                <div className="ikinchi-flex">
                    <h1>Поддерживаем</h1>
                    <p>Работаем по SLA. Следим за стабильностью <br /> работы приложения, обновляем под новые <br /> устройства и версии iOS и Android.</p>
                    <h4>Мы предоставляем поддержку:</h4>

                    <div className="img-flex222">
                      
                        <img className="logo-img222" src={logooo} alt="" />
                        <img className="logo-img222" src={labels} alt="" />
    
                    </div>

                    <h5>Можем пройти весь путь или выполнить только этот этап.</h5>
                </div>
            


        
       







        </div>
    )
}

export default Weoffer4;    