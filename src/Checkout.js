import React from 'react'
import './Checkout.css';
function Checkout() {
    return (
        <div className='Checkout'>

            <div className='checkout__left'>
               <img className='checkout_add' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
            

            
                <h2 className='checkout_title'>Your Shopping Basket
                 </h2>
                 </div>

            <div className='checkout_right'>
              
              <h2>The subtotal will go ther</h2>
            </div>
        </div>
    )
}

export default Checkout
