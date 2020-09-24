import React from 'react';
import './Cart.css';


const Cart = () => {
    return (
        <div className="cart">
            <div className="cart__left">
                <img src="https://cdn.techinasia.com/wp-content/uploads/2017/03/food-takeaway-delivery.jpg" alt="https://cdn.techinasia.com/wp-content/uploads/2017/03/food-takeaway-delivery.jpg" />
            </div>
            <div className="cart__center">
                <p>Briyani  -  Thalapkati</p>
                <div className="cart__option__modify">
                    <button> + </button>
                    <a>15</a>
                    <button> - </button>
                </div>
            </div>
            <div className="cart__right">
                <p>Total : <strong>₹</strong> 50</p>
            </div>
        </div>
    )
}

export default Cart;
