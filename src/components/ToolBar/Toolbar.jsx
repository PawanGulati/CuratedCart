import React, { Fragment } from 'react'
import classes from './ToolBar.module.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link  from '@material-ui/core/Link';
import ShopIcon from '@material-ui/icons/Shop';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
    root: {
      justifyContent:'space-between',
      flex: 1,
      height:'56px',
      width:'100%',
      top:0,
      left:0,
      position:'sticky',
      zIndex:90,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar:{
      height:'100%',
      flex:1,
      justifyContent:'space-between',
    },
    link:{
      cursor:'pointer',
      fontWeight:'bold',
      display:'flex'
    }
  }));

const links = (
    <div className={classes.links}>
        <Link href='#' underline="none" className={classes.link} color="inherit">
            <Typography variant='body1' style={{margin:'2px',fontWeight:500}}>Shop</Typography>
        </Link>
        <Link href='#' underline="none" className={classes.link} color="inherit">
            <Typography variant='body1' style={{margin:'2px',fontWeight:500}}>Product</Typography>
        </Link>
        <Link href='/auth' underline="none" className={classes.link} color="inherit">
            <ExitToAppIcon/>
            <Typography variant='body1' style={{margin:'2px',fontWeight:500}}>SignIn</Typography>
        </Link>
        <Link href='/auth' underline="none" className={classes.link} color="inherit">
            <ShopIcon fontSize='large'/>
        </Link>
    </div>
)

export default props => {
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
}
