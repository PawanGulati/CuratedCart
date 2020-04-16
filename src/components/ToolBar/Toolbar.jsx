import React from 'react'
import classes from './ToolBar.module.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link  from '@material-ui/core/Link';
import ShopIcon from '@material-ui/icons/Shop';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../Cart/CartIcon/CartIcon';
import CartDropdown from '../Cart/CartDropdown/CartDropdown';

const links = (
    <div className={classes.links}>
        <Link href='#' underline="none" className={classes.link} color="inherit">
            <Typography variant='body1' style={{margin:'2px',fontWeight:500, fontFamily:'"Dosis",sans-serif'}}>Shop</Typography>
        </Link>
        <Link href='#' underline="none" className={classes.link} color="inherit">
            <Typography variant='body1' style={{margin:'2px',fontWeight:500,fontFamily:'"Dosis",sans-serif'}}>Product</Typography>
        </Link>
        <Link onClick={() =>auth().signOut() } underline="none" className={classes.link} color="inherit">
            <ExitToAppIcon/>
            <Typography variant='body1' style={{margin:'2px',fontWeight:500,fontFamily:'"Dosis",sans-serif'}}>Logout</Typography>
        </Link>
        <CartIcon />
    </div>
)

const mapStateToProps = ({user:{currentUser},cart:{drop_hide}}) =>({
    currentUser,
    drop_hide
})

export default connect(mapStateToProps)(({currentUser,drop_hide}) => {
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
