import React from 'react'
import classes from './ToolBar.module.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link  from '@material-ui/core/Link';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../Cart/CartIcon/CartIcon';
import CartDropdown from '../Cart/CartDropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectDropToggle } from '../../store/cart/cart.selector';
import MenuIcon from '@material-ui/icons/Menu';


const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    drop_hide:selectDropToggle
})

export default connect(mapStateToProps)(({currentUser,drop_hide,toggleSide}) => {
     
     const links = (
        <div className={classes.links}>
            {currentUser?<Typography variant='body1' style={{margin:'2px',fontWeight:'bolder',fontFamily:'"Dosis",sans-serif',padding:'1px 15px'}}>Hello, {currentUser.displayName}</Typography>:null}
            <div className={classes.links_1}>
            <Link href='/shop' underline="none" className={classes.link} color="inherit">
                <Typography variant='body1' style={{margin:'2px',fontWeight:'bolder', fontFamily:'"Dosis",sans-serif'}}>Shop</Typography>
            </Link>
            <Link href='/#products' underline="none" className={classes.link} color="inherit">
                <Typography variant='body1' style={{margin:'2px',fontWeight:'bolder',fontFamily:'"Dosis",sans-serif'}}>Product</Typography>
            </Link>
            {currentUser!==null?(
                    <Link onClick={() =>auth().signOut() } underline="none" className={classes.link} color="inherit">
                        <ExitToAppIcon/>
                        <Typography variant='body1' style={{margin:'2px',fontWeight:'bolder',fontFamily:'"Dosis",sans-serif'}}>Logout</Typography>
                    </Link>
                ):(
                    <Link href='/signin' underline="none" className={classes.link} color="inherit">
                        <ExitToAppIcon/>
                        <Typography variant='body1' style={{margin:'2px',fontWeight:'bolder',fontFamily:'"Dosis",sans-serif'}}>Login</Typography>
                    </Link>
                )    
            }
            </div>
            <CartIcon />
        </div>
    )
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{height:'100%'}}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.logo_container}><span className={classes.Hamburger}><MenuIcon onClick={toggleSide}/></span><Link href='/' style={{textDecoration:'none' , color : 'black'}} >Curated Cart</Link></div>{/* <Logo /> will be here */}
                        {links}
                        {
                            drop_hide?    
                            <CartDropdown />
                            :null
                        }
                    </Toolbar>
            </AppBar>
        </div>
    )
})
