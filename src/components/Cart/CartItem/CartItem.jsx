import React from 'react'

import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme =>({
    root:{
        width:'100%',
        display:'flex',
        height:'80px',
        marginBottom:'15px',
        border:'1px solid black'
    },
    itemDetail:{
        display:'flex',
        flexDirection:'column',
        padding:'10px 20px',
        width:'60%',
        alignItems:'flex-start',
        justifyContent:'center',
    },
    item_name:{
        margin:'1rem',
    },
    item_price:{
        margin:'1rem',
    }
}))

export default function CartItem() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img style={{width:'40%'}} />
            <div className={classes.itemDetail}>
                <span className={classes.item_name}></span>
                <span className={classes.item_price}></span>
            </div>
        </div>
    )
}
