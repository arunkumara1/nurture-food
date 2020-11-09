import React from 'react';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './style.js';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './SideDrawer.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider.js';
import { auth } from '../../firebase/firebase.js';
import { actionTypes } from '../../store/reducer.js';


const SideDrawer = () => {

  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false
  });


  const [{ user }, dispatch] = useStateValue();

  const history = useHistory();

  const traversePage = (text) => {
    switch (text.target.innerText) {
      case 'Cart':
        user ? history.push('/cart') :  history.push('/login')
        break;
      case 'Orders':
        history.push('/orders');
        break;
      case 'Home':
        history.push('/');
        break;
      case 'Contact Us':
        history.push('/contact');
        break;
      case 'Log In':
        history.push('/login');
        break;
      case 'Log Out':
        history.push('/');
        dispatch({
            type:actionTypes.SET_USER,
            user: null
        })
        break;
      default:
        history.push('/');
        break;
    }
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = 'left';
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Cart', 'Orders'].map((text, index) => (
          <ListItem button key={text} onClick={(text) => traversePage(text)}>
            <ListItemIcon >{
              text === 'Home' ? <HomeIcon /> : (text === 'Cart') ? <ShoppingCartIcon /> : <TrackChangesIcon />
            }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Contact Us', user !== null ? "Log Out" : "Log In"].map((text, index) => (
          <ListItem button key={text} onClick={(text) => traversePage(text)} >
            <ListItemIcon>{
              text === 'Contact Us' ? <ContactSupportIcon /> : <ExitToAppIcon />
            }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="sidedrawer__container">
      <React.Fragment key={anchor}>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor} */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(anchor, true)}
          edge="start"
        // className={clsx(classes.menuButton ,state[anchor] && classes.hide)}
        >
          <MenuIcon />
        </IconButton>

        {/* </Button> */}
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {/* LOGO NAME */}
          <div className="sidedrawer__container__image">
            <img src={require('../../assets/images/logo.PNG')} alt={require('../../assets/images/logo.PNG')} />
            <h3>NURTURE FOOD</h3>
          </div>
          {list(anchor)}

        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default SideDrawer;