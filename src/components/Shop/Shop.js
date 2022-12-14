import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./Shop.css';
const Shop = () => {
    const [products, setproducts]=useState([]);
    const [cart, setcart]= useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setproducts(data))
    },[]);

    useEffect(()=>{
       const storedCart= getStoredCart();
       const  savedCart = [];
        // console.log(storedCart);
        for (const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
               const quantity= storedCart[id];
               addedProduct.quantity = quantity;
               savedCart.push(addedProduct);
            }
           
        }
        setcart(savedCart);
    },[products])
    //sending full product as parameter
    const handleAddToCart = (selectedProduct)=>{
        console.log(selectedProduct);
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity=exist.quantity + 1;
            newCart = [...rest,exist]
        }
        
        setcart(newCart);
        addToDb(selectedProduct.id)
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
           <div className="cart-container">
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;