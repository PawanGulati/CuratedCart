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

export default function CartItem(props) {
    const classes = useStyles()
    console.log(props)
    return (
        <div className={classes.root}>
            <img src={props.imageURL} style={{width:'40%'}} />
            <div className={classes.itemDetail}>
                <span className={classes.item_name}>{props.name}</span>
                <span className={classes.item_price}>{props.price}</span>
            </div>
        </div>
    )
}
