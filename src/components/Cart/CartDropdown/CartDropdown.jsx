import React from 'react'

import {makeStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme =>({
    cart_drop:{
        height:'340px',
        width:'240px',
        position:'absolute',
        top:'58px',
        right:0,
        zIndex:5,
        border:'1px solid black',
        background:'white',
        display:'flex',
        flexDirection:'column',
        padding:'20px'
    },
    cart_items:{
        height:'240px',
        display:'flex',
        flexDirection:'column',
        overflow:'auto',
        border:'1px solid black'
    },
    check_butt:{
        marginTop:'auto',
        border:'1px solid black',
    }
})) 

export default function CartDropdown() {
    const classes = useStyles()
    
    return (
        <div className={classes.cart_drop}>
            <div className={classes.cart_items} />
            <Button variant='outline' color='primary' className={classes.check_butt}>Check Me Out</Button>
        </div>
    )
}
