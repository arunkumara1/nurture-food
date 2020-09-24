import React from 'react';
import './Food.css';

const Food = () => {


    return (
        <div className="food">

            <div className="food__top">
                <img src="https://cdn.techinasia.com/wp-content/uploads/2017/03/food-takeaway-delivery.jpg" alt="https://cdn.techinasia.com/wp-content/uploads/2017/03/food-takeaway-delivery.jpg" />

            </div>

            <div className="food__middle">
                <h2>Briyani</h2>
                <h3><small>₹ </small> 50</h3>

            </div>

            <div className="food__bottom">
                <button style={{width:"40px"}} className="food__bottom__add">+</button>
                <p>12</p>
                <button style={{width:"40px"}} className="food__bottom__remove">-</button>
            </div>
            
        </div>
    )
}

export default Food;
