import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { actionTypes } from '../../../store/reducer';
import { useStateValue } from '../../../store/StateProvider';
import './Cart.css';


const Cart = ({ item: { image, dish, price, quantity, defaultPrice } }) => {


    const [{ user, cart, subTotal }, dispatch] = useStateValue();

    const [quantityItem, setquantityItem] = useState(quantity);

    const [priceCart, setPriceCart] = useState(price);

    const history = useHistory();

    const addCartHandler = () => {

        if (user === null) {
            history.push('/login');
        } else {
            const index = cart.findIndex(food => food.dish === dish);
            const copycart = [...cart];
            copycart[index].quantity = copycart[index].quantity + 1;
            copycart[index].price = parseInt(copycart[index].price) + parseInt(price);
            setquantityItem(parseInt(quantityItem) + 1);
            setPriceCart(parseInt(priceCart) + parseInt(defaultPrice));
            dispatch({
                type: actionTypes.ADD_TO_CART_QUANTITY,
                cart: copycart,
                subTotal: parseInt(subTotal) + parseInt(copycart[index].defaultPrice)

            })
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
            setquantityItem(parseInt(quantityItem) - 1);
            setPriceCart(parseInt(priceCart) - parseInt(defaultPrice));
            let subTotalPrice = parseInt(subTotal) - parseInt(copycart[index].defaultPrice);
            if (copycart[index].quantity === 0) {
                copycart.splice(index, 1);
            }
            if (cart.length === 0) {
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
        <div className="cart">
            <div className="cart__left">
                <img src={image} alt={image} />
            </div>
            <div className="cart__center">
                <p>{dish}</p>
                <div className="cart__option__modify">
                    <button onClick={() => addCartHandler()}> + </button>
                    <a>{quantity}</a>
                    <button disabled={quantityItem > 0 ? false : true}
                        onClick={() => removeCartHandler()}> - </button>
                </div>
            </div>
            <div className="cart__right">
                <p>Total : <strong>₹</strong> {priceCart}</p>
            </div>
        </div>
    )
}

export default Cart;
