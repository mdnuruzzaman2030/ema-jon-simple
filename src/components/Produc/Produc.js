import React from 'react';
import './Produc.css' ;

const Produc = (props) => {
    const{name, img, seller, price,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: $ {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>


        </div>
    );
};

export default Produc;