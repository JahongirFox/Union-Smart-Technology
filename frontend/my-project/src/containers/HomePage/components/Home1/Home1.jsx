import React from 'react';
import './Home1.css'

function Home1() {
  return (
        <div className='Home1'>
                <div className='Home1-card'>
                    <p>Студия разработки <br /> программного обеспечения <br /> <span>с продуктовым мышлением</span> </p>
                    <h5>Мы создаем кроссплатформенные мобильные <br /> приложения и веб-платформы и находим для <br /> них  лучшие решения.</h5>
                    <a href={'http://localhost:3000/comand'}><button className='Home1-card-btn'>Заказать проект</button></a>
                </div>  


                <div className='Home-flex-h1-p'>
                    <div className='Home-h1-p-flex'>
                      <h1>4+</h1>
                      <p>Года опыта</p>
                    </div>
                    <div className='Home-h1-p-flex'>
                      <h1>30+</h1>
                      <p>Завершенных проектов</p>
                    </div>
                    <div className='Home-h1-p-flex'>
                      <h1>4+</h1>
                      <p>Года опыта</p>
                    </div>
                    <div className='Home-h1-p-flex'>
                      <h1>4+</h1>
                      <p>Года опыта</p>
                    </div>
                </div>
        </div>
  );
}

export default Home1;
