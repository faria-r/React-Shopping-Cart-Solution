import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import'./Shop.css';
const Shop = () => {
    const [products, setproducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setproducts(data))
    },[]);

    //sending full product as parameter
    const handleAddToCart = (product)=>{
        console.log(product);
       }
    return (
        <div className="shop-container">
           <div className="products-container">
{
    products.map(product => <Product 
        key={product.id}
        product={product}
        handleAddToCart = {handleAddToCart}
    ></Product>)
}
           </div>
           <div className="cart-contaienr">
<h4>This is order summery.</h4>
           </div>
        </div>
    );
};

export default Shop;