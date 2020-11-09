import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../store/StateProvider';
import './Order.css';
import useStyles from './style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StripeCheckout from "react-stripe-checkout";
import db from '../../firebase/firebase';


toast.configure();

const Order = () => {

    // const classes = useStyles();

    // from DB

    const [{ user, cart, subTotal }, dispatch] = useStateValue();

    const [orders, setOrder] = useState([]);

    const [total, setTotal] = useState('');


    useEffect(() => {
            db.collection('orders').where('user', '==', localStorage.getItem('user')).orderBy('orderID', 'desc').
                onSnapshot((snapshot) => (
                    setOrder(snapshot.docs[0].data().cart)
                ))
    }, []);

    useEffect(() => {
            db.collection('orders').where('user', '==', localStorage.getItem('user')).orderBy('orderID', 'desc').
                onSnapshot((snapshot) => (
                    setTotal(snapshot.docs[0].data().subTotal)
                ))
    }, [orders]);

    return (
        <div className="order">
            <div className="order__head">
                <h2>Order Summary</h2>

            </div>
            {/* <div className="order__content--hid ">
                Your Oreds
            </div> */}
            <div className="order__content">
                {orders.length > 0  ?
                    orders.map((car, index) => (
                        <div className="order__container" key={index} >
                            <h3> {car.dish} </h3>
                            <h3><small>₹ </small> {car.defaultPrice}</h3>
                            <h3> {car.quantity} * {car.defaultPrice} = <small>₹ {car.price}</small>{}</h3>
                        </div>
                    )) :
                    <h2>No Previous Orders</h2>
                }

            </div>
            <div className="order_total">
                <h2>SubTotal</h2>
                <h3><small>₹ </small>{orders.length > 0  ? total : 0 }</h3>
            </div>


        </div>
    )
}

export default Order;
