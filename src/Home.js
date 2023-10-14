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
            <Product title='Open Box' 
            price={29.99} 
            image='https://images.tcdn.com.br/img/img_prod/1098943/caixa_de_papelao_ef7_34_5x51x16_5cm_1_und_4663_1_0a41a655f58015ec2f6b018e426d89c8.jpg'
            rating={5}></Product>
            {/* Product */}
            {/* Product */}
        </div>

        <div className='home__row'>
            {/* Product */}
            {/* Product */}
        </div>

        <div className='home__row'>
            {/* Product */}
        </div>
    </div>
  )
}

export default Home