import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    //console.log(props.product);
    const {name,price,img,seller,star,stock}=props.product;
    return (
        <div className="product">
        <div>
         <img src={img}/>
        </div>
        <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p><small>by: {seller}</small></p>
        <p>${price}</p>
        <p><small>only {stock} avaiable in stock - order soon</small></p>
        <button className="main-button"><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
        
        
        </div>
            
        </div>
    );
};

export default Product;