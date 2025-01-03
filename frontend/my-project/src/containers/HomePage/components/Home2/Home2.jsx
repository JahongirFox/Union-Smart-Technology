import React from 'react';
import './Home2.css'
import home2 from '../Home2/home2.png'

function Home2() {
  return (
        <div className='Home2'>
            <p>О нас</p>
            <div className='Home2-card'>
                <img src={home2} alt="" />
                <div className='Home2-card-p-h6'>
                    <p>Почему UST?</p>
                    <h6>К услугам наших клиентов разработка <br /> программного обеспечения на заказ, <br /> проектирование пользовательских <br />интерфейсов, создание сайтов (в том числе на <br /> основе индивидуальной CMS) и их поддержка. </h6>
                    <h6>Мы также предлагаем услугу IT-консалтинга — <br /> налаживание работы любых информационно- <br />аналитических систем и онлайн-решений <br /> компании для большей эффективности бизнес- <br />процессов. </h6>
                    <h6>Сегодня компания «Union Smart Technology» <br /> имеет представительства с умелыми <br /> project‑менеджерами в РФ и Словакии. </h6>
                    <div className='Home2-btn'>
                        <a href={'http://localhost:3000/comand'}><button className='Home2-button'>Вакансии</button></a>
                        <a href={'http://localhost:3000/comand'}><button className='Home2-button'>Читать далее</button></a>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Home2;
