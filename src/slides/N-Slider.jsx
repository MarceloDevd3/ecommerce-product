import React from 'react';


import { useDispatch} from 'react-redux';
import { open } from '../dadoSlice';
import ProductImg1 from '../components/images/image-product-1.jpg';
import ProductImg2 from '../components/images/image-product-2.jpg';
import ProductImg3 from '../components/images/image-product-3.jpg';
import ProductImg4 from '../components/images/image-product-4.jpg';
import closeIcon from '../components/images/icon-close.svg';
import NextIcon from '../components/images/icon-next.svg';
import PrevIcon from '../components/images/icon-previous.svg';


export default function Innerslider() {
    
   /*esse e um exemplo de slide com use prev e next e uma opcao bullets */
   const dispatch = useDispatch();
   const [currentIndex, setCurrentIndex] = React.useState(0)
   const slideRef = React.useRef();
   const bulletsRef = React.useRef();

   const  items = [ProductImg1,ProductImg2,ProductImg3,ProductImg4];
   //letcurrentIndex = 0;

  const updateActiveItem = (index) => {
   const slides = slideRef.current.children;
   const bullets = bulletsRef.current.children;

   Array.from(slides.forEach((item, i) => {
      item.classList.toggle('active', i === index)
   }))

   Array.from( bullets.forEach((bullets, i) => {
      bullets.classList.toogle('active', i === index)
   }))

}

  const Next = () => {
   const newIndex = (currentIndex + 1) % items.length;
   setCurrentIndex( newIndex )
   updateActiveItem( newIndex );
  }

  const Prev = () => {
   const newIndex  = (currentIndex - 1 + items.length) % items.length;
   setCurrentIndex( newIndex )
   updateActiveItem( newIndex );
  }

  const handleBulletClick = (index) => {
   setCurrentIndex(index);
   updateActiveItem(index);
 };


  
    return (
        <div id="slider-desk--container">
            <section className='display'>
             <button className='close' onClick={() => dispatch(open())}><img src={closeIcon} alt="close-icon"  /></button>
             <div className="slide" ref={slideRef}>
          {items.map((imgSrc, i) => (
            <div key={i} className={`slides ${i === currentIndex ? 'active' : ''}`}>
              <img src={imgSrc} alt={`product-image-${i + 1}`} />
            </div>
          ))}
        </div>
               <div className='contr'>
                 <button id="next-btn" onClick={Next}><img src={NextIcon} alt="icon--arrow"/></button>
                 <button id="prev-btn" onClick={Prev}><img src={PrevIcon} alt="icon--arrow"/></button>
               </div>
            </section>

           <div className='slide-list' ref={bulletsRef}>
           {items.map((imgSrc, i) => (
          <div
            key={i}
            className={`slide-item ${i === currentIndex ? 'active' : ''}`}
            onClick={() => handleBulletClick(i)}
          >
            <img src={imgSrc} alt={`bullet-image-${i + 1}`} />
          </div>
        ))}
           </div>
        </div>
    )
}