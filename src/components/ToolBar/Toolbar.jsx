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

const links = (
    <div className={classes.links}>
        <Link href='#' underline="none" className={classes.link} color="inherit">
            <Typography variant='body1' style={{margin:'2px',fontWeight:500}}>Shop</Typography>
        </Link>
        <Link href='#' underline="none" className={classes.link} color="inherit">
            <Typography variant='body1' style={{margin:'2px',fontWeight:500}}>Product</Typography>
        </Link>
        <Link onClick={() =>auth().signOut() } underline="none" className={classes.link} color="inherit">
            <ExitToAppIcon/>
            <Typography variant='body1' style={{margin:'2px',fontWeight:500}}>Logout</Typography>
        </Link>
        <Link href='/auth' underline="none" className={classes.link} color="inherit">
            <ShopIcon fontSize='large'/>
        </Link>
    </div>
)

const mapStateToProps = state =>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(props => {
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{height:'100%'}}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.logo_container}>LOGO</div>{/* <Logo /> will be here */}
                    {links}                
                </Toolbar>
            </AppBar>
        </div>
    )
})
