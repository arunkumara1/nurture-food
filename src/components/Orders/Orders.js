import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import db from '../../firebase/firebase';
import { useStateValue } from '../../store/StateProvider';
import Order from './Order';
import './Orders.css';
import StepperComponent from './StepperComponent';


const Orders = () => {

    const [{ user }, dispatch] = useStateValue();

    const history = useHistory();

    const [isPresent, setIsPresent] = useState([]);


    useEffect(() => {

        if (localStorage.getItem('user')) {
            db.collection('orders').where('user', '==', localStorage.getItem('user')).orderBy('orderID', 'desc').
                onSnapshot((snapshot) => (
                    setIsPresent(snapshot.docs)
                ))
        }
    }, []);



    return (
        <div className="orders">
            {/* {
                localStorage.getItem('orderID') ? <Order /> : null
            } */}
            {isPresent.length > 0 ?
                <React.Fragment>
                    <Order />
                    <StepperComponent />
                </React.Fragment>

                : 
               null
                }

        </div>
    )
}

export default Orders;
