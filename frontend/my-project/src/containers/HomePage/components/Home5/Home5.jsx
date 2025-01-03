import React from 'react';
import './Home5.css'
import icon1 from '../Home5/icon1.png'
import icon2 from '../Home5/icon2.png'
import icon3 from '../Home5/icon3.png'
import icon4 from '../Home5/icon4.png'
import Group1 from '../Home5/Group1.png'
import Group2 from '../Home5/Group2.png'
import Group3 from '../Home5/Group3.png'
import Group4 from '../Home5/Group4.png'
import Group5 from '../Home5/Group5.png'
import Group6 from '../Home5/Group6.png'



function Home5() {
  return (
        <div className='Home5'>
            <p>Наши</p>
            <h6>Преимущества</h6>
            <h5>Основная ценность нашей компании - создание качественного продукта и <br /> удовлетворение потребностей клиента. Поэтому перед началом разработки мы <br />  проводим маркетинговые исследования и помогаем клиенту определить стратегию <br /> развития продукта.</h5>

                <div className='Home5-card-flex'>
                    <div className='Home5-card'>
                        <img src={icon1} alt="" />
                        <h3>Разработка программного <br /> обеспечения</h3>
                        <p>Мы обеспечиваем полный цикл <br /> разработки программного <br /> обеспечения, развертывания и <br /> послерелизной поддержки. Вы <br /> получите функциональный,<br /> масштабируемый и безопасный <br /> продукт, идеально подходящий <br /> для бизнеса.</p>
                    </div>
                    <div className='Home5-card'>
                        <img src={icon2} alt="" />
                        <h3>«Спасение» вашего <br /> проекта   </h3>
                        <p>Избегайте затрат на <br /> инвестиции в развитие <br /> внутренних навыков. <br /> Нанимайте профессионалов с <br />необходимыми навыками для <br /> обеспечения результатов <br />
                        проекта и своевременной <br /> доставки.</p>
                    </div>
                    <div className='Home5-card'>
                        <img src={icon4} alt="" />
                        <h3>Создание выделенного <br /> ИТ-центра</h3>
                        <p>Мы предоставляем <br /> выделенные команды на <br /> полный рабочий день, <br /> включающие аналитиков,<br /> дизайнеров, разработчиков,<br /> QA-инженеров и менеджеров <br /> проектов. Соберите свою <br /> команду за несколько дней.</p>
                    </div>
                    <div className='Home5-card'>
                        <img src={icon3} alt="" />
                        <h3>Профессионализм <br /> команды</h3>
                        <p>Избегайте затрат на <br /> инвестиции в развитие <br /> внутренних навыков. <br /> Нанимайте профессионалов с <br />необходимыми навыками для <br /> обеспечения результатов <br />
                        проекта и своевременной <br /> доставки.</p>
                    </div>
                </div>


                <div className='Home5-h6'>

                        <h6>Клиенты</h6>
                    <div className='Home5-img-card'>
                            <img className='img-group' src={Group1} alt="" />
                            <img className='img-group' src={Group2} alt="" />
                            <img className='img-group' src={Group3} alt="" />
                            <img className='img-group' src={Group4} alt="" />
                            <img className='img-group' src={Group5} alt="" />
                            <img className='img-group' src={Group6} alt="" />
                    </div>
                    <div className='Home5-img-card'>
                            <img className='img-group' src={Group5} alt="" />
                            <img className='img-group' src={Group6} alt="" />
                            <img className='img-group' src={Group2} alt="" />
                            <img className='img-group' src={Group3} alt="" />
                            <img className='img-group' src={Group1} alt="" />
                            <img className='img-group' src={Group4} alt="" />
                    </div>
                </div>
        </div>
  );
}

export default Home5;
