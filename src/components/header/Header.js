import React, { useState } from 'react'
import SideDrawer from '../Sidedrawer/SideDrawer';
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { useHistory, NavLink } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider';
import { actionTypes } from '../../store/reducer';
import Foods from '../Foods/Foods';
import db from '../../firebase/firebase';


const Header = () => {

    const [{ user, cart }, dispatch] = useStateValue();

    const [search, setSearch] = useState('');

    const [items, setItems] = useState([]);

    const history = useHistory();

    const loginHandler = () => {
        if (user !== null) {
            dispatch({
                type: actionTypes.SET_USER,
                user: null
            });
            localStorage.removeItem('user');
            history.push('/');
        } else {
            history.push('/login');
            
        }
    }


    const searchHandler = (event) => {
        event.preventDefault();
        if (search !== '') {
            db.collection('foods').where("dish", "==", search).onSnapshot((snapshot) => (
                snapshot.docs.map(doc => (
                    dispatch({
                        type: actionTypes.SERACH_ITEMS,
                        items: doc.data()
                    })
                ))
            ));
        } else {
            dispatch({
                type: actionTypes.SERACH_ITEMS,
                items: {}
            })
        }
    }

    return (
        <div className="header">

            <div className="header__left">
                <SideDrawer />
                <div className="header__left__image" onClick={() => history.push('/')}>
                    <img src={require('../../assets/images/logo.PNG')} alt={require('../../assets/images/logo.PNG')} />
                    <h3>NURTURE FOOD</h3>
                </div>
            </div>

            {/* Search bar  with button*/}
            <div className="header__center">
                <form>
                    <input placeholder="Serach by catagory and Press Enter"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <SearchIcon />
                    <button type="submit" onClick={(event) => searchHandler(event)}>Hidden button</button>
                </form>
            </div>


            {/* Hi Nme , Logout/SignIn , Cart */}
            <div className="header__right">
                <div className="header__right__info">
                    {user !== null ? "Hello  " + user.displayName + "!!" : " "}
                </div>
                <div className="header__right__cart_option">
                    <IconButton onClick={() => user ? history.push('/cart') :  history.push('/login')}>
                        <ShoppingCartIcon />
                        <p><strong> {cart.length === 0 ? '0' : cart.length}</strong></p>
                    </IconButton>

                </div>

                <div className="header__right__cart">
                    <IconButton onClick={() => history.push('/orders')}>
                        <TrackChangesIcon />
                        <span className='header__optionLineTwo'>
                            Track order
                        </span>
                    </IconButton>

                </div>
                <div className="header__right__cart">
                    <IconButton onClick={() => loginHandler()}>
                        <ExitToAppIcon />
                        <span className='header__optionLineTwo'>
                            {user !== null ? "Sign Out" : "Sign In"}
                        </span>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header;
