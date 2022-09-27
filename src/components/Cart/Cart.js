import React from 'react';
import './Cart.css'

const Cart = (props) => {
const {cart}= props;
let total = 0;
let shipping = 0;

for (const product of cart){
     total = total + product.price;
     shipping += product.shipping;
}
const  tax = parseFloat( (total * 10/100).toFixed(2) );
// or we can do 
// const  tax = Number( (total * 10/100).toFixed(2) );
const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>
            <h4>This is order summery.</h4>
            <p>Selected Items:{cart.length}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:${tax}</p>  
            <h3>Grand Total:{grandTotal.toFixed(2)}</h3>    
            </div>
    );
};

export default Cart;