import React, {  useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import './Carts.css';
import useStyles from './style';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import { IconButton } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import { PayPalButton } from "react-paypal-button-v2";
import { useStateValue } from '../../store/StateProvider';
import { actionTypes, getSubTotal } from '../../store/reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import db from '../../firebase/firebase';


toast.configure();


const Carts = () => {

    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);

    const [{ user, cart, subTotal }, dispatch] = useStateValue();

    const [ orderID , setOrderID ] = useState(0);

    const history = useHistory();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        db.collection('orders')
        .orderBy('orderID','desc')
        .onSnapshot((snapshot) => (
            setOrderID(snapshot.docs[0].data().orderID)
        ))
    },[]);


    let cartComponent = (
        cart.map(car => (
            <Cart key={car.dish} item={car} />
        ))
    );

    if (cart.length === 0) {
        cartComponent = (
            <div className="cart__noimage">
                <img src={require('../../assets/images/empty-cart-png.png')} alt={require('../../assets/images/empty-cart-png.png')} />
            </div>
        );
    }

     const handleToken = async (token, addresses) =>  {
        const response = await axios.post(
          "https://g6sx2.sse.codesandbox.io/checkout",
          { token, cart, subTotal }
        );
        const { status } = response.data;
        if(orderID > 0) {
            localStorage.setItem('orderID',  parseInt(orderID) + 1);
        }
        else {
          parseInt(localStorage.setItem('orderID', 1));
          setOrderID(1);
        }
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
          db.collection('orders').add({
                cart: cart,
                subTotal: subTotal,
                orderID : parseInt(orderID) + 1,
                user:user.displayName
          }).then(response => {
              history.push('/orders');
              dispatch({
                  type:actionTypes.ADD_TO_CART_QUANTITY,
                  cart: [],
                  subTotal: '0'

              });
          }).catch(err => {
              console.log(err);
          })
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }


    return (
        <div className="carts">
            <div className="carts__top__info">
                <p>SubTotal : <strong>₹</strong> {subTotal}</p>
                {/* <div className="post_bottom__option">
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="comment section"
                    >

                        <CommentIcon />

                    </IconButton>

                </div>
                <Collapse in={expanded} timeout="auto" unmountOnExit> */}
                    <div className={parseInt(subTotal) === 0 ? 'check__condition' : 'check'} >

                        <StripeCheckout
                            stripeKey="pk_test_51HZy7KHC6rutUpCoNqvfBVb8YzE1uJ7wCsKFSv5cy9q87z1KpWjLn0x7pmBVSx6vztz9S6R8FebgqKyb3XFatAal00fEi0Sp1y"
                            token={handleToken}
                            // billingAddress
                            // shippingAddress
                            amount={parseInt(subTotal) * 100 }
                            name="PAY FOR NURTURE FOOD"
                            currency="INR"
                        />
                    </div>
                {/* </Collapse> */}
            </div>

            {cartComponent}

        </div>
    )
}

export default Carts;
