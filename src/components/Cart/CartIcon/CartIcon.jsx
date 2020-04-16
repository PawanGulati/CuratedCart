import React from 'react'
import { ReactComponent as BagIcon} from '../../../assets/Images/shopping-bag.svg'
import {makeStyles} from '@material-ui/core'

import { connect } from 'react-redux'
import {toggleDrop} from '../../../store/cart/cart.action'

const useStyles = makeStyles(theme =>({
    cart_icon:{
        width:'45px',
        height:'45px',
        position:'relative',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        cursor:'pointer'    
    },
    bag_icon:{
        width:'30px',
        height:'30px',
        '& g':{
            fill:'#FFFFFF',
        },
        '& path':{
            stroke: '#000000',
            strokeWidth: '15px',
        }
    },
    item_count:{
        position:'absolute',
        bottom:'11px',
        fontWeight:'bold',
        fontSize:'12px'
    }
}))

export default connect(null)(function CartIcon({dispatch}) {
    const classes = useStyles()

    return (
        <div className={classes.cart_icon} onClick={()=>dispatch(toggleDrop())}>
            <BagIcon className={classes.bag_icon} />         
            <span className={classes.item_count}>0</span>
        </div>
    )
})
