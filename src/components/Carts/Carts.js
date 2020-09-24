import React , { useState } from 'react';
import Cart from './Cart/Cart';
import './Carts.css';
import useStyles from './style';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import { IconButton } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import { PayPalButton } from "react-paypal-button-v2";

const Carts = () => {

    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="carts">
            <div className="carts__top__info">
                <p>SubTotal : <strong>₹</strong> 50</p>
                <div className="post_bottom__option">
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
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                   <div className="check">

                    <p>WORKINGG</p>
                   </div>
                </Collapse>
            </div>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </div>
    )
}

export default Carts;
