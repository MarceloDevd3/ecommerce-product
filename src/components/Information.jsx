import React from 'react';

export default function EcommerceProductInfo() {
  return (
    <section id='product-info'>
      <h1 id="producto--title--Small--text"> Sneaker Company</h1>
      <h2 id="producto--title">Fall Limited Edition Sneakers</h2>
      <p id="info">These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
      <div className='Price--row'>
        <div className='price'>
          <h2 id="product-price">$125.00</h2>
          <div id="product--descont">50%</div>
        </div>
        <div className='old-price'>
          <h2 id="product--old--price">
            $250.00</h2>
        </div>
      </div>
      <article className='product-controls'></article>
    </section>
  )
}