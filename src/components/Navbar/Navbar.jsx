import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import {ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/ecommerce.png';
import useStyle from './styles';
import {Link, useLocation} from 'react-router-dom';

export const Navbar = ({totalItems}) => {
    const classes = useStyle();
    const location = useLocation();
    
  return (
    <>
        <AppBar position="fixed" className={ classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                    Commerce.js
                </Typography>
                <div className={classes.grow} />
               {location.pathname === '/' && (
                <div className={classes.button}>
                    <Link to="/cart">go to cart</Link>
                    <IconButton component={Link} aria-label="show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div> )}
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar;