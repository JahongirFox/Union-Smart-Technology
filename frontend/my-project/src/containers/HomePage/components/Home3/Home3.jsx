import React from 'react';
import './Home3.css'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'
import icon5 from './icon5.png'
import icon6 from './icon6.png'

function Home3() {
  return (
        <div className='Home3'>
              <div className='Home3-card'>
                <p>Наши предложения</p>
                <h1>Разработка полного цикла</h1>
                <h6>Мы можем разработать для вас любое индивидуальное решение. Наша компания <br /> обладает широкими возможностями для успешного создания технически-сложных <br /> систем.</h6>
              </div>

            <div className='Home3-flex'>
                <div className='Home3-img-p-h6'>
                    <img src={icon1} alt="" />
                    <p>Программируем</p>
                    <h6>Создаём расширяемую архитектуру, пишем <br /> чистый и стабильный код. Интегрируемся с <br /> технологиями заказчика.</h6>
                </div>
                <div className='Home3-img-p-h6'>
                    <img src={icon2} alt="" />
                    <p>Тестируем</p>
                    <h6>Проводим ручное функциональное <br /> тестирование и пишем UI-автотесты. Готовим <br /> чек-листы и тест-кейсы.</h6>
                </div>
                <div className='Home3-img-p-h6'>
                    <img src={icon3} alt="" />
                    <p>Поддерживаем</p>
                    <h6>Работаем по SLA. Следим за стабильностью <br /> работы приложения, обновляем под новые <br /> устройства и версии iOS и Android.</h6>
                </div>
            </div>

            <div className='Home3-flex'>
                <div className='Home3-img-p-h6'>
                    <img src={icon4} alt="" />
                    <p>Анализируем</p>
                    <h6>Пишем ТЗ для разработки, учитывая бизнес <br />-процессы и технологии заказчика и <br /> потребности пользователей.</h6>
                </div>
                <div className='Home3-img-p-h6'>
                    <img src={icon5} alt="" />
                    <p>Прототипируем</p>
                    <h6>Прорабатываем пользовательские сценарии, <br /> проектируем логику приложения, скечируем <br /> основные экраны.</h6>
                </div>
                <div className='Home3-img-p-h6'>
                    <img src={icon6} alt="" />
                    <p>Дизайним</p>
                    <h6>Адаптируем фирменный стиль заказчика к <br /> гайдлайнам платформ. Рисуем удобные и <br /> понятные интерфейсы.</h6>
                </div>
            </div>
            <a href={'http://localhost:3000/weoffer'}><button className='Home3-btn'>Все услуги </button></a>


        </div>
  );
}

export default Home3;
