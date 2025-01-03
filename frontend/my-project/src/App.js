import React from 'react';
import HomePage from './containers/HomePage/container/HomePage';
import ComandPage from './containers/ComandPage/container/ComandPage'
import WeOfferPage from './containers/WeOfferPage/container/WeOfferPage';
import CareerPage from './containers/CareerPage/container/CareerPage';
import PortfolioPage from './containers/PortfolioPage/container/PortfolioPage';
import ContactPage from './containers/ContactPage/container/ContactPage';
import MyLayout from './components/Layout/MyLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <MyLayout>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/comand' element={<ComandPage/>}/>
          <Route path='/weoffer' element={<WeOfferPage/>}/>
          <Route path='/career' element={<CareerPage/>}/>
          <Route path='/portfolio' element={<PortfolioPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
        
      </MyLayout>
    </div>
  );
}

export default App;
