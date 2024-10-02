import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetarDado } from '../dadoSlice';

// icons and imgs
import menuIcon from './images/icon-menu.svg';
import close from './images/icon-close.svg';
import cart from './images/icon-cart.svg';
import trash from './images/icon-delete.svg';
import profile from './images/image-avatar.png';
import ProductImg1 from './images/image-product-1-thumbnail.jpg';


export default function NavBar() {

  const [navBar, setNavbar] = useState(false);
  const [cartBar, setCartbar] = useState(false);
  const [checkoutCart, setCheckoutCart] = useState(125.00)

  const dispatch = useDispatch();
  const dado = useSelector((state) => state.dado);


  const menu = () => {

    let bd = document.querySelector('.shadow')
    setNavbar(prev => !prev)

    if (navBar) {
      bd.className = 'shadow'
    } else {
      bd.className = 'shadow active'
    }
  }

  useEffect(() => {
    let con = parseInt(dado.valor)
    let c = 125 * con;
    setCheckoutCart(c)
  })

  const cartArticle = () => {
    setCartbar(prev => !prev)
  }

  return (
    <>
      <header>
        <div className={navBar ? "shadow active" : "shadow"}></div>
        <div className="left">
          <nav className={navBar ? "bar active" : "bar"} >
            <button className='menu-btn ' onClick={menu}>
              <img src={close} alt=" close-icon" />
            </button>
            <ul id="navbar-list">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <button className="menu-btn" onClick={menu}>
            <img src={menuIcon} alt="menu bars icon" />
          </button>
          <a id="logo" href="index.html">Sneaker</a>
        </div>
        <div className="right">
          <div className="car">

            {dado.valor == 0 || dado.valor < 0 ?
              <div></div> :
              <div className='red-bubble'>{dado.valor}</div>}
            <img onClick={cartArticle} src={cart} alt="cart-icon" />
            
            <article className={cartBar ? "cart-add active" : "cart-add"}>
              <h3 id="cart-title">Cart</h3>
              <hr></hr>
              {dado.valor == 0 || dado.valor < 0 ?
                <div>
                  <p className='op-text'>Your cart is empaty</p>
                </div> :
                <div className='full-card'>
                  <article className='cart-container'>
                    <div className='card-img'>
                      <img src={ProductImg1} alt="product image" id="card-img" />
                    </div>
                    <div className='card-data--content'>
                      <h4>Fall Limited Edition Sneakers</h4>
                      <p><span className='full-price'>125.00 x {dado.valor} </span>   <strong>${checkoutCart}</strong></p>
                    </div>
                    <button id="trash" onClick={() => dispatch(resetarDado())}><img src={trash} /> </button>
                  </article>
                  <button id="checkout-cart">checkout</button>
                </div>
              }
            </article>

          </div>
          <div id='profile'>
            <img src={profile} alt="profile-menu" />
          </div>
        </div>
      </header>
      <div className='line'></div>
    </>
  )
}