import React from 'react'

import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme =>({
    root:{
        width:'100%',
        display:'flex',
        height:'80px',
        marginBottom:'15px',
        // border:'1px solid black'
    },
    itemDetail:{
        display:'flex',
        flexFlow:'column',
        padding:'10px',
        width:'60%',
        alignItems:'flex-start',
        justifyContent:'center',
    },
    item_image:{
        width : '40%',
        backgroundPosition : 'center',
        backgroundSize : 'cover',
    },
    item_name:{
        fontWeight : 'bold',
        textAlign : 'start'
        // margin:'1rem',
    },
    item_price:{
        fontWeight : '400',
        // margin:'',
    }
}))

export default function CartItem(props) {
    const classes = useStyles()
    console.log(props)
    return (
        <div className={classes.root}>
            <div style={{backgroundImage : `url(${props.imageURL})`}} className={classes.item_image}></div>
            <div className={classes.itemDetail}>
                <span className={classes.item_name}>{props.name.substring(0,15)}....</span>
                <span className={classes.item_price}>₹{props.price.toLocaleString()}</span>
            </div>
            </div>
        )
        }
        
        // <img src={props.imageURL} style={{width:'40%'}} />