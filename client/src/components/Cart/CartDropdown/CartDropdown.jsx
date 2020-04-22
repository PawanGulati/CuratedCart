import React from 'react'

import {makeStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CartItem from '../CartItem/CartItem'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotalPrice } from '../../../store/cart/cart.selector'
import { toggleDrop } from '../../../store/cart/cart.action'

const useStyles = makeStyles(theme =>({
    cart_drop:{
        height:'340px',
        width:'240px',
        position:'absolute',
        top:'60px',
        right:0,
        zIndex:100,
        // border:'1px solid black',
        boxShadow:'1px 2px 25px 5px rgba(0,0,0,.4)',
        background:'white',
        display:'flex',
        flexDirection:'column',
        padding:'10px'
    },
    cart_items:{
        height:'240px',
        display:'flex',
        flexDirection:'column',
        overflow:'auto',
        // border:'1px solid black',
        padding:'.5rem .5rem 0 .5rem'
    },
    check_butt:{
        width : '100%',
        marginTop:'auto',
        borderRadius : '8px',
        color : 'white',
        fontWeight : 'bolder',
        fontSize :'17px'
    },
    checkout:{
        borderTop : '2px solid black',
        fontSize : '24px',
        width : '100%',
        height : '70px',
        display : 'flex',
        flexFlow : 'column',
        alignItems : 'flex-start',
        zInde : '2'
    },
    message :{
        height : '100%' ,
        display:'flex',
        flexFlow : 'column', 
        alignItems : 'center',
        justifyContent : 'center'
    }
})) 

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartTotalPrice:selectCartTotalPrice
})

export default connect(mapStateToProps)(function CartDropdown({cartItems,cartTotalPrice,dispatch}) {
    const classes = useStyles();
    // let totalPrice=0;
    // const items = [];
    //     if(cartItems){
    //         for(let item in cartItems)
    //         {
    //             items.push(cartItems[item]);
    //             totalPrice = totalPrice + (cartItems[item].price)* (cartItems[item].quantity);
    //         }
    // }

    const onCheckout = ()=>{
        // let history = useHistory()
        // history.push('/checkout')
        window.location.href = '/checkout'
        dispatch(toggleDrop())
    }
  
    let content =(
        <div className={classes.message}>
            <div style={{fontSize:'25px',fontWeight :'bold'}}>
                Hey, it feels so light!
            </div>
            <div>
                Let's add some items.
            </div>
        </div>
    )
    
    if(cartItems.length)
    {
        content = (
            <div>
            <div className={classes.cart_items}>
            {
                cartItems.map(item=>
                    <CartItem key={item.id} {...item}/>)
            }
        </div>
        <div className={classes.checkout}>
            <span>Total: ₹{cartTotalPrice.toLocaleString()}</span>
            <Button variant='contained' color='primary' className={classes.check_butt} onClick={()=>onCheckout()}>Check Me Out</Button>
        </div>
        </div>)
    }

    return (
        
        <div className={classes.cart_drop}>
            {content}
        </div>
    )
})
