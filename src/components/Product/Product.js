import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';




const Product = (props) => {
    const {product, handleAddToCart}= props;
   const {name, img, seller, price, ratings} = product;
 
    return (
        <div className='product'>
        <img src={img} alt=""></img>
       <div className="product-info">
       <p className="product-name">{name}</p>
        <p>Price:${price}</p>
        <p><small>Seller:{seller}</small></p>
        <p><small>ratings:{ratings}stars</small></p>
       </div>
       <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
        <p className='btn-text'>Add To Cart</p>
      <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Product;