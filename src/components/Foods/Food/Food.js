import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { actionTypes } from '../../../store/reducer';
import { useStateValue } from '../../../store/StateProvider';
import './Food.css';

const Food = ({ item: { id, image, dish, price, quantity } }) => {

    const [{ user, cart , subTotal }, dispatch] = useStateValue();

    const [quantityItem, setquantityItem] = useState(quantity);


    const history = useHistory();

    useEffect(() => {
        const index = cart.findIndex(food => food.dish === dish);
        if (index === -1) {
            setquantityItem(quantity);
        } else {
            setquantityItem(cart[index].quantity);
        }
    }, [] )

    const addCartHandler = () => {
    
        if (user === null) {
            history.push('/login');
        } else {
            const index = cart.findIndex(food => food.dish === dish);
            const copycart = [...cart];
            if (index === -1) {
                // dish not yet in cart
                const toDb = {
                    image: image,
                    dish: dish,
                    quantity: parseInt(quantityItem) + 1,
                    price: price,
                    defaultPrice:price
                }
                copycart.push(toDb);
                setquantityItem(parseInt(quantityItem) + 1);
                dispatch({
                    type: actionTypes.ADD_TO_CART_QUANTITY,
                    cart: copycart,
                    subTotal: parseInt(subTotal) + parseInt(price)

                })
            } else {
                // dish already in cart
                copycart[index].quantity = copycart[index].quantity + 1;
                copycart[index].price = parseInt(copycart[index].price) + parseInt(price);
                setquantityItem(parseInt(quantityItem) + 1);
                dispatch({
                    type: actionTypes.ADD_TO_CART_QUANTITY,
                    cart: copycart,
                    subTotal: parseInt(subTotal) + parseInt(copycart[index].defaultPrice)
                })
            }

        }

    }

    const removeCartHandler = () => {

        if (user === null) {
            history.push('/login');
        } else {
            const index = cart.findIndex(food => food.dish === dish);
            const copycart = [...cart];
            // dish already in cart
            copycart[index].quantity = copycart[index].quantity - 1;
            copycart[index].price = parseInt(copycart[index].price) - parseInt(price);
            let subTotalPrice = parseInt(subTotal) - parseInt(copycart[index].defaultPrice);
            setquantityItem(parseInt(quantityItem) - 1);
            if(copycart[index].quantity === 0) {
                copycart.splice(index,1);
            } 
            if(cart.length === 0) {
                subTotalPrice = '0';
            }
            dispatch({
                type: actionTypes.ADD_TO_CART_QUANTITY,
                cart: copycart,
                subTotal: subTotalPrice
            })
        }

    }


return (
    <div className="food">

        <div className="food__top">
            <img src={image} alt={image} />

        </div>

        <div className="food__middle">
            <h2>{dish}</h2>
            <h3><small>₹ </small>{price}</h3>

        </div>

        <div className="food__bottom">
            <button style={{ width: "40px" }} className="food__bottom__add"
                onClick={() => addCartHandler()}
            >+</button>
            <p>{quantityItem}</p>
            <button disabled={quantityItem > 0 ? false : true } style={{ width: "40px" }} className="food__bottom__remove"
                onClick={() => removeCartHandler()}
            >-</button>
        </div>

    </div>
)
}

export default Food;
