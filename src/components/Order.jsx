import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../dadoSlice';

//icon
import CartIcon from './images/icon-cart.svg';

export default function Order() {

    const dispatch = useDispatch();
    const dado = useSelector((state) => state.dado);


    return (
        <div className='together'>
            <div className="row">
                <button onClick={() => dispatch(add())}>+</button>
                <div className='display'>{dado.valor}</div>
                <button onClick={() => dispatch(remove())}>-</button>
            </div>
            <button id="btn" > <img src={CartIcon} alt="cart icon" /> Add to cart</button>
        </div>
    )
}