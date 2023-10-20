import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  const total_price = basket.reduce((accumulator, item) => accumulator + item.price, 0);

  return (
    <div className='subtotal'>
        <p>
            Subtotal ({basket.length} items): <strong>${total_price.toFixed(2)}</strong>
        </p>
        <small className='subtotal__gift'>
            <input type='checkbox'/>This order contains a gift
        </small>

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal