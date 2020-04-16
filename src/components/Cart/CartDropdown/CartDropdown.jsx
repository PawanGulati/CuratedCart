import React from 'react'

import {makeStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CartItem from '../CartItem/CartItem'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme =>({
    cart_drop:{
        height:'340px',
        width:'240px',
        position:'absolute',
        top:'60px',
        right:'.5rem',
        zIndex:100,
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
        border:'1px solid black',
        padding:'.5rem .5rem 0 .5rem'
    },
    check_butt:{
        marginTop:'auto',
        border:'1px solid black',
    }
})) 

const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
})

export default connect(mapStateToProps)(function CartDropdown({cartItems}) {
    const classes = useStyles()
    
    const items = {
        if(cartItems){
            
        }
    }

    return (
        <div className={classes.cart_drop}>
            <div className={classes.cart_items}>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <Button variant='outline' color='primary' className={classes.check_butt}>Check Me Out</Button>
        </div>
    )
})
