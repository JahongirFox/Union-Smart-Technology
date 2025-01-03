import React from 'react';
import './Home4.css'
import pic1 from '../Home4/pic1.png'
import pic2 from '../Home4/pic2.png'
import pic3 from '../Home4/pic3.png'
import pic4 from '../Home4/pic4.png'
import img1 from '../Home4/img1.png'
import img2 from '../Home4/img2.png'

function Home4() {
  return (
        <div className='Home4'>
            <p>Портфолио</p>
            <h6>Завершенные проекты</h6>
            <h5>Мы специализируемся на предоставлении программного обеспечения высшего <br /> качества и предоставлении высококвалифицированных команд с опытом в области <br /> разработки блокчейнов, аналитики больших данных и AI/ML, а также услуг по <br /> разработке программного обеспечения на заказ.</h5>


            <div className='Home4-big-card'>
                  <div className='Home4-card'>
                      <img src={pic1} alt="" />
                      <h6>Мобильный контроль</h6>
                      <p>Сервис для работы с клиентами и <br /> партнерами</p>
                  </div>
                  <div className='Home4-card'>
                      <img src={pic2} alt="" />
                      <h6>Голосовое управление</h6>
                      <p>Сервис для работы по <br /> задачам</p> 
                  </div>
                  <div className='Home4-card'>
                      <img src={pic3} alt="" />
                      <h6>Vroomgames</h6>
                      <p>Сервис для работы со списками <br /> заказов</p>
                  </div>
                  <div className='Home4-card'>
                      <img src={pic4} alt="" />
                      <h6>ATOL-бонус</h6>
                      <p>Мобильное приложение для <br /> профессионалов</p>
                  </div>
            </div>
            <div className='Home4-big-card'>
                  <div className='Home4-card'>
                      <img src={img1} alt="" />
                      <h6>Prorab-x</h6>
                      <p>Мобильное приложение для строителей</p>
                      <a href={'http://localhost:3000/portfolio'}><button className='btn-home4'>Портфолио</button></a>
                  </div>
                  <div className='Home4-card'>
                      <img src={img2} alt="" />
                      <h6>Актуаль</h6>
                      <p>Сайт промом игры</p> 
                      <a href={'http://localhost:3000/contact'}><button className='btn-home4'>Заказать проект</button></a>
                  </div>
            </div>

        </div>
  );
}

export default Home4;
