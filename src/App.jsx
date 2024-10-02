import React from 'react';
//components
import NavBar from './components/Navbar';
import MobileSlider from './slides/Slider';
import DeskSlider from './slides/subSlider';
import Information from './components/Information'
import Order from './components/Order';

import './assets/App.css';
import './assets/BreakPoints.css';

function App() {
  
  
  return (
    <div>
    <NavBar />
    <MobileSlider />
    <div id="desktop">
    <div className='desk'>
       <DeskSlider/>
    </div>
    <div className="inner--Space">
    <Information />
    <Order />
    </div>
    </div>
    </div>
  )
  


}

export default App
