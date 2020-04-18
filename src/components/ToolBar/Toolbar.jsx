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


const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    drop_hide:selectDropToggle
})

export default connect(mapStateToProps)(({currentUser,drop_hide}) => {

    const links = (
        <div className={classes.links}>
            <Link href='/shop' underline="none" className={classes.link} color="inherit">
                <Typography variant='body1' style={{margin:'2px',fontWeight:'bolder', fontFamily:'"Dosis",sans-serif'}}>Shop</Typography>
            </Link>
            <Link href='/#products' underline="none" className={classes.link} color="inherit">
                <Typography variant='body1' style={{margin:'2px',fontWeight:'bolder',fontFamily:'"Dosis",sans-serif'}}>Product</Typography>
            </Link>
            {!currentUser?(
                    <Link onClick={() =>auth().signOut() } underline="none" className={classes.link} color="inherit">
                        <ExitToAppIcon/>
                        <Typography variant='body1' style={{margin:'2px',fontWeight:'bolder',fontFamily:'"Dosis",sans-serif'}}>Logout</Typography>
                    </Link>
                ):(
                    <Link href='/auth' underline="none" className={classes.link} color="inherit">
                        <ExitToAppIcon/>
                        <Typography variant='body1' style={{margin:'2px',fontWeight:'bolder',fontFamily:'"Dosis",sans-serif'}}>SignIn</Typography>
                    </Link>
                )    
            }
            <CartIcon />
        </div>
    )

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{height:'100%'}}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.logo_container}>Curated Cart</div>{/* <Logo /> will be here */}
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
