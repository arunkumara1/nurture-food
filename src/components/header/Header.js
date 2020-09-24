import React from 'react'
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
import { useHistory , NavLink } from 'react-router-dom';


const Header = () => {

    const history = useHistory();

    return (
        <div className="header">

            <div className="header__left">
                <SideDrawer />
                <div className="header__left__image">
                    <img src={require('../../assets/images/logo.PNG')} alt={require('../../assets/images/logo.PNG')} />
                    <h3>NURTURE FOOD</h3>
                </div>
            </div>

            {/* Search bar  with button*/}
            <div className="header__center">
                <form>
                    <input placeholder="Serach by catagory" />
                    <SearchIcon />
                    {/* <div className="header__center__conatiner">
                        <input placeholder="Serach by catagory" />
                        <SearchIcon />
                    </div> */}

                    <button type="submit" >Hidden button</button>
                </form>
            </div>


            {/* Hi Nme , Logout/SignIn , Cart */}
            <div className="header__right">
                <div className="header__right__info">
                    Hello !! Hero
                </div>
                <div className="header__right__cart_option">
                    <ShoppingCartIcon />
                    <p><strong>1</strong></p>


                </div>

                <div className="header__right__cart">
                    {/* <IconButton onClick={() => history.push('cart')}> */}
                        <TrackChangesIcon />
                    {/* </IconButton> */}
                        <span className='header__optionLineTwo'>
                            Track order
                        </span>

                </div>
                <div className="header__right__cart">
                    <ExitToAppIcon />
                    <span className='header__optionLineTwo'>
                        SignOut
                        </span>
                </div>
            </div>



        </div>
    )
}

export default Header;
