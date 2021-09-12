import React from 'react'
import { useHistory } from 'react-router-dom';
import './Product.css';

function Product({id, title, image, price, rating}) {

    const history = useHistory();
    function productDescription() {
        history.push("/product_description");
    }

    return (
        // The product card
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map(() => (
                            <p>⭐</p>
                        )
                    )}
                </div>
            </div>

            <img src={image}/>
            <button onClick={productDescription}>Check this out</button>
        </div>
    )
}

export default Product