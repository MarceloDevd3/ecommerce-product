import React, { useState } from 'react';
import Slide from './N-Slider';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../dadoSlice';


import ProductImg1 from '../components/images/image-product-1.jpg';
import ProductImg2 from '../components/images/image-product-2.jpg';
import ProductImg3 from '../components/images/image-product-3.jpg';
import ProductImg4 from '../components/images/image-product-4.jpg';


export default function subSlide() {

    const [displayImg, setDisplayImg] = useState(ProductImg1)

    
    const dispatch = useDispatch();
    const dado = useSelector((state) => state.dado);
  

    function showTime(a) {
        setDisplayImg(a)
    }


    return (
        <div className='container-slide-desk'>
            <div id="display-img">
               <img src={displayImg} alt="bigger-product-image" onClick={() => dispatch(open())}
                />     
                {dado.slide && <Slide/>} 
            </div>
            <div className='row-product'>
                <div className='img-item' onClick={() => showTime(ProductImg1)} >
                   <img src={ProductImg1} alt="product-img" />
                </div>
                <div className='img-item' onClick={() => showTime(ProductImg2)}>
                <img src={ProductImg2} alt="product-img" />
                </div>
                <div className='img-item' onClick={() => showTime(ProductImg3)}>
                 
                <img src={ProductImg3} alt="product-img" />
                </div>
                <div className='img-item' onClick={() => showTime(ProductImg4)}>
                 
                <img src={ProductImg4} alt="product-img" />
                </div>

            </div>
        </div>
    )
}