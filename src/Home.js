import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg' 
            alt=''></img>
        </div>

        <div className='home__row'>
            {/* Product */}
            <Product title='ASUS TUF Gaming NVIDIA GeForce RTX™ 4070 Ti OC Edition Gaming Graphics Card' 
            id={1}
            price={849.99} 
            image='https://m.media-amazon.com/images/I/81XIr69BtVL._AC_SY450_.jpg'
            rating={5}></Product>

            <Product id={2} title='Video Game Socks Funny Gaming Gifts - Unisex for Men, Women and Teen Gamers' price={11.99} image='https://m.media-amazon.com/images/I/91aSoykoIJL._AC_UL320_.jpg' rating={5}/>
            
            <Product 
                id={1232}
                title='Video Games T-Shirt Funny Gamer Tee for Console Gaming Fans T-Shirt'
                price={19.99}
                image='https://m.media-amazon.com/images/I/71xJm36bG-L._AC_UL320_.jpg'
                rating={5}/>
        </div>

        <div className='home__row'>
            <Product 
                id={3}
                title='Gunnar - Premium Premium Gaming and Computer Glasses - Blocks 65% - 98% Blue Light - Intercept'
                price={69.99}
                image='https://m.media-amazon.com/images/I/81LIseFe-sL._AC_UL320_.jpg'
                rating={4}/>
            <Product 
                id={4}
                title='CTEN Series Gaming Gloves - Great Comfort and Grip, Perfect Gaming Gloves for Sweaty Hands, Ideal Gamer Gloves for PC, VR Gloves'
                price={19.99}
                image='https://m.media-amazon.com/images/I/71Hp10V6tVL._AC_SX425_.jpg'
                rating={3}/>
        </div>

        <div className='home__row'>
            <Product 
                id={5}
                title='INNOCN 27G1H 27 Inch 240Hz 144Hz Gaming Monitor Full HD 1920 x 1080P Computer Monitor, FreeSync & G-Sync Support, Game Plus, Eye Care, VESA, DisplayPort, HDMI, Black'
                price={184.99}
                image='https://m.media-amazon.com/images/I/71Ihfi7CjlL._AC_UL320_.jpg'
                rating={5}/>
        </div>
    </div>
  )
}

export default Home