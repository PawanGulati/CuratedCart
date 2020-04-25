import React from 'react'
import {makeStyles,Typography} from '@material-ui/core'
import BackDrop from '../BackDrop'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Link  from '@material-ui/core/Link';
import {auth} from '../../../firebase/firebase.utils'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../../store/user/user.selector'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    root:{
        height:'100%',
        position:'fixed',
        top:0,
        left:0,
        zIndex:800,
        backgroundColor:'white',
        maxWidth:'60%',
        width:'370px',
        // padding:'20px 20px',
        [theme.breakpoints.up('sm')]:{
            display:'none'
        },
        transition:'transform 0.4s ease-in-out'
    },
    open:{
        transform:'translateX(0)'
    },
    close:{
        transform:'translateX( -370px )'
    },
    user : {
        width : '100%',
        height : '20%',
        background : '#c4c49d',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        flexFlow : 'column',
        fontWeight :'bold',
        borderBottom : '2px solid black'
    },
    userIcon :{
        fontSize : '80px',
    },
    userName :{
        fontFamily :'"Dosis",sans-serif',
        fontWeight : 'bold'
    },
    links:{
        fontFamily :'"Dosis",sans-serif',
        padding :'10px 20px',
        background : '#c4c49d',
        height : '73%'
    },
    link : {
        marginBottom : '20px',
    },
    unAuth:{
        backgroundImage : 'url("https://i.ibb.co/x7tpd54/2741840.jpg")',
        width : '100%',
        height : '20%',
        backgroundPosition : 'center',
        backgroundSize : 'cover',
    },
    connect:{
        width :'100%',
        height : '7%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-around',
        background : '#c4c49d',
        borderTop : '2px solid black'
    },
    textStyle:{
        margin:'2px',
        fontWeight:'bolder', 
        fontFamily:'"Dosis",sans-serif'
    },
    
}))

// show?classes.open:null

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
})

export default connect(mapStateToProps)(function SideDrawer({show,toggleSide,currentUser}) {
    const classes = useStyles()
    const links =(<div className={classes.links}> 
        <Link href='/shop' underline="none" className={classes.link} color="inherit">
            <Typography variant='body1' className={classes.textStyle}>Shop</Typography>
        </Link>
        <Link href='/#products' underline="none" className={classes.link} color="inherit">
            <Typography variant='body1' className={classes.textStyle}>Product</Typography>
        </Link>
        {
            currentUser!==null?(
                <Link onClick={() =>auth().signOut() } underline="none" className={classes.link} color="inherit">
                    <Typography variant='body1' className={classes.textStyle}>Logout</Typography>
                </Link>
            ):(
                <Link href='/signin' underline="none" className={classes.link} color="inherit">
                    <Typography variant='body1' className={classes.textStyle}>Login</Typography>
                </Link>
            )    
        }
    </div>)
    
    return (
        <>
            <BackDrop show={show} toggleSide={toggleSide}/>
            <div className={`${classes.root} ${show?classes.open:classes.close}`} >
                {currentUser ? (<div className={classes.user}>
                    <PermIdentityIcon className={classes.userIcon}/>
                    <Typography variant={'h5'} className={classes.userName}>{currentUser.displayName}</Typography>
                </div>):<div className={classes.unAuth}/>}
                {links}
                <div className={classes.connect}>
                    <FacebookIcon fontSize='large'/>
                    <TwitterIcon fontSize='large'/>
                    <InstagramIcon fontSize='large'/>
                    <YouTubeIcon fontSize='large'/>
                </div>
            </div>
        </>
    )
})
