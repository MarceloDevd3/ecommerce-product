import React, {useState} from 'react';
import Imagens from './arrayOfImg';
import NextIcon from '../components/images/icon-next.svg';
import PrevIcon from '../components/images/icon-previous.svg';


export default function MobileSlider() {
  
const [current, setCurrent] = useState(0);
const length =  Imagens.length;
const id = React.useId()

function NextSlider() {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

function PrevSlider() {
    setCurrent(current === 0 ? length - 1 : current - 1)
}


  return (
      <section id="Mobile--Slider--container">
        {Imagens.map((slide,index) => {
           return (
              index === current && <div className='img-box' key={id}><img key={index} src={slide.img}  alt="slide img"/></div> 
           )
        })}
         <div className='controls'>
           <button onClick={NextSlider} id="left-btn"><img src={NextIcon} className="icon" alt="NextIcon"/> </button>
           <button onClick={PrevSlider} id="right-btn"><img src={PrevIcon} className="icon" alt="PrevIcon"/> </button>
         </div>
      </section>
  )
}